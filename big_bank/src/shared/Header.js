import React from 'react'
import {View, Text} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <AntDesign name='creditcard' size={24} color='black' onPress={openMenu} />
            <Text style={styles.headerTitle}>{ title }</Text>
            <Text>{ props.balance}</Text>
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
        flexDirection: 'row'
    },

})