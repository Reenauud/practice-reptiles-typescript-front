import React from 'react';
import PaymentScreen from './PaymentScreen';
import Panier from './Panier';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Router/types';
const Stack = createNativeStackNavigator<RootStackParamList>();

export function Checkout () {
    return (
        <Stack.Navigator
        screenOptions={{headerShown: false}}>
          <Stack.Screen name="Panier" component={Panier} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} /> 
        </Stack.Navigator>
      );
}