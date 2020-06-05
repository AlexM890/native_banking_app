import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  CheckBox,
  Form,
  Picker,
  Keyboard,
  Alert,
} from "react-native";

import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { GlobalStyles } from "../styles/Global";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { addTransaction } from "../actions/transactionActions";
import { subtractMoney } from "../actions/balanceActions";

const withdrawalSchema = yup.object({
  amount: yup
    .string()
    .required("Withdraw amount required")
    .test(
      "is-num-1-10000","Withdraw minimum of $1\n Withdraw maximum of $10,000",(val) => {
        return parseInt(val) < 10001 && parseInt(val) > 0;
      }
    )
    .matches(/^[0-9]+(\.[0-9]{0,2})?$/gm, 'Must be valid USD amount'),
  to: yup.string().required("Must enter a recipient").min(2),
  memo: yup.string().required("Memo required").min(2),
});

const Withdrawal = ({ addTransaction, subtractMoney, navigation }) => {
  const [selectedValue, setSelectedValue] = useState("withdrawal");

  return (
    <View style={GlobalStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik
          initialValues={{
            amount: "",
            to: "",
            memo: "",
          }}
          validationSchema={withdrawalSchema}
          onSubmit={(values, actions) => {
            console.log({
              ...values,
              transactionType: selectedValue,
            });
            addTransaction({
              ...values,
              transactionType: selectedValue,
            });
            subtractMoney(parseFloat(values.amount));
            actions.resetForm();
            navigation.navigate("Home", { screen: 'Home' });
          }}
        >
          {(props) => {
            return (
              <View>
                <View>
                  <Picker
                    selectedValue={selectedValue}
                    style={styles.container1}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedValue(itemValue)
                    }
                  >
                    <Picker.Item label="Withdraw" value="withdrawal" />
                    <Picker.Item label="Transfer" value="transfer" />
                  </Picker>
                </View>

                <View style={styles.container}>
                  <Text style={styles.text}>Amount : </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="0"
                    onChangeText={props.handleChange("amount")}
                    value={props.values.amount}
                    keyboardType="numeric"
                    onBlur={props.handleBlur("amount")}
                  />
                </View>
                <Text style={styles.errorText}>{props.touched.amount && props.errors.amount}</Text>
                <View style={styles.container}>
                  <Text style={styles.text}>To : </Text>
                  <TextInput
                    placeholder="Where to?"
                    style={styles.input}
                    onChangeText={props.handleChange("to")}
                    value={props.values.to}
                    onBlur={props.handleBlur("to")}
                  />
                </View>
                <Text style={styles.errorText}>{props.touched.to && props.errors.to}</Text>
                <View style={styles.container}>
                  <Text style={styles.text}>Memo : </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={props.handleChange("memo")}
                    value={props.values.memo}
                    multiline
                    onBlur={props.handleBlur("memo")}
                    minHeight={60}
                  />
                </View>
                <Text style={styles.errorText}>{props.touched.memo && props.errors.memo}</Text>
                <Button
                  title="Submit"
                  onPress={() => {
                    Alert.alert(
                      "Are you sure...",
                      `Is $${props.values.amount} correct?`,
                      [
                        {
                          text: "Cancel",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel",
                        },
                        { text: "OK", onPress: () => props.handleSubmit() },
                      ],
                      { cancelable: false }
                    );
                  }}
                />
              </View>
            );
          }}
        </Formik>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  container1: {
    justifyContent: 'center',
  },
  text: {
    paddingTop: 4,
    paddingRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    fontSize: 18,
    width: "60%",
  },
  input2: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    fontSize: 18,
    width: "60%",
  },
  errorText: {
    color: "red",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
});

const mapDispatchToProps = { addTransaction, subtractMoney };
export default connect(undefined, mapDispatchToProps)(Withdrawal);
