import { StatusBar } from "expo-status-bar";
import { Icon } from "@rneui/themed";
import { Text, View, ImageBackground } from "react-native";
import { styles } from "../styles";
import SearchBar from "react-native-dynamic-search-bar";
import LezardImage from "../../assets/lezard.jpg";
import Carrousel from "../Components/Carrousel";
import Menu from "../Components/Menu";

export default function Home({ navigation }: any) {
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


