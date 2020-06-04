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
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import { GlobalStyles } from "../styles/Global";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { addTransaction } from "../actions/transactionActions";
import { subtractMoney } from "../actions/balanceActions";

// const withdrawalSchema = yup.object({
//   Amount: yup
//     .string()
//     .required("Withdraw amount required")
//     .test(
//       "is-num-1-10000",
//       "Withdraw minimum of $1\n Withdraw maximum of $10,000",
//       (val) => {
//         return parseInt(val) < 10001 && parseInt(val) > 0;
//       }
//     ),
//   To: yup.string().required("Must enter a recipient").min(2),
//   Memo: yup.string().required("Memo required").min(2),
// });

const Withdrawal = ({ addTransaction, subtractMoney, navigation }) => {
  const [selectedValue, setSelectedValue] = useState("Withdraw");

  return (
    <View style={GlobalStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik
          initialValues={{
            amount: "",
            to: "",
            memo: "",
          }}
          // validationSchema={withdrawalSchema}
          onSubmit={(values, actions) => {
            // console.log({
            //   transactionType: selectedValue,
            //   ...values,
            // });
            addTransaction({
              ...values,
              transactionType: selectedValue,
            });
            subtractMoney(parseInt(values.amount));
            actions.resetForm();
            navigation.navigate("Home");
          }}
        >
          {(props) => {
            return (
              <View>
                <View>
                  <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedValue(itemValue)
                    }
                  >
                    <Picker.Item label="Withdraw" value="Withdraw" />
                    <Picker.Item label="Transfer" value="Transfer" />
                  </Picker>
                </View>

                <View style={styles.inputRow}>
                  <Text style={styles.inputText}>Amount : </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="0"
                    onChangeText={props.handleChange("amount")}
                    value={props.values.amount}
                    keyboardType="numeric"
                    onBlur={props.handleBlur("amount")}
                  />
                </View>
                <Text>{props.touched.amount && props.errors.amount}</Text>
                <View style={styles.inputRow}>
                  <Text>To : </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={props.handleChange("to")}
                    value={props.values.to}
                    onBlur={props.handleBlur("to")}
                  />
                </View>
                <Text>{props.touched.to && props.errors.to}</Text>
                <View style={styles.inputRow}>
                  <Text>Memo : </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={props.handleChange("memo")}
                    value={props.values.memo}
                    multiline
                    onBlur={props.handleBlur("memo")}
                  />
                </View>
                <Text>{props.touched.memo && props.errors.memo}</Text>
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
  checkboxDiv: {
    marginBottom: 10,
    backgroundColor: "blue",
  },
  checkboxBundles: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 2,
    padding: 5,
  },
  inputText: {},
  inputs: {
    width: "60%",
  },
  balanceBar: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
});

const mapDispatchToProps = { addTransaction, subtractMoney };
export default connect(undefined, mapDispatchToProps)(Withdrawal);
