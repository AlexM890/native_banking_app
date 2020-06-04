import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from '../screens/TransactionsList'
import Home from '../screens/Home'

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TransactionsList" component={TransactionsList} />
        </Stack.Navigator>      
    );
  }