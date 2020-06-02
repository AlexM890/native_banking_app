import React from 'react'
import { View, Text } from 'react-native'
// import { GlobalStyles } from '../styles/Global'
import Navigation from '../routes/TabNavigation'
import { GlobalStyles } from '../styles/Global'

const Home = () => {
    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.homeBalanceText}>Balance</Text>
            <Text style={GlobalStyles.homeBalanceNumber}>0</Text>         
        </View>
    )
}

export default Home
