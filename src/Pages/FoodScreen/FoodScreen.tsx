import React, { useState } from "react";
import { View, Text, ActivityIndicator, Pressable, SafeAreaView } from "react-native";
import FoodList from "../../Components/FoodList";
import { useLazyQuery } from "@apollo/client";
import { GET_FOOD_FILTERED } from "../../GraphQL/Queries";
import { IFood } from "../../Interfaces/Interfaces";
import { styles } from "../../styles";
import { foodScreenStyles } from "./FoodScreenStyles";
import CardReptiles from "../../Components/CardReptiles";

export default function Food() {
  const [foodList, setFoodList] = useState<IFood[]>([]);
  const [isFoodSelected, setIsFoodSelected] = useState<boolean>(false);

  const handleFoodSearch = (filter: string) => {
    setIsFoodSelected(true);
    getFood({
      variables: {
        filter: filter,
      }
    });
  }
  
  const [getFood, { loading, error }] = useLazyQuery(GET_FOOD_FILTERED, {
    onCompleted: (data) => {
      setFoodList([...data.getFoodFiltered]);
    }
  })
  if (loading) return <ActivityIndicator />;
  if (error) return <Text>{error.message}</Text>
  return (
    <SafeAreaView style={styles.screen}>
      <CardReptiles />
      {!isFoodSelected &&
        <View>
          <Text>Notre choix d'alimentation:</Text>
          <Text style={foodScreenStyles.foodTypesTitle}>Nourriture humide:</Text>
          <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro rerum nemo, id explicabo delectus iure quis odit ea similique totam mollitia, fugit velit temporibus perferendis assumenda quidem quasi vel voluptatem.</Text>
          <Text style={foodScreenStyles.foodTypesTitle}>Nourriture vivante:</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloribus quas alias quae doloremque aspernatur, inventore, eos quo est dolores consectetur corporis sed, dignissimos libero. Adipisci natus nam accusantium debitis.</Text>
          <Text style={foodScreenStyles.foodTypesTitle}>Nourriture surgelée:</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloribus quas alias quae doloremque aspernatur, inventore, eos quo est dolores consectetur corporis sed, dignissimos libero. Adipisci natus nam accusantium debitis.</Text>
          <Text style={foodScreenStyles.foodTypesTitle}>Nourriture pour proie:</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloribus quas alias quae doloremque aspernatur, inventore, eos quo est dolores consectetur corporis sed, dignissimos libero. Adipisci natus nam accusantium debitis.</Text>
        </View>
      }
      <View style={styles.container}>
        <View style={foodScreenStyles.segmentedButtonContainer}>
          <Pressable
          style={foodScreenStyles.segmentedLeftButton}
          onPress={() => handleFoodSearch("reptiles")}
          >
            <Text>Pour reptiles</Text>
          </Pressable>
          <Pressable
          style={foodScreenStyles.segmentedCenterButton}
          onPress={() => handleFoodSearch("")}
          >
            <Text>   Voir tout</Text>
          </Pressable>
          <Pressable
          style={foodScreenStyles.segmentedRightButton}
          onPress={() => handleFoodSearch("proies")}
          >
            <Text> Pour proies</Text>
          </Pressable>
        </View>
        {isFoodSelected &&
          <SafeAreaView style={styles.container}>
            <FoodList list={foodList} />
          </SafeAreaView>
        }
        
        
          
      </View>
    </SafeAreaView>
  );
}