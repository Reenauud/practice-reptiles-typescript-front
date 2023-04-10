import { View, Text } from "react-native";
import React from "react";
import SearchBar from "react-native-dynamic-search-bar";

export default function Food() {
  return (
    <View>
      <Text>page nourriture en developpement</Text>
      <View>
        <SearchBar
          placeholder="que recherchez vous ?"
          onPress={() => alert("onPress")}
          onChange={(text) => console.log(text)}
        />
      </View>
    </View>
  );
}
