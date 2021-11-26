import React from 'react';
import { WebView } from 'react-native-webview';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';

const Meeting = ({ route }: Props<StackParameters, 'Meeting'>) => {
    return (
        <WebView
            userAgent=""
            source={{ uri: route.params.url }}
            injectedJavaScript={`
                window.open = (e) => (window.location = e); 
                $(document).ready(() => {
                    document.getElementById("join_button_input").click();
                });
                true;`}
        />
    );
};

export default Meeting;
