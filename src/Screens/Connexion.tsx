import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { GET_TOKEN, VERIFY_TOKEN } from "../GraphQL/Mutation"
import { useMutation } from "@apollo/client";
import * as SecureStore from 'expo-secure-store';
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../app/tokenReducer";
import { RootState } from "../app/RootReducers";

export default function Connexion({ navigation }: any) {
  const jwt = useSelector((state: RootState) => state.token.jwt);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (jwt !== '') {
      verify()
    }
  }, [jwt]);

  const [verify] = useMutation(VERIFY_TOKEN, {
    variables: {
      token: jwt
    },
    onCompleted: (data) => {
      data?.verifyToken.role === 'admin' ? setIsAdmin(true) : setIsAdmin(false);
    }
  })

  const [getConnexion, { data, loading, error }] = useMutation(GET_TOKEN, {

    onCompleted(data) {
      save("token", data.getToken)
      dispatch(setToken(data.getToken))
      if (jwt !== '') {
        isAdmin ? navigation.navigate("Admin") : navigation.navigate("Accueil");
      } else {
        alert("Adresse mail ou mot de passe incorrect.")
      }

    },

  });

  async function save(key : string, value : string) {
   await SecureStore.setItemAsync(key, value);
  }

  return (
    <View
      style={styles.container}
    >

      <View style={styles.connectWindow}>
        <Text style={{fontSize: 18}}>Connexion à votre compte</Text>
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
            <TouchableOpacity
              onPress={() => {
                getConnexion({ variables: { email, password } })
              }}
              style={styles.BtnCo}
            >
              <Text style={{color: "white"}}>Connexion</Text>
            </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  connectWindow: {
    flex: 0.4,
    backgroundColor: "transparent",
    zIndex: 10,
    height: 500,
    width: "100%",
    justifyContent: "space-around",
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
    width: 300,
  },

  
  titleposition: {
    flex: 0,
    alignItems: "center",
  },
  
  txt: {
    flex: 0,
    alignItems: "flex-end",
    marginBottom: 20,
  },
  BtnCo: {
    backgroundColor: "darkgreen",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 50,
    borderRadius: 10,
  },
  
});
