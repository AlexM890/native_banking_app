import React from 'react'
import {Text, View, TextInput, Button, StyleSheet, Keyboard} from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { GlobalStyles } from '../styles/Global'

const depositSchema = yup.object({
    amount: yup.string()
            .required('Amount Required')
            .test('is-num-1-10000', 'Minimum Deposit $1\nMaximum Deposit $10,000', (val) => {
                return parseInt(val) < 10001 && parseInt(val) > 0; 
            }),
    memo: yup.string()
            .required('Memo Required')
            .min(2)
})

const prevBalance = 100
export default function Deposit () {
    return(
        <View style={GlobalStyles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <Formik
                    initialValues={{amount: '0', memo: '', balance: prevBalance}}
                    validationSchema={depositSchema}
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
                                <Text style={styles.errorText}>{props.touched.amount && props.errors.amount}</Text>
                                
                            <View style={styles.container}>
                                <Text style={styles.text}>Memo: </Text>
                                <TextInput
                                    placeholder= 'Memo'
                                    onChangeText={props.handleChange('memo')}
                                    value={props.values.memo}
                                    onBlur={props.handleBlur('memo')}
                                    style={styles.input2}
                                    multiline
                                    minHeight={60}
                                />
                            </View>
                                <Text style={styles.errorText}>{props.touched.memo && props.errors.memo}</Text>

                            <Text value={props.values.balance}>New Balance: ${parseInt(props.values.amount) + parseInt(props.values.balance)}</Text>
                            <Button title='submit' onPress={props.handleSubmit} />
                        </View>
                    )}
                </Formik>
            </TouchableWithoutFeedback>
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
        width: '60%'
    },
    input2: {
        borderWidth: 1,
        borderColor:'#ddd',
        borderRadius: 6,
        fontSize: 18,
        width: '60%'
    },
    errorText: {
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
})