import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Withdrawal from '../screens/Withdrawal'
import Header from '../shared/Header'
const Stack = createStackNavigator();

export default ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Withdrawal" component={Withdrawal}
            options={{
                headerTitle: () => <Header navigation={navigation} title="Withdrawal" />
                }} 
                    />
        </Stack.Navigator>      
    );
  }