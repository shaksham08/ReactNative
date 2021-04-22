import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const greeting = "Hi there!!!";
  const check = <Text>This is a Text Element</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>This is a Component Screen</Text>
      <Text>This is a another Text Component</Text>
      <Text>{greeting}</Text>
      <Text>{check}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentScreen;
