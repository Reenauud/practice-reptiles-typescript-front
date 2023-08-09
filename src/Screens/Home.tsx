import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button } from "react-native";
import Carousel from "../Components/Carousel";

export default function Home({ navigation }: any) {
  
  return (
    <View
      style={styles.background}
    >
        <View style={styles.carousel}>
          <Text style={styles.homeTitle}>Nos nouveautés</Text>
          <Carousel />
        </View>
        <ScrollView style={styles.menu}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.title}>Bienvenue sur votre application Reptile Shop !</Text>
            <Text style={{fontSize: 18, textAlign: "justify"}}>Consultez nos offres et nos promotions régulières ou recevez des notifications concernant vos articles favoris.</Text>
          </View>
          <View style={styles.offersContainer}>
            <Text style={styles.homeTitle}>Nos incontournables</Text>
            <View style={styles.offerImgContainer}>
              <Image source={require('./img/iguan.jpg')} style={styles.img} />
              <View style={styles.absoluteBtnContainer}>
                <Button
                color="darkgreen"
                title="Voir"
                />
              </View>
              
            </View>
          </View>
          <View style={styles.offersContainer}>
            <Text style={styles.homeTitle}>Nos Promotions</Text>
            <View style={styles.offerImgContainer}>
              <Image source={require('./img/discount.jpg')} style={styles.img} />
              <View style={styles.absoluteBtnContainer}>
                <Button
                color="darkgreen"
                title="Voir"
                />
              </View>
              
            </View>
          </View>
        </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  homeTitle: {
    fontSize: 20,
    fontStyle: "italic",
    marginVertical: 5,
  },

  menu: {
    flex: 1,
    width: "100%",
  },

  welcomeTextContainer: {
    height: 150,
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 20,
    textAlign: "center",
  },

  offersContainer: {
    height: 300,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  offerImgContainer: {
    height: 200,
    width: 300,
    position: "relative",
  },

  absoluteBtnContainer: {
    position: "absolute",
    width: 100,
    bottom: 10,
    right: 100,
  },

  carousel: {
    flex: 1,
    borderRadius: 30,
    marginTop: "10%",
    marginLeft: "5%",
    marginRight: "5%",
    zIndex: 0,
  },

  img: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },

  containerLogo: {
    width: "100%",
    height: "100%",
    flex: 1,
  },

});

function rgba(arg0: number, arg1: number, arg2: number, arg3: number): any | import("react-native").ColorValue | undefined {
  throw new Error("Function not implemented.");
}

