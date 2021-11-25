import React, { useState } from 'react';
import { Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { requestPermissions } from '../../services/permissions';

const Meeting = () => {
    const [uri, setURI] = useState('');

    Linking.getInitialURL().then((value) => {
        if (!value) {
            return;
        }

        requestPermissions(['camera', 'microphone']);

        value = value.replace('view.php?', 'bbb_view.php?action=join&');

        setURI(value);
    });

    return <WebView userAgent={''} source={{ uri }} />;
};

export default Meeting;
