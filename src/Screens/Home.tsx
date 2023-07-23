import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from "react-native";
import CarouselCardItem from "../Components/Carousel";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";


export default function Home({ navigation }: any) {
  const GoToCoPage = () => {
    return (
      navigation.navigate("Connexion")
    )
  }

  const GoToPanier = () => {
    return (
      navigation.navigate("Panier")
    )
  }

  const goToReptile = () => {
    navigation.navigate("Categories")
  }

  return (
    <LinearGradient
      colors={['#006400', '#FFFFFF',]}
      style={styles.background}
    >
      <View style={styles.background}>
        <View style={styles.header}>
          <TouchableOpacity   >
            <Pressable onPress={() => { GoToCoPage() }} style={styles.touchable} >
              <Image source={require('./img/user.png')} resizeMode={"contain"} style={styles.userIcon} />
            </Pressable>
          </TouchableOpacity><View />
          <View style={styles.containerLogo} >
            <ImageBackground source={require('./img/logo.png')} resizeMode={"cover"} style={styles.image}></ImageBackground>
          </View>
          <Pressable onPress={() => { GoToPanier() }} style={styles.touchableb} >
            <Image source={require('./img/panier.png')} resizeMode={"contain"} style={styles.panier}></Image>
          </Pressable>
        </View>
        <View style={styles.carousel}>
          <Text>nos nouveauté</Text>
          <CarouselCardItem />
        </View>
        <View style={styles.menu}>
          <View style={styles.containerReptile}>
            <Pressable style={styles.reptiles} onPress={() => { goToReptile() }}>
              <Image
                resizeMode="cover"
                style={styles.reptileCategory}
                source={require('./img/iguan.jpg')}
              />
            </Pressable>
            <Text style={styles.text}>REPTILES</Text>
            <Image
              resizeMode="cover"
              style={styles.reptileCategory}
              source={require('./img/terra.jpg')}
            />
            <Text style={styles.text}>MATERIEL</Text>
          </View>
        </View>
      </View>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
  },

  reptiles: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  imagemenu:{
    height:100, width:100, borderRadius:15
  },

  image: {
    flex: 0,
    width: "100%",
    height: "100%",
    marginRight: "2%",
    marginTop: "0%",
  },

  header: {
    backgroundColor: "black",
    height: "17%",
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row"
  },

  userIcon: {
    flex: 1,
    width: 100,
    height: 40,
    position: "absolute",
    top: 20,
    left: 0,
  },


  panier: {
    width: "100%",
    height: 50,

    position: "relative",
    flex: 0.5,
    marginBottom: 35,
    justifyContent: "flex-start"

  },
  menu: {
    flex: 3,
    height: 10,
    alignItems: "center",
    marginBottom: 50,
    marginTop: 50
  },

  carousel: {
    flex: 1,
    borderRadius: 30,
    marginTop: "10%",
    marginLeft: "5%",
    marginRight: "5%",
    zIndex: 0,
  },

  reptileCategory: {
    flex: 1,
    width: 150,
    height:150,
    borderRadius: 20
  },

  containerLogo: {
    width: "100%",
    height: "100%",
    flex: 1,
  },

  touchable: {
    width: 80,
    height: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    zIndex: 1,

  },

  touchableb: {
    justifyContent: "flex-end",
    alignContent: "center",
    alignItems: "center",
    zIndex: 1,
    height: "100%",
    width: "25%"

  },

  containerReptile: {
    width: 180,
    flex: 1,
    alignItems: "center",
    marginTop:"12%"
  },

  text: {
    marginTop: 10,
    marginBottom: 40,
    fontSize: 17

  }

});

function rgba(arg0: number, arg1: number, arg2: number, arg3: number): any | import("react-native").ColorValue | undefined {
  throw new Error("Function not implemented.");
}

