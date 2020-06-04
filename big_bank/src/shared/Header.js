import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { DrawerActions } from '@react-navigation/native'

function Header({ navigation, title, balance }) {

    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <AntDesign name='creditcard' size={24} color='black' onPress={(openMenu)} />
    <Text style={styles.headerTitle}>{ title }</Text>
            <Text>${ balance }</Text>
        </View>
    )
}
const mapStateToProps = (state) =>{
    return {
        balance: state.balance
    }
}


export default connect(mapStateToProps)(Header)
const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

})