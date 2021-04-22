# Steps to create a component

1. Import Library we need to create a component

2. Create a component - a function that returns some jsx

3. Create a stylesheet for the component

4. Export The component

## ComponentScreen

```js
import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  return <Text style={styles.textStyle}>This is a Component Screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentScreen;
```

## APP.js

```js
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
  },
  {
    initialRouteName: "Components", //whats the first component to display
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
```

1. Text = Here this is a primitive element which help us to show some basic content on the screen

Note :- Other Elements can be View(Group other elements together), Image, Button etc

2. AppNavigator :- React navigation library helps in navigation to show different content to the user

3. Styles :- Here we use sylesheet.create because it checks for the rule properly and if we dont pass it correctly we would get error.

There is no need to use stylesheet.create everytime but its good to use.

# Rules of JSX

1. We can assemble differet JSX element just like normal HTML

```js
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
```

2. We configure different
