import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login/index';
import { Product } from '../screens/Product/index';
import { ProductRegister } from '../screens/ProductRegister/index';

const Stack = createStackNavigator();

export function StackRoutes () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }} 
            >

            <Stack.Screen name='Login' component={Login} />

            <Stack.Screen name='Product' component={Product} />
            <Stack.Screen name='ProductRegister' component={ProductRegister} />
        </Stack.Navigator>
    );
}