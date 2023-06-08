import { StatusBar } from "expo-status-bar";
import { Button, Icon, LinearProgress } from "@rneui/themed";
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import Carrousel from "../Components/Carousel";
import Menu from "../Components/Menu";
import LinearGradient from 'react-native-linear-gradient';
import logo from "../../assets/logo.png"
import { borderRadius, flexbox, height, positions, style, width } from "@mui/system";
import { Flex } from "@react-native-material/core";
import userIcon from "../../assets/user.png"
import panier from "../../assets/panier.png"
import iguan from "../../assets/iguan.jpg"
import terra from "../../assets/terra.jpg"
import CarouselCardItem from "../Components/Carousel"
import  {TouchableOpacity}  from "react-native-gesture-handler";
import { useNavigationContainerRef } from "@react-navigation/native";
import React, { useState } from "react";




export default function Home({ navigation  }:any) {

  const onPress = ( )=> {
    navigation.navigate("Connexion")
  }




  return (
    <View style={styles.background}>

      <View style={styles.header}>

     
          <TouchableOpacity onPress={onPress} style={styles.touchable}>
            <Image source={userIcon} resizeMode={"contain"} style={styles.userIcon}></Image>
          </TouchableOpacity><View />
          
        




  <ImageBackground source={logo} resizeMode={"cover"} style={styles.image}></ImageBackground>



  <ImageBackground source={panier} resizeMode={"contain"} style={styles.panier}></ImageBackground>


      </View>

      <View style={styles.carousel}>
        {/* <Carrousel/> */}
        <CarouselCardItem />

      </View>
      <View style={styles.menu}>

        <View style={styles.containerReptile}>

      {/* <ImageBackground source={iguan} resizeMode={"cover"} style={styles.reptileCategory}></ImageBackground> */}
      <Image
      resizeMode="cover"
          style={styles.reptileCategory}
          source={iguan}
        />
        <Text style={styles.text}>REPTILES</Text>
        

<Image
      resizeMode="cover"
          style={styles.reptileCategory}
          source={terra}
        />

      {/* <ImageBackground source={iguan} resizeMode={"cover"} style={{borderRadius:10}}></ImageBackground>
      <Text> reptiles</Text> */}
      <Text style={styles.text}>MATERIEL</Text>

      </View>



      </View>
   


    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "lightgreen",
    justifyContent: "space-between",

  },

    image: {
      flex: 0,
      width: "80%",
      height: "100%",
      marginRight: "2%",
    },

    test:{
      flex:1,
      height:10,
      width:10


    },

    header:{
      backgroundColor: "black",
      height: "17%",
      flex:1,
      alignItems: "flex-end",
      flexDirection: "row"
    },

    userIcon: {
      flex:1,
      width: 100,
      height: 40,
      position:"absolute",
      top:20,
      left:0,
    },

    panier:{

      flex:1,
      width: 100,
      height: 40,
      position:"absolute",
      top:70,
      left:320

    },
    menu:{
      flex:3,
      height:10,
      alignItems:"center",
      marginBottom:50,
      marginTop:50


    },

    carousel:{
      backgroundColor: "blue",
      flex:1,
      borderRadius: 30,
      marginTop:"10%",
      marginLeft:"5%",
      marginRight:"5%",
      opacity:0.2,
      zIndex:0




 
    },

    reptileCategory:{
      flex:1,
      borderRadius:50,
      width:"100%",
 

      
      

    },

    touchable:{
      width: 80,
      height:100,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      zIndex: 1

    },

    containerReptile:{
      width:180,
      flex:1,
      alignItems:"center"
    },

    text:{
      marginTop:10,
      marginBottom:40,
      fontSize:17

    }

  });


function rgba(arg0: number, arg1: number, arg2: number, arg3: number): any | import("react-native").ColorValue | undefined {
  throw new Error("Function not implemented.");
}

