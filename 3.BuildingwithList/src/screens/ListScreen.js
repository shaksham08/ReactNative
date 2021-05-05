import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "shaksham1", key: 1 },
    { name: "shaksham2", key: 2 },
    { name: "shaksham6", key: 3 },
    { name: "shaksham4", key: 4 },
    { name: "shaksham10", key: 5 },
    { name: "shaksham11", key: 6 },
    { name: "shaksham12", key: 7 },
    { name: "shaksham13", key: 8 },
  ];
  return (
    <FlatList
      horizontal={true} //to scroll horizontally
      showsHorizontalScrollIndicator={false} //hides the scroll bar
      keyExtractor={(friend) => friend.name} //adds key to every element
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} </Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
