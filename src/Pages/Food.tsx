import React, { useState } from "react";
import { View, Text, ActivityIndicator, FlatList, Image, Button } from "react-native";
import { useQuery } from "@apollo/client";
import SearchBar from "react-native-dynamic-search-bar";
import { GET_FOOD_LIST } from "../GraphQL/Queries";
import { IFood } from "../Interfaces/Interfaces";
import { styles } from "../styles";

export default function Food() {
  const [foodList, setFoodList] = useState<IFood[]>([]);
  const { loading, error } = useQuery(GET_FOOD_LIST, {
    onCompleted: (data) => {
      setFoodList([...data.getFoodList]);
    }
  });
  console.log(foodList);
  if (loading) return <ActivityIndicator />;
  if (error) return <Text>{error.message}</Text>
  return (
    <View>
        <SearchBar
          placeholder="Que recherchez-vous ?"
          onPress={() => alert("onPress")}
          onChange={(text) => console.log(text)}
        />
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Nos catégories:</Text>
        {foodList.length > 0 && (
          <FlatList 
          data={foodList}
          keyExtractor={(item) => item.foodName} 
          renderItem={(foodItem: any) => {
            console.log('item', foodItem);
            return (
              <View style={styles.card}>
                <Image
                style={styles.cardImg}
                source={{
                  uri: "https://images.pexels.com/photos/9460987/pexels-photo-9460987.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  }}
                />
                <View style={styles.flexAroundColumn}>
                  <Text>Catégorie:</Text>
                  <Text>{foodItem.item.foodCategory}</Text>
                  <Text>Article:</Text>
                  <Text>{foodItem.item.foodName}</Text>
                  <Text>Prix:</Text>
                  <Text>{foodItem.item.foodPrice.toFixed(2)} €</Text>
                  <Button title="Ajouter au panier" />
                </View>
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