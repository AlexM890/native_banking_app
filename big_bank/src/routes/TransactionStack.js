import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from '../screens/TransactionsList'
import Home from '../screens/Home'
import Header from '../shared/Header'
import TransactionsDetails from '../screens/TransanctionsDetails'
const Stack = createStackNavigator();

export default ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}
            options={{
                headerTitle: () => <Header navigation={navigation} title="Kash App" />
                }} 
                    />
            <Stack.Screen name="TransactionsList" component={TransactionsList}
             options={{
                headerTitle: () => <Header navigation={navigation} title="Transactions List" />
                }}
            />
            <Stack.Screen name="TransactionsDetails" component={TransactionsDetails}
             options={{
                headerTitle: () => <Header navigation={navigation} title="Transactions Details" />
                }}
            />
        </Stack.Navigator>      
    );
  }