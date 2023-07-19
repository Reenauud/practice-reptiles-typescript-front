import { StyleSheet, Text, View, ImageBackground, Image, Button } from "react-native";
import CarouselCardItem from "../Components/Carousel"
import React from "react";
import Header from "../Components/Header";

export default function Home({ navigation  }:any) {
  

  const handlePayment = () => {
    navigation.navigate("payment")
  }

  return (
    <View style={styles.background}>
      <Header />
  
      <View style={styles.carousel}>
        {/* <Carrousel/> */}
        <CarouselCardItem />

      </View>
      <View style={styles.menu}>
        <View style={styles.containerReptile}>
          <Image
          resizeMode="cover"
              style={styles.reptileCategory}
              source={require('../../assets/iguan.jpg')}
            />
            <Text style={styles.text}>REPTILES</Text>
          <Image
          resizeMode="cover"
              style={styles.reptileCategory}
              source={require('../../assets/terra.jpg')}
            />
          <Text style={styles.text}>MATERIEL</Text>
        </View>
      </View>
      <Button onPress={handlePayment}
      title="Pay"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "lightgreen",
    justifyContent: "space-between",
  },
    test: {
      flex:1,
      height:10,
      width:10
    },

    menu: {
      flex: 3,
      height: 10,
      alignItems: "center",
      marginBottom: 50,
      marginTop: 50
    },

    carousel: {
      backgroundColor: "blue",
      flex: 1,
      borderRadius: 30,
      marginTop: "10%",
      marginLeft: "5%",
      marginRight: "5%",
      opacity: 0.2,
      zIndex: 0
    },

    reptileCategory: {
      flex:1,
      borderRadius:50,
      width:"100%",
    },

    containerReptile: {
      width:180,
      flex:1,
      alignItems:"center"
    },

    text: {
      marginTop:10,
      marginBottom:40,
      fontSize:17
    }

  });


function rgba(arg0: number, arg1: number, arg2: number, arg3: number): any | import("react-native").ColorValue | undefined {
  throw new Error("Function not implemented.");
}

