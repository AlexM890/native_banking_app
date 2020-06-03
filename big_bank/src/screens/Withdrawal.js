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
} from "react-native";

import { Formik } from "formik";
import * as yup from "yup";

const withdrawalSchema = yup.object({
  Amount: yup
    .string()
    .required("Withdraw amount required")
    .test(
      "is-num-1-10000",
      "Withdraw minimum of $1\n Withdraw maximum of $10,000",
      (val) => {
        return parseInt(val) < 10001 && parseInt(val) > 0;
      }
    ),
  To: yup.string().required("Must enter a recipient").min(2),
  Memo: yup.string().required("Memo required").min(2),
});

const Withdrawal = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("Withdraw");
  return (
    <View style={styles.screen}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik
          initialValues={{
            Amount: 0,
            To: "",
            Memo: "",
          }}
          validationSchema={withdrawalSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            console.log(selectedValue);
            actions.resetForm();
            // navigation.navigate("Home");
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
                    onChangeText={props.handleChange("Amount")}
                    value={props.values.Amount}
                    keyboardType="numeric"
                    onBlur={props.handleBlur("Amount")}
                  />
                </View>
                <Text>{props.touched.Amount && props.errors.Amount}</Text>
                <View style={styles.inputRow}>
                  <Text>To : </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={props.handleChange("To")}
                    value={props.values.To}
                    onBlur={props.handleBlur("To")}
                  />
                </View>
                <Text>{props.touched.To && props.errors.To}</Text>
                <View style={styles.inputRow}>
                  <Text>Memo : </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={props.handleChange("Memo")}
                    value={props.values.Memo}
                    multiline
                    onBlur={props.handleBlur("Memo")}
                  />
                </View>
                <Text>{props.touched.Memo && props.errors.Memo}</Text>
                <Button title="Submit" onPress={props.handleSubmit} />
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
  screen: {
    // alignItems: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 2,
    padding: 5,
  },
  inputText: {},
  inputs: {
    // backgroundColor: "lightgray",
    width: "60%",
  },
  balanceBar: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
});

export default Withdrawal;
