import React from 'react'
import TransactionsList from '../screens/TransactionsList'
import { Text, StatusBar, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createStackNavigator();

export default () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer independent={true}>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="TransactionsList" component={TransactionsList} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
  }