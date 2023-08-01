import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { GET_ALL_ANIMALS } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import { AdvancedImage } from "cloudinary-react-native";
import { Cloudinary } from "@cloudinary/url-gen";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import ModalReptiles from "../Components/ModalReptiles";
import { AnimalForSale } from "../types/datatypes";
import { AnimalCard } from "../Components/AnimalCard";


export default function Reptile() {

    const [animals, setAnimals] = useState([]);
    
    const { loading, error } = useQuery(GET_ALL_ANIMALS, {
        onCompleted: (data) => {
            setAnimals(data?.getAllReptiles);
        }
    });

        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={animals}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}: {item: AnimalForSale}) => 
                    <AnimalCard 
                    animal={item} />}
                    />
            </View>
        )
              
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: 100,
        justifyContent: "space-between",
    }
})