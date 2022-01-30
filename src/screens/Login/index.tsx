import React from 'react';
import { WebView } from 'react-native-webview';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';

const Login = ({ navigation, route }: Props<StackParameters, 'Login'>) => {
    const baseURL = route?.params?.baseURL;
    const uri = `https://${baseURL}/login/index.php`;
    const loggedInURL = `https://${baseURL}/my/`;

    return (
        <WebView
            source={{ uri }}
            onLoadStart={(event) => {
                if (event.nativeEvent.url.includes(loggedInURL)) {
                    navigation.navigate('Home', { loggedIn: true });
                }
            }}
        />
    );
};

export default Login;
