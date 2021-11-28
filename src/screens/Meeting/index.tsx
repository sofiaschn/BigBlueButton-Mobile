import React from 'react';
import { WebView } from 'react-native-webview';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';
import { Notifications } from '../../services/notifications';

const Meeting = ({ route }: Props<StackParameters, 'Meeting'>) => {
    Notifications.create({
        channelId: 'bbbmobilenotification',
        message: 'Conferência em andamento, clique aqui para abrir.',
        playSound: false,
        vibrate: false,
        id: 0,
        autoCancel: false,
        onlyAlertOnce: true,
    });

    let webview: WebView | null;

    // This injection makes sure we don't open the page on a new tab, as well
    // as auto-clicking the join button.
    const initInjection = `
        window.open = (e) => (window.location = e);
        document.getElementById('join_button_input').click();
        true;
    `;

    // This injection gets the number of users currently connected every second;
    const getUserInjection = `
        setInterval(() => {
            var _obj =
                window.Meteor.default_connection._mongo_livedata_collections
                .users._docs._map;
            window.ReactNativeWebView.postMessage(
                Object.values(_obj).filter((value) => value.validated)
                .length.toString(),
            );
        }, 1000);
        true;
    `;

    const movingAverage: number[] = [];

    const checkConnectedUsers = (data: string) => {
        const connectedNow = parseInt(data, 10);

        if (!connectedNow || isNaN(connectedNow)) {
            return;
        }

        movingAverage.push(connectedNow);

        if (movingAverage.length > 10) {
            movingAverage.shift();
            const average = movingAverage.reduce((acc, cur) => acc + cur) / 10;

            if (average > connectedNow && connectedNow < 5) {
                Notifications.create({
                    channelId: 'bbbmobilenotification',
                    message:
                        'Muitos usuários saíram da conferência recentemente. Clique aqui para abrir.',
                    playSound: true,
                    vibrate: true,
                    id: 1,
                    autoCancel: true,
                });
            }
        }
    };

    return (
        <WebView
            userAgent=""
            source={{ uri: route.params.url }}
            injectedJavaScript={initInjection}
            ref={(ref) => (webview = ref)}
            onMessage={(event) => checkConnectedUsers(event.nativeEvent.data)}
            onNavigationStateChange={(event) =>
                event.title.includes('mconf.rnp.br') &&
                webview?.injectJavaScript(getUserInjection)
            }
        />
    );
};

export default Meeting;
