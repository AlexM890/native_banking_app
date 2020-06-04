import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Deposit from "../screens/Deposit"
import Withdrawal from '../screens/Withdrawal'
import TransactionStack from '../routes/TransactionStack'

const Tab = createBottomTabNavigator();

export default () => {

  return (
    
      <Tab.Navigator
        tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'white',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: 'black',
        }}
      >
        <Tab.Screen name="Home" component={TransactionStack} />
        <Tab.Screen name="Deposit" component={Deposit} />
        <Tab.Screen name="Withdrawal" component={Withdrawal} />
      </Tab.Navigator>
   
  );
}