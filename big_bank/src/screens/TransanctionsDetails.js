import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../styles/Global'
import Card from '../shared/Card'

const TransanctionsDetails = ({route}) => {
    const item = route.params
    return (
        <View style={GlobalStyles.container}>
            <Card styles={styles.card}>
                <Text>Date of Transaction</Text>
                <Text style={styles.text}>{item.date}</Text>
            
                <Text>Type fo Transaction</Text>
                <Text>{item.transactionType}</Text>
            </Card>
            <Card styles={styles.card}>
                <Text>Amount</Text>
                <Text style={styles.text}>{item.amount}</Text>
                <Text>To Whom</Text>
                <Text>{item.to}</Text>
            </Card>
            <Card styles={styles.card}>
                <Text>Memo</Text>
                <Text>{item.memo}</Text>
            </Card>
        </View>
    )
}

export default TransanctionsDetails

const styles = StyleSheet.create({
    text:{
        marginBottom: 10,

    },
    card:{
        width: 300,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    }
})