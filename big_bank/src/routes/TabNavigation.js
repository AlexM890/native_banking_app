import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DepositStack from "../routes/DepositStack"
import WithdrawalStack from '../routes/WithdrawalStack'
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
        <Tab.Screen name="Deposit" component={DepositStack} />
        <Tab.Screen name="Withdrawal" component={WithdrawalStack} />
      </Tab.Navigator>
  );
}