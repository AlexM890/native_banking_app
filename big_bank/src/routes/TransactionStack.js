import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from '../screens/TransactionsList'
import Home from '../screens/Home'
import { AntDesign } from '@expo/vector-icons'
import Header from '../shared/Header'
const Stack = createStackNavigator();

// const openMenu = () => {
//     navigation.openDrawer()
// }

export default ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}
            options={{
                headerTitle: () => <Header navigation={navigation} title="Kash Money" />
                }} 
                    />
            <Stack.Screen name="TransactionsList" component={TransactionsList}
             options={{
                headerTitle: () => <Header navigation={navigation} title="Transactions List" />
                }}
            />
        </Stack.Navigator>      
    );
  }