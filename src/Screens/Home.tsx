
import { StyleSheet, Text, View, ImageBackground, Image, Button } from "react-native";
import CarouselCardItem from "../Components/Carousel"
import React from "react";
import Header from "../Components/Header";
import { StatusBar } from "expo-status-bar";
import { Button, Icon, LinearProgress } from "@rneui/themed";
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, Pressable } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import Carrousel from "../Components/Carousel";
import Menu from "../Components/Menu";
import logo from "../../assets/logo.png"
import userIcon from "../../assets/user.png"
import panier from "../../assets/panier.png"
import iguan from "../../assets/iguan.jpg"
import terra from "../../assets/terra.jpg"
import CarouselCardItem from "../Components/Carousel"
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import Panier from "./Panier";
import { LinearGradient } from "expo-linear-gradient";




export default function Home({ navigation }: any) {
  
    const handlePayment = () => {
    navigation.navigate("payment")
  }


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
              <Image source={userIcon} resizeMode={"contain"} style={styles.userIcon} ></Image>
            </Pressable>

          </TouchableOpacity><View />
          <View style={styles.containerLogo} >

            <ImageBackground source={logo} resizeMode={"cover"} style={styles.image}></ImageBackground>


          </View>


          <Pressable onPress={() => { GoToPanier() }} style={styles.touchableb} >

            <Image source={panier} resizeMode={"contain"} style={styles.panier}></Image>
          </Pressable>

        </View>

        <View style={styles.carousel}>
          <Text>nos nouveauté</Text>
          <CarouselCardItem />

        </View>
        <View style={styles.menu}>

          <View style={styles.containerReptile}>

            <Pressable onPress={() => { goToReptile() }}>
              <Image
                resizeMode="cover"
                style={styles.imagemenu}
                source={iguan}
                
              />

            </Pressable>
            <Text style={styles.text}>nos reptiles</Text>





            <Image
              resizeMode="cover"
              style={styles.imagemenu}
              source={terra}
            />

            <Text style={styles.text}>materiels</Text>

          </View>



        </View>



      </View>
      
      <Button onPress={handlePayment}
      title="Pay"
      />
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // backgroundColor: "lightgreen",
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

  // test: {
  //   flex: 1,
  //   height: 10,
  //   width: 10


  // },

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

    // flex:1,
    width: "100%",
    height: 50,

    position: "relative",
    // left:300,
    // backgroundColor:"red",
    flex: 0.5,
    marginBottom: 35,
    justifyContent: "flex-start"

  },
  menu: {
    flex: 3,
    height: 10,
    alignItems: "center",
    marginBottom: 50,
    marginTop: 50,


  },

  carousel: {
    // backgroundColor: "blue",
    flex: 1,
    borderRadius: 30,
    marginTop: "10%",
    marginLeft: "5%",
    marginRight: "5%",
    // opacity:0.2,
    zIndex: 0





  },

  reptileCategory: {
    flex: 1,
    // borderRadius:50,
    width: 150,
    height:150,
    // height:"100%"
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
    // backgroundColor:"blue",
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

