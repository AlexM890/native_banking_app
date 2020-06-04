import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import TransactionsListItem from '../screens/TransactionsListItem'
import SafeAreaView from 'react-native-safe-area-view'
import Card from '../shared/Card'

const TransactionsList = (props) => {

    const detailsHandler = () => {

    }

    return (
        <SafeAreaView>    
            <ScrollView>
                <View>
                    {
                        props.transactions.length > 0 ? props.transactions.map(item => 
                            <TouchableOpacity onPress={() => console.log(item)}>
                                <Card>
                                    <TransactionsListItem key={item.id} {...item} />
                                </Card>
                            </TouchableOpacity>
                            ) :
                            <Text>You have no transactions...</Text>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    transactions: state.transactions
})

export default connect(mapStateToProps)(TransactionsList)
