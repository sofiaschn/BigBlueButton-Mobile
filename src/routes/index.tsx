import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Meeting from '../screens/Meeting';

const Stack = createStackNavigator();

const routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Meeting"
                screenOptions={{
                    presentation: 'transparentModal',
                    headerShown: false,
                }}>
                <Stack.Screen name={'Meeting'} component={Meeting} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default routes;
