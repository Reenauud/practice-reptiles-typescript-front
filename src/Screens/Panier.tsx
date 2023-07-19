
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import {LinearGradient} from 'expo-linear-gradient'

export default function Panier (){

    return (

    <LinearGradient
    colors={['#006400', '#FFFFFF',]}
    style={styles.menu}
    >
        <View style={styles.menu}>
            <Text>Mon panier</Text>
            <View style={styles.panier}>
            <Text>cic petit text</Text>

            </View>
        </View>
        </LinearGradient>


    )




}


const styles = StyleSheet.create({
    menu: {
      flex: 1,
    //   backgroundColor: "green",
    justifyContent:"center",
    // alignItems:"center"
    },
    panier:{
        flex: 0.5,
        width:"80%",
        // height:"20%",
        backgroundColor:"white",
        marginLeft:"10%"
    }

})


