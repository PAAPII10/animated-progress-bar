import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={{ fontSize: 42 }}>❤️</Text>
      <Text
        style={{
          marginTop: 10,
          fontWeight: "800",
          fontSize: 16,
        }}
      >
        Expo
      </Text>
      <Text style={{ fontStyle: "italic", fontSize: 12 }}>(expo.io)</Text>
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
