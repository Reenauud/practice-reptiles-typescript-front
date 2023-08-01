import React from "react";
import { AppRegistry } from "react-native";
import client from "./client";
import { ApolloProvider } from "@apollo/client";
import Router from "./Router/Router";
import { Provider } from "react-redux";
import { store } from './app/Store'
import { Header } from "./Components/Header";

const appName = "reptile-shop-mobile";

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Header />
        <Router />
      </ApolloProvider>
    </Provider>

  );
}

AppRegistry.registerComponent(appName, () => App);
