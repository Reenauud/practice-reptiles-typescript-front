import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const AUTH = gql`
  query CreateUser($roles: roles, $password: password, $email: email) {
    createUser(
      roles: "admin"
      password: "pass"
      email: "laputaindsamere@hotmail.fr"
    ) {
      email
    }
  }
`;

export default function Connexion() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const islogin = (email, pass) => {
  //   alert(email + pass);
  // };
  const data = useQuery(AUTH);

  return (
    <View style={styles.container}>
      <View style={styles.connectWindow}>
        <View style={styles.titleposition}>
          <Text style={styles.title}>Bienvenue</Text>
        </View>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={() => email}
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={() => password}
          />
        </View>
        <View style={styles.txt}>
          <Text>mot de passe oublié ? </Text>
        </View>
        <View style={styles.placementBtnCo}>
          <TouchableOpacity
            onPress={() => console.log(data)}
            style={styles.BtnCo}
          >
            <Text>Connexion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
  connectWindow: {
    position: "absolute",
    backgroundColor: "darkgreen",
    zIndex: 10,
    height: "60%",
    width: "90%",
    borderRadius: 20,
  },

  textCo: {
    color: "black",
    position: "absolute",
    width: "10%",
    height: "10%",

    fontSize: 15,
  },
  input: {
    margin: 10,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    flex: 0,
    textAlign: "center",
  },

  title: {
    fontSize: 30,
    color: "white",
    marginTop: 40,
    marginBottom: 40,
  },
  titleposition: {
    flex: 0,
    alignItems: "center",
  },
  viewInput: {
    marginBottom: 20,
  },
  txt: {
    flex: 0,
    alignItems: "flex-end",
    marginBottom: 20,
  },
  BtnCo: {
    backgroundColor: "darkgrey",
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 30,
    borderRadius: 10,
  },
  placementBtnCo: {
    flex: 0,
    alignItems: "center",
  },
});
