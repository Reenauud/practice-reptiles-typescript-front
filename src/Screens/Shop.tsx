import React from 'react';
import Food from "./Food";
import Reptile from "./Reptiles";
import Equipments from "./Equipments";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Router/types';
import { Showcase } from './Showcase';
const Stack = createNativeStackNavigator<RootStackParamList>();

export function Shop() {
    return (
      <Stack.Navigator
      initialRouteName="Vitrine"
      >
        <Stack.Screen name="Vitrine" component={Showcase} />
        <Stack.Screen name="Nourriture" component={Food} />
        <Stack.Screen name="Animaux" component={Reptile} /> 
        <Stack.Screen name="Equipements" component={Equipments}/>
      </Stack.Navigator>
    );
  }