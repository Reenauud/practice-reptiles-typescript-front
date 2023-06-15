import React from "react";
import { View, StyleSheet, Text } from "react-native";


const CardReptiles = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Nom commun du reptile</Text>
                <Text style={styles.subTitle}>Nom latin du reptile</Text>
            </View>
            <View style={styles.center}>
                <View style={styles.topHalf}></View>
                <View style={styles.frame}>
                    <View style={styles.imageContainer}>
                        
                    </View>
                </View>
                <View style={styles.bottomHalf}></View>
            </View>
            <View style={styles.bottom}>

            </View>

        </View>
    )
}

export default CardReptiles;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
        height: 100

    },
    top: {
        flex: 0.5,
        backgroundColor: "green",
        paddingHorizontal: 10,
    },
    title: {
        fontWeight: "bold",
        color: "white",
    },
    subTitle: {
        color: "white",
        fontStyle: "italic",
    },
    center: {
        flex: 2,
        height: 150,
        position: "relative",
        marginVertical: 5,
    },
    frame: {
        height: 160,
        width: 160,
        borderTopLeftRadius: 80,
        borderBottomRightRadius: 80,
        backgroundColor: "lightgreen",
        justifyContent: "center",
        alignItems: "center",
        left: 20,
        position: "absolute",
        zIndex: 5,
    },
    topHalf: {
        height: 80,
        marginLeft: 95,
        backgroundColor: "lightgreen",
    },
    bottomHalf: {
        height: 80,
        backgroundColor: "lightgreen",
        width: 95,
    },
    imageContainer: {
        height: 150,
        width: 150,
        borderRadius: 75,
        backgroundColor: "grey",
    },
    
    bottom: {
        flex: 2,
        height: 40,
        width: "100%",
    },

    
})