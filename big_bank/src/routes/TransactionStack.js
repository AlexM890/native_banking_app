import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from '../screens/TransactionsList'
import Home from '../screens/Home'
import { AntDesign } from '@expo/vector-icons'
import Header from '../shared/Header'
import { BlurView } from 'expo-blur'

const Stack = createStackNavigator();

const openMenu = () => {
    navigation.openDrawer()
}

export default ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}       
            options={{
            headerLeft:() => <AntDesign name='creditcard' size={24} color='black' onPress={(openMenu)} />,
            title: 'My home',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}        
                    />
            <Stack.Screen name="TransactionsList" component={TransactionsList}
             options={{
                header: () => <Header navigation={navigation} title="Transactions List" />,
                headerTransparent: true,
                headerTitle: ""
            }}
            />
        </Stack.Navigator>      
    );
  }