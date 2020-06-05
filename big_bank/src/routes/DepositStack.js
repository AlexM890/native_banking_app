import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Deposit from '../screens/Deposit'
import Header from '../shared/Header'
const Stack = createStackNavigator();

export default ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Deposit" component={Deposit}
            options={{
                headerTitle: () => <Header navigation={navigation} title="Deposit" />
                }} 
                    />
        </Stack.Navigator>      
    );
  }