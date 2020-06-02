import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Deposit from "../screens/Deposit"
import Withdrawal from '../screens/Withdrawal'
import Home from '../screens/Home'

const Tab = createBottomTabNavigator();

export default () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'white',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: 'black',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Deposit" component={Deposit} />
        <Tab.Screen name="Withdrawal" component={Withdrawal} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}