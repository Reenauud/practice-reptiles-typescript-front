import React, { useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import SearchBar from "react-native-dynamic-search-bar";
import { GET_FOOD_LIST } from "../GraphQL/Queries";
import { IFood } from "../Interfaces/Interfaces";

export default function Food() {
  const [foodList, setFoodList] = useState<IFood[]>([]);
  const { loading, error } = useQuery(GET_FOOD_LIST, {
    onCompleted: (data) => {
      setFoodList([...data.getFoodList]);
    }
  });
  if (loading) return <ActivityIndicator />;
  if (error) return <Text>{error.message}</Text>
  return (
    <View>
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
          renderItem={(foodItem: any) => {
            console.log('item', foodItem);
            return (
              <View>
                <Text>Catégorie: {foodItem.item.foodCategory}</Text>
                <Text>Article: {foodItem.item.foodName}</Text>
                <Text>Prix: {foodItem.item.foodPrice}</Text>
              </View>
            )
          }
        }
          />
        )}
      </View>
    </View>
  );
}
