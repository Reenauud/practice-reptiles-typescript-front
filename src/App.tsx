import React from "react";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StripeProvider } from '@stripe/stripe-react-native';
import Home from "./Screens/Home";
import Food from "./Screens/Food";
import News from "./Screens/News";
import Connexion from "./Screens/Connexion";
import client from "./client";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from './app/Store'
import Admin from "./Screens/Admin";
import CardReptiles from "./Components/CardReptiles";
import Constants from "expo-constants";
import PaymentScreen from "./Screens/PaymentScreen";

const { manifest } = Constants;
import Panier from "./Screens/Panier";
import Categories from "./Screens/Categories";
import Reptile from "./Screens/Reptiles";

const Stack = createNativeStackNavigator();

const appName = "reptile-shop-mobile";

export default function App() {
  return (
    <Provider store={store}>
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StripeProvider
        publishableKey={manifest?.extra?.stripePublishableKey}
        >
          <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Food" component={Food} />
            <Stack.Screen name="News" component={News} />
            <Stack.Screen name="Panier" component={Panier}/>
            <Stack.Screen name="Categories" component={Categories}/>
            <Stack.Screen name="Connexion" component={Connexion} />
            <Stack.Screen name="Reptiles" component={Reptile} /> 
            <Stack.Screen name = "Admin" component={Admin}/>
            <Stack.Screen name = "CardReptile" component={CardReptiles}/>
            <Stack.Screen name = "payment" component={PaymentScreen}/>
          </Stack.Navigator>
        </StripeProvider>
      </NavigationContainer>
    </ApolloProvider>
    </Provider>

  );
}

AppRegistry.registerComponent(appName, () => App);
