import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Deck from "./src/deck";
import flip from './src/flip'
import Flip from "./src/flip";

console.disableYellowBox = true;

export default function App() {
  return (
    <View style={styles.container}>
      <Flip />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
