import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { GET_ALL_USERS } from "../GraphQL/Queries";
import {GET_TOKEN} from "../GraphQL/Mutation"
import { Button } from "@rneui/themed";
import { useQuery, useMutation } from "@apollo/client";
import { create } from "react-test-renderer";
import * as SecureStore from 'expo-secure-store';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/RootReducers";
import { setMessage } from "../app/MessageSlice";
import { useNavigationContainerRef } from "@react-navigation/native";

import Home from '../Screens/Home'


export default function Connexion({navigation}:any) {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch()
  const {message} = useSelector((state: RootState) => state.message)
  // const islogin = (email, pass) => {
  //   alert(email + pass);
  // };

  const [getConnexion, { data, loading, error }] = useMutation(GET_TOKEN , {

    onCompleted(data) {
      save("token", data.getToken)
      console.log("LOG", data.getToken)
      dispatch(setMessage(data.getToken))
      if(data.getToken){
        alert(message)
        navigation.navigate('Home')


      }else{
        alert("essaye encore")
      }

    },

  });

 


  async function save(key : string, value : string) {
    await SecureStore.setItemAsync(key, value);
  }

  return (
    <View style={styles.container}>
      <View style={styles.connectWindow}>
        <View style={styles.titleposition}>
          {/* <Text style={styles.title}>Bienvenue</Text> */}
        </View>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={(text)=> setEmail(text) }
           
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.txt}>
          <Text>mot de passe oublié ? </Text>
        </View>
        <View style={styles.placementBtnCo}>
          <TouchableOpacity
            onPress={() => {
              getConnexion({variables: {email, password}})
            }}
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
