import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from "react-native";
import { GET_ALL_EQUIPMENTS } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import { EquipmentForSale } from "../types/datatypes";
import EquipmentCard from "../Components/EquipmentCard";
import { EquipmentsNavigationProp } from "../Router/types";

export default function Equipments({ navigation }: EquipmentsNavigationProp) {
  const [equipments, setEquipments] = useState<EquipmentForSale[]>([]);

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