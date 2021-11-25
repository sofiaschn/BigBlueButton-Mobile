import React, { useState } from 'react';
import { Linking } from 'react-native';
import { WebView } from 'react-native-webview';

const Meeting = () => {
    const [uri, setURI] = useState('');
    const userAgent =
        'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36';
    Linking.getInitialURL().then((value) => {
        if (!value) {
            return;
        }

        value = value.replace('view.php?', 'bbb_view.php?action=join&');

        setURI(value);
    });

    return (
        <WebView
            userAgent={userAgent}
            source={{
                uri,
            }}
        />
    );
};

export default Meeting;
