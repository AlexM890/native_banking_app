import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import TransactionsListItem from '../screens/TransactionsListItem'

const TransactionsList = (props) => {

    const detailsHandler = () => {

    }

    return (
        <ScrollView>
            <View>
                {
                    props.transactions.length > 0 ? props.transactions.map(item => 
                        <TouchableOpacity onPress={() => console.log(item)}>
                            <TranasctionsListItem key={item.id} {...item} />
                        </TouchableOpacity>
                        ) :
                        <Text>You have no transactions...</Text>
                }
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({
    transactions: state.transactions
})

export default connect(mapStateToProps)(TransactionsList)
