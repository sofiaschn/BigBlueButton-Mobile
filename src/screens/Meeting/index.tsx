import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';
import { Notifications } from '../../services/notifications';
import translate from '../../services/translations';
import { Background } from '../../services/background';
<<<<<<< HEAD
import Spinner from 'react-native-spinkit';

const Meeting = ({ route }: Props<StackParameters, 'Meeting'>) => {
    const [loading, setLoading] = useState(true);
=======

const Meeting = ({ route }: Props<StackParameters, 'Meeting'>) => {
    Background.start();
>>>>>>> 9e2f4aa... Change permission request back to the home page

    let webview: WebView | null;

    // This injection makes sure we don't open the page on a new tab, as well
    // as auto-clicking the join button.
    const initInjection = `
        window.open = (e) => (window.location = e);
        document.getElementById('join_button_input').click();
        document.getElementById('page-mod-bigbluebuttonbn-view').innerHTML = '<div />'
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
                    message: translate('many_users_left_notification'),
                    playSound: true,
                    vibrate: true,
                    id: 1,
                    autoCancel: true,
                    onlyAlertOnce: true,
                });
            }
        }
    };

    useEffect(() => {
        return () => {
            Background.stop();
        };
    }, []);

    return (
        <>
            <Spinner
                type="ThreeBounce"
                isVisible={loading}
                style={{
                    height: '99%',
                    width: '40%',
                    marginLeft: '30%',
                }}
            />
            <WebView
                userAgent="Mozilla/5.0 (Linux; Android 10) Chrome/96.0.4664.104"
                source={{ uri: route.params.url }}
                injectedJavaScript={initInjection}
                ref={(ref) => (webview = ref)}
                onMessage={(event) =>
                    checkConnectedUsers(event.nativeEvent.data)
                }
                onLoad={(event) => {
                    if (event.nativeEvent.title.includes('mconf.rnp.br')) {
                        setLoading(false);
                        Background.start();
                        webview?.injectJavaScript(getUserInjection);
                    }
                }}
            />
        </>
    );
};

export default Meeting;
