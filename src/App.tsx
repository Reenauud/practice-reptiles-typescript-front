import React from "react";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Food from "./Screens/Food";
import News from "./Screens/News";
import Connexion from "./Screens/Connexion";
import client from "./client";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import {store} from './app/Store'
import Admin from "./Screens/Admin";
import CardReptiles from "./Components/CardReptiles";

const Stack = createNativeStackNavigator();

const appName = "reptile-shop-mobile";

export default function App() {
  return (
    <Provider store={store}>
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
          headerShown: false
        }}
        >
          {/* <Stack.Screen name="Home" component={Home} /> */}
          {/* <Stack.Screen name="Food" component={Food} />
          <Stack.Screen name="News" component={News} /> */}
         <Stack.Screen name="Connexion" component={Connexion} />
          <Stack.Screen name = "Admin" component={Admin}/>
          <Stack.Screen name = "CardReptile" component={CardReptiles}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
    </Provider>

  );
}

AppRegistry.registerComponent(appName, () => App);
