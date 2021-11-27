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

    return (
        <WebView
            userAgent=""
            source={{ uri: route.params.url }}
            injectedJavaScript={`
                window.open = (e) => (window.location = e); 
                document.getElementById("join_button_input").click();
                true;`}
        />
    );
};

export default Meeting;
