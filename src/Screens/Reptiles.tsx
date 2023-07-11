import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { heic } from "@cloudinary/url-gen/qualifiers/format"


export default function Reptiles() {
    return (
        <View style={styles.container} >
            <LinearGradient
                colors={['#006400', '#FFFFFF',]}
                style={styles.container}

            >

                <Text>Ici page catégorie reptiles faire get all category </Text>

                <Text> CATEGORY NAME </Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgreen",
        justifyContent: "center",
        alignContent: "center",
        height: "100%"
    },

})