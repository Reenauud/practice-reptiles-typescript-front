import { StyleSheet } from "react-native";

export const sharedStyles = StyleSheet.create({
    logo: {
        height: "85%",
        width: "60%",
        marginTop: "5%"
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

      touchable: {
        width: 80,
        height: 100,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        zIndex: 1,
      },

      header:{
        width: "100%",
        backgroundColor: "black",
        height: 100,
        alignItems: "center",
      },
});