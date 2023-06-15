import React from "react";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/Home";
import Food from "./Pages/FoodScreen/FoodScreen";
import News from "./Pages/News";
import Connexion from "./Pages/Connexion";
import client from "./client";
import { ApolloProvider } from "@apollo/client";

const Stack = createNativeStackNavigator();

const appName = "reptile-shop-mobile";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Food" component={Food} />
          <Stack.Screen name="News" component={News} />
          <Stack.Screen name="Connexion" component={Connexion} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
