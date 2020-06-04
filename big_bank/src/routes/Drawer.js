import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation'
import HelpStack from './HelpStack'

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigation} />
        <Drawer.Screen name="Help Desk" component={HelpStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}