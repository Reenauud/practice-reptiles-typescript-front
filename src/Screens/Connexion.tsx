import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { GET_ALL_USERS } from "../GraphQL/Queries";
import { GET_TOKEN } from "../GraphQL/Mutation"
import { Button } from "@rneui/themed";
import { useQuery, useMutation } from "@apollo/client";
import { create } from "react-test-renderer";
import * as SecureStore from 'expo-secure-store';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/RootReducers";
import { setMessage } from "../app/MessageSlice";
import { useNavigationContainerRef } from "@react-navigation/native";
import { setReptileI } from "../app/ReptileSlice";
import { LinearGradient } from "expo-linear-gradient";

import Home from '../Screens/Home'


export default function Connexion({ navigation }: any) {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch()
  const { message } = useSelector((state: RootState) => state.message)


  const [getConnexion, { data, loading, error }] = useMutation(GET_TOKEN, {

    onCompleted(data) {
      save("token", data.getToken)
      dispatch(setMessage(data.getToken))
      if (data.getToken) {
        navigation.navigate('Admin')
      } else {
        alert("essaye encore")
      }

    },

  });


  async function save(key : string, value : string) {
   await SecureStore.setItemAsync(key, value);
  }

  return (
    <LinearGradient
      colors={['#006400', '#FFFFFF',]}
      style={styles.container}
    >

      <View style={styles.connectWindow} >

        <View>
          <View style={styles.titleposition}>
            {/* <Text style={styles.title}>Bienvenue</Text> */}
          </View>
          <View style={styles.viewInput}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}

            />
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.txt}>
            <Text>mot de passe oublié ? </Text>
          </View>
          <View style={styles.placementBtnCo}>
            <TouchableOpacity
              onPress={() => {
                getConnexion({ variables: { email, password } })
              }}
              style={styles.BtnCo}
            >
              <Text>Connexion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "lightgrey",
  },
  connectWindow: {
    flex: 1,
    backgroundColor: "transparent",
    zIndex: 10,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
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
    width: "100%"
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
    width: 200
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
