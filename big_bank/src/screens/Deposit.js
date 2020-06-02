import React from 'react'
import {Text, View, TextInput, Button, StyleSheet} from 'react-native'
import { Formik } from 'formik'

const prevBalance = 100
export default function Deposit () {
    return(
        <View>
            <Formik
                initialValues={{amount: 0, memo: '', balance: prevBalance}}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    values.balance = parseInt(values.amount) + parseInt('100');
                
                }}
            >
                {(props) => (
                    <View>
                        <View style={styles.container}>
                            <Text style={styles.text}>Amount: </Text>
                            <TextInput
                                placeholder= 'Deposit Amount'
                                onChangeText={props.handleChange('amount')}
                                value={props.values.amount}
                                keyboardType='numeric'
                                onBlur={props.handleBlur('amount')}
                                style={styles.input}
                            />
                        </View>
                            
                        <View style={styles.container}>
                            <Text style={styles.text}>Memo: </Text>
                            <TextInput
                                placeholder= 'Memo'
                                onChangeText={props.handleChange('memo')}
                                value={props.values.memo}
                                onBlur={props.handleBlur('memo')}
                                style={styles.input2}
                                multiline
                            />
                        </View>

                        <Text value={props.values.balance}>New Balance: ${parseInt(props.values.amount) + parseInt(props.values.balance)}</Text>
                        <Button title='submit' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10
    },
    text: {
        paddingTop: 4,
        paddingRight: 10,
    },
    input: {
        borderWidth: 1,
        borderColor:'#ddd',
        borderRadius: 6,
        fontSize: 18,
        width: '40%'
    },
    input2: {
        borderWidth: 1,
        borderColor:'#ddd',
        borderRadius: 6,
        fontSize: 18,
        width: '50%'
    }
})