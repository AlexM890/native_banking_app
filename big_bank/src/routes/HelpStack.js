import React from 'react'
import TransactionsList from '../screens/TransactionsList'
import { createStackNavigator } from '@react-navigation/stack';
import Help from '../screens/Help'

import Home from '../screens/Home'

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Help" component={Help} />
        </Stack.Navigator>      
    );
  }