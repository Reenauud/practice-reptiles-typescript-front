import { View, StyleSheet } from "react-native"
import React from "react"


const CardReptiles = () => {
    return(
        <View style={styles.container}>
            <View style={styles.top}>

            </View>
            <View style={styles.bottom}>

            </View>

        </View>
    )
}

export default CardReptiles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
        height: 100

    },
    top: {
        flex: 1,
        backgroundColor: "green",

    },
    
    bottom: {
        flex: 1,
        backgroundColor: "grey",
        display: "flex",
        height: 40,
        width: "100%",
    }
})