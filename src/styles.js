import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    flexAroundColumn: {
    
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      flex: 1,
      backgroundColor: "grey",
      justifyContent: "space-between",
    },
    header: {
      flex: 0,
      width: "100%",
      alignItems: "flex-end",
      flexDirection: "row",
      justifyContent: "space-between",
      height: 200,
    },
    slide: {
      flex: 0,
      height: "40%",
      backgroundColor: "blue",
    },
    footer: {
      flex: 0,
      backgroundColor: "transparent",
      height: "15%",
    },
    image: {
      flex: 0,
      height: 200,
      // alignItems: "center",
      // flexDirection: "column-reverse",
      // alignItems: "center",
    },
  
    icon: {
      flex: 0,
      display: "flex",
      flexDirection: "row-reverse",
      marginLeft: 10,
      width: 100,
      justifyContent: "space-between",
    },
    title: {
      color: "white",
  
      position: "absolute",
      bottom: "30%",
      left: 100,
      fontSize: 40,
    },
    carou: {
      flex: 0,
      backgroundColor: "pink",
      height: 90,
    },
    listContainer: {
      
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 5,
    },
    listTitle: {
      fontSize: 20,
      fontWeight: "500",
      textAlign: "left",
    },
    card: {
        height: 200,
        width: 350,
        flex: 1,
        flexWrap: "wrap",
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 5,
        borderWidth: 1,
        paddingVertical: 20,
        marginVertical: 4,
      },
      cardImg: {
        height: 150,
        width: 150,
        marginHorizontal: 4,
      },
  });
