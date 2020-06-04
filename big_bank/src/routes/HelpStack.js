import React from 'react'
import TransactionsList from '../screens/TransactionsList'
import { createStackNavigator } from '@react-navigation/stack';
import Help from '../screens/Help'
import Header from '../shared/Header'

import Home from '../screens/Home'

const Stack = createStackNavigator();

export default ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Help Desk" component={Help} 
            options={{
                headerBackground: () => <Header navigation={navigation} title="Help Desk" />,
                headerTransparent: true,
                headerTitle: ""
            }} 
                />
        </Stack.Navigator>      
    );
  }