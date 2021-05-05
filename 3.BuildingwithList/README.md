# List Building In react native

# FlatList

1. Turns array into a list of elements

```js
import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "shaksham1" },
    { name: "shaksham2" },
    { name: "shaksham3" },
    { name: "shaksham5" },
    { name: "shaksham10" },
  ];
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return <Text key={item.name}>{item.name} </Text>;
      }}
    />
  );
};

const style = StyleSheet.create({});

export default ListScreen;
```

- Here the renderItem is

```js
renderItem={(element) => {
  //element === { item : {name : "shaksham1"} , index : 0}}
   }}
```

- Now to add key to every element we can add

```js
<FlatList
  keyExtractor={(friend) => friend.name} //adds key to every element
  data={friends}
  renderItem={({ item }) => {
    return <Text>{item.name} </Text>;
  }}
/>
```

- we can also solve this by adding key property to friends array

```js
const ListScreen = () => {
  const friends = [
    { name: "shaksham1", key: 1 },
    { name: "shaksham2", key: 2 },
    { name: "shaksham6", key: 3 },
    { name: "shaksham4", key: 4 },
    { name: "shaksham10", key: 5 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name} //adds key to every element
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name} </Text>;
      }}
    />
  );
};
```

- Other Props around FlatList

```js
<FlatList
  horizontal={true} //to scroll horizontally
  showsHorizontalScrollIndicator={false} //hides the scroll bar
  keyExtractor={(friend) => friend.name} //adds key to every element
  data={friends}
  renderItem={({ item }) => {
    return <Text style={styles.textStyle}>{item.name} </Text>;
  }}
/>
```
