import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { GlobalStyles } from "../styles/Global";

const depositSchema = yup.object({
  amount: yup
    .string()
    .required("Amount Required")
    .test(
      "is-num-1-10000",
      "Minimum Deposit $1\nMaximum Deposit $10,000",
      (val) => {
        return parseInt(val) < 10001 && parseInt(val) > 0;
      }
    ),
  memo: yup.string().required("Memo Required").min(2),
});

export default function Deposit({ navigation }) {
  const [amount, setAmount] = useState(0);

  return (
    <View style={GlobalStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik
          initialValues={{ amount: 0, memo: "" }}
          validationSchema={depositSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            // setAmount(parseInt(values.amount) + parseInt(values.balance));
            navigation.navigate("Home");
          }}
        >
          {(props) => (
            <View>
              <View style={styles.container}>
                <Text style={styles.text}>Amount: </Text>
                <TextInput
                  placeholder="Deposit Amount"
                  onChangeText={props.handleChange("amount")}
                  value={props.values.amount}
                  keyboardType="numeric"
                  onBlur={props.handleBlur("amount")}
                  style={styles.input}
                />
              </View>
              <Text style={styles.errorText}>
                {props.touched.amount && props.errors.amount}
              </Text>

              <View style={styles.container}>
                <Text style={styles.text}>Memo: </Text>
                <TextInput
                  placeholder="Memo"
                  onChangeText={props.handleChange("memo")}
                  value={props.values.memo}
                  onBlur={props.handleBlur("memo")}
                  style={styles.input2}
                  multiline
                  minHeight={60}
                />
              </View>
              <Text style={styles.errorText}>
                {props.touched.memo && props.errors.memo}
              </Text>
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
          )}
        </Formik>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
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
