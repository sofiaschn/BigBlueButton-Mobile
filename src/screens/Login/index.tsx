import React from 'react';
import { WebView } from 'react-native-webview';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';

const Login = ({ navigation }: Props<StackParameters, 'Login'>) => {
    const uri = 'https://moodle.ufsc.br/login/index.php';
    const loggedInURL = 'https://moodle.ufsc.br/my/';

    return (
        <WebView
            source={{ uri }}
            onLoadStart={(event) => {
                if (event.nativeEvent.url === loggedInURL) {
                    navigation.navigate('Home', { loggedIn: true });
                }
            }}
        />
    );
};

export default Login;
