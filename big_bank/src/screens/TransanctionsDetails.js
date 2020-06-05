import React, { useState }from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { GlobalStyles } from '../styles/Global'
import Card from '../shared/Card'
import { AntDesign } from '@expo/vector-icons'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { editTransaction } from '../actions/transactionActions'

const TransanctionsDetails = ({route, editTransaction}) => {
    const item = route.params
    const [ edit, setEdit ] = useState(false)
    const [ memo, setMemo ] = useState(item.memo)
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
                {
                    !edit ? 
                    <View style={styles.cardContainer}>
                        <Text>{memo}</Text>
                        <AntDesign name="edit" size={24} color="black" onPress={() => setEdit(true)}/>
                    </View> :
                    <View>
                        <Formik
                            initialValues={{memo: memo}}
                            onSubmit={(values, actions) => {
                                editTransaction(item.id, values.memo)
                                setMemo(values.memo)
                                setEdit(false)
                                actions.resetForm();
                            }}>
                                {(props) => (
                                    <View style={styles.editContainer}>
                                        <View>
                                            <Text style={styles.text}>Memo: </Text>
                                            <TextInput
                                                onChangeText={props.handleChange('memo')}
                                                value={props.values.memo}
                                                onBlur={props.handleBlur('memo')}
                                                style={styles.input2}
                                                multiline
                                                minHeight={60}
                                            />
                                        </View>
                                        <View>
                                            <AntDesign name="checkcircleo" size={24} color="black" onPress={() => props.handleSubmit() }/>
                                        </View>
                                    </View>
                                )}
                        </Formik>
                    </View>
                }
            </Card>
        </View>
    )
}


const mapDispatchToProps = (dispatch) => ({
    editTransaction: (id, updates) => dispatch(editTransaction(id, updates))
}) 

export default connect(undefined, mapDispatchToProps)(TransanctionsDetails)

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
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',  
    },
    editContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: "black",
        borderBottomWidth: 1,
    }
})