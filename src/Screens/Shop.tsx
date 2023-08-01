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
      initialRouteName="Showcase"
      >
        <Stack.Screen name="Showcase" component={Showcase} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Reptiles" component={Reptile} /> 
        <Stack.Screen name="Equipments" component={Equipments}/>
      </Stack.Navigator>
    );
  }