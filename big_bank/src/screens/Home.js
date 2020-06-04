import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Navigation from '../routes/TabNavigation'
import { GlobalStyles } from '../styles/Global'
import { connect } from 'react-redux'

const Home = ({navigation , balance}) => {
    return (
        <View style={GlobalStyles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("TransactionsList")}>
                <Text style={GlobalStyles.homeBalanceText}>Balance</Text>
                <Text style={GlobalStyles.homeBalanceNumber}>$ { balance }</Text>        
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state) =>{
    return {
        balance: state.balance
    }
}


export default connect(mapStateToProps)(Home)
