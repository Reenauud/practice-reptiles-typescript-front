import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Menu({ navigation }: any) {
  return (
    <View style={styles.menu}>
      <Text style={styles.text} onPress={() => navigation.navigate("Food")}>
        Alimentation
      </Text>
      <Text style={styles.text} onPress={() => navigation.navigate("News")}>
        nouveautés
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "green",
  },
  text: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    color: "white",
    marginStart: 30,
  },
});
