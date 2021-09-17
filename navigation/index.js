import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//instantiate stack navigation
const Stack = createNativeStackNavigator();

//import screens
import Login from '../screens/Login';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';

export const AuthStack = () => {
    return (
        <>
        <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ 
            headerShown: false
        }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
        </>
    )
}

export const MainStack = () => {
    return (
        <Stack.Screen name="Dashboard" component={Dashboard} />
    )
}
