import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TransactionsListItem from '../screens/TransactionsListItem'
import SafeAreaView from 'react-native-safe-area-view'
import Card from '../shared/Card'
import { AntDesign } from '@expo/vector-icons'
import { deleteTransaction } from '../actions/transactionActions'
import { addMoney, subtractMoney } from '../actions/balanceActions'

const TransactionsList = (props) => {

    const detailsHandler = () => {

    }

    const deleteHandler = (obj, id) => {
        if(obj.transactionType === "deposit"){
            props.subtractMoney(parseFloat(obj.amount))
        }else
        if(obj.transactionType === "transfer" || obj.transactionType === "withdrawal"){
            props.addMoney(parseFloat(obj.amount))
        }
        props.deleteTransaction(id)
    }

    return (
        <SafeAreaView>    
            <ScrollView>
                <View>
                    {
                        props.transactions.length > 0 ? props.transactions.map(item => 
                            <TouchableOpacity>
                                <Card>
                                    <View style={styles.cardContainer}>
                                        <TransactionsListItem key={item.id} {...item} />
                                        <AntDesign name="delete" size={24} color="black" onPress={() => deleteHandler(item, item.id)} />
                                        <AntDesign name="infocirlceo" size={24} color="black" onPress={() => props.navigation.navigate("TransactionsDetails", {...item})} />

                                    </View>
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

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
const mapDispatchToProps = { deleteTransaction, addMoney, subtractMoney }
const mapStateToProps = (state) => ({
    transactions: state.transactions
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList)
