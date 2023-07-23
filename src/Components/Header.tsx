import React from "react"
import { StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Header({ navigation }: any) {

    const onPress = () => {
        navigation.navigate("Connexion")
    }

    return (
        <View style={styles.header}>
          <TouchableOpacity onPress={onPress} style={styles.touchable}>
            <Image source={require('../../assets/user.png')} resizeMode={"contain"} style={styles.userIcon} />
          </TouchableOpacity>
            
          <Image source={require('../../assets/logo.png')} resizeMode={"cover"} style={styles.image} />

          <TouchableOpacity onPress={onPress} style={styles.touchable}>
            <Image source={require('../../assets/panier.png')} resizeMode={"contain"} style={styles.panier} />
          </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: "85%",
        width: "60%",
        marginTop: "5%"
      },

      userIcon: {
        width: 100,
        height: 40,
      },

      panier:{
        width: 100,
        height: 40,
      },

      header:{
        width: "100%",
        backgroundColor: "black",
        height: "20%",
        flex:1,
        alignItems: "center",
        flexDirection: "row",
      },

      touchable:{
        width: 80,
        height:100,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        zIndex: 5,
      },
});


