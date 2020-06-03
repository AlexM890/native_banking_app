import React from 'react'
import { View, Text } from 'react-native'

const TransactionsListItem = ({amount, transactionType, date}) => {
    return (
        <View>
            <Text>{amount}</Text>
            <Text>{transactionType}</Text>
            <Text>{date}</Text>
        </View>
    )
}

export default TransactionsListItem
