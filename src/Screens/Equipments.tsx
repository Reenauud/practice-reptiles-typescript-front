import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from "react-native";
import { GET_ALL_EQUIPMENTS } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import { EquipmentForSale } from "../types/datatypes";
import EquipmentCard from "../Components/EquipmentCard";
import { sharedStyles } from "../sharedStyles/sharedStyles";
import { EquipmentsNavigationProp } from "../Router/types";
import { useSelector } from "react-redux";
import { RootState } from "../app/RootReducers";
import { Badge } from "@rneui/themed";

export default function Equipments({ navigation }: EquipmentsNavigationProp) {
  const [equipments, setEquipments] = useState<EquipmentForSale[]>([]);
  const [numberOfArticles, setNumberOfArticles] = useState<number>(0);
  const order = useSelector((state: RootState) => state.order);

    useEffect(() => {
        const getNumberOfArticles = () => {
            const numberInCart = order.cart.reduce((acc, curr) => acc += curr.quantity, 0);
            setNumberOfArticles(numberInCart);
        }
        getNumberOfArticles();
    }, [order]);

  const { loading, error } = useQuery<EquipmentForSale[]>(GET_ALL_EQUIPMENTS, {
    onCompleted: (data: any) => {
        setEquipments(data.getAllEquipments);
    }
})
if (loading) return <ActivityIndicator />;
if (error) return <Text>{error.message}</Text>

  return (
    <View style={styles.background}>
      <View style={{ flex: 4, alignItems: "center", width: "100%", paddingVertical: 20 }}>
        <Text>Le meilleur équipement pour vos animaux préférés !</Text>
        <FlatList 
        data={equipments}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}: {item: EquipmentForSale}) => 
          <EquipmentCard 
          equipment={item} />}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
  },

});