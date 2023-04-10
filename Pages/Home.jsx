import { StatusBar } from "expo-status-bar";
import { Icon } from "@rneui/themed";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import LezardImage from "../assets/lezard.jpg";
import Carrousel from "../Components/Carrousel";
import Menu from "../Components/Menu";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={LezardImage}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.title}> reptile shop</Text>
          </View>
          <StatusBar style="auto" />
          <Menu navigation={navigation} />
          <View style={styles.icon}>
            <Icon
              name="account-circle"
              color={"green"}
              size={40}
              onPress={() => navigation.navigate("Connexion")}
            />
            <Icon name="shop" color={"green"} size={40} />
          </View>
        </View>
      </ImageBackground>

      <View>
        <SearchBar
          placeholder="Search here"
          onPress={() => alert("onPress")}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <Carrousel />
      {/* 
      <View style={styles.footer}>
        <Text>lorem</Text>
      </View> */}
      <View style={styles.footer}>
        <Text>lorem</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
