import React, { useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import SearchBar from "react-native-dynamic-search-bar";
import { GET_FOOD_LIST } from "../GraphQL/Queries";
import { FoodCard } from "../Components/FoodCard";
import { FoodForSale } from "../types/datatypes";

export default function Food() {
  const [foodList, setFoodList] = useState<FoodForSale[]>([]);
  const { loading, error } = useQuery(GET_FOOD_LIST, {
    onCompleted: (data) => {
      setFoodList([...data.getFoodList]);
    }
  });
  if (loading) return <ActivityIndicator />;
  if (error) return <Text>{error.message}</Text>
  return (
    <View style={{flex: 1, marginVertical: 10}}>
      <Text>Choisissez la nourriture adaptée à vos reptiles préférés !</Text>
        <SearchBar
          placeholder="Que recherchez-vous ?"
          onPress={() => alert("onPress")}
          onChange={(text) => console.log(text)}
        />
      <View>
        {foodList.length > 0 && (
          <FlatList 
          data={foodList}
          keyExtractor={(item) => item.foodName} 
          renderItem={({item}: {item: FoodForSale}) => 
          <FoodCard 
          food={item} />}
          />
        )}
      </View>
    </View>
  );
}
