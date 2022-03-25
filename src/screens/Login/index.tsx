import React from 'react';
import { WebView } from 'react-native-webview';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';

const Login = ({ navigation, route }: Props<StackParameters, 'Login'>) => {
    const university = route?.params?.university;
    const uri = `https://${university.url}/login/index.php`;
    const loggedInURL = `https://${university.url}/my/`;

    return (
        <WebView
            source={{ uri }}
            onLoadStart={(event) => {
                if (event.nativeEvent.url.includes(loggedInURL)) {
                    navigation.replace('Home', { university });
                }
            }}
        />
    );
};

export default Login;
