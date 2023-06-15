import React from "react";
import { View, Text, Image, FlatList, Button } from "react-native";
import EmptyList from "./EmptyList";
import { styles } from "../styles";

export default function FoodList ({ list }: any) {
    return (
          <FlatList
          initialNumToRender={3} 
          data={list}
          keyExtractor={(item) => item.foodName}
          ListEmptyComponent={EmptyList}
          ListHeaderComponent={() => (
            <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
              Choisissez son prochain repas
            </Text>
          )}
          renderItem={(foodItem: any) => {
            return (
              <View style={styles.card}>
                <Image
                style={styles.cardImg}
                source={{
                  uri: "https://images.pexels.com/photos/9460987/pexels-photo-9460987.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  }}
                />
                <View>
                  <Text style={{flexShrink: 1, textAlign: "justify"}}>{foodItem.item.foodName}</Text>
                  <Text style={{marginVertical: 20}}>Prix: {foodItem.item.foodPrice.toFixed(2)} €</Text>
                  <Button title="Ajouter au panier" />
                </View>
              </View>
            )
          }
        }
          />
    )
}