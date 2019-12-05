import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Layout1 extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "stretch"
        }}
      >
        <View style={{ height: 70, backgroundColor: "skyblue" }} />
        <View style={{ height: 70, backgroundColor: "skyblue" }} />
        <View style={{ height: 70, backgroundColor: "skyblue" }} />
        <View style={{ height: 70, backgroundColor: "skyblue" }} />
        <View style={{ height: 70, backgroundColor: "skyblue" }} />
        <View style={{ height: 70, backgroundColor: "skyblue" }} />
        <View style={{ height: 70, backgroundColor: "charcoal" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
