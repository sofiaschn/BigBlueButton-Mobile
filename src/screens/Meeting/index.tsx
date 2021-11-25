import React from 'react';
import { WebView } from 'react-native-webview';

const Meeting = () => {
    const userAgent =
        'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36';
    const uri =
        'https://live-aws001.mconf.rnp.br/html5client/join';

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
