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
        flex: 0.4,
        backgroundColor: "white",

        width: "100%",
        height: 10,
        borderBottomRightRadius: 158,
        borderTopLeftRadius: 158,

    },
    top: {
        flex: 1,
        backgroundColor: "green",
        borderRadius: 350,
        width:200,

    },

    topHalf:{
        height:10,
        marginLeft: 50
    },
    
    bottom: {
        flex: 1,
        backgroundColor: "grey",
        display: "flex",
        position: "absolute",
        borderRadius: 50,
        opacity: 1,
        zIndex: -1
   
    },


    center: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
        height: 100

    },
})