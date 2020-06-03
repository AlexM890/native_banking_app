import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Withdrawal from "./src/screens/Withdrawal";
export default function App() {
  return (
    <View style={styles.container}>
      <Withdrawal />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
