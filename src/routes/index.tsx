import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParameters } from './types';
import Meeting from '../screens/Meeting';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Configuration from '../screens/Configuration';
import translate from '../services/translations';

const Stack = createStackNavigator<StackParameters>();

const routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name={'Home'}
                    component={Home}
                    options={{
                        headerTitle: 'BigBlueButton Mobile',
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name={'Meeting'}
                    component={Meeting}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name={'Login'} component={Login} />
                <Stack.Screen
                    name={'Configuration'}
                    component={Configuration}
                    options={{ headerTitle: translate('configuration') }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default routes;
