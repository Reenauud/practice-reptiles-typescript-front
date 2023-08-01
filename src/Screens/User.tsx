import React from 'react';
import Admin from './Admin';
import Connexion from './Connexion';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Router/types';
const Stack = createNativeStackNavigator<RootStackParamList>();

export function User () {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Connexion" component={Connexion} />
          <Stack.Screen name="Admin" component={Admin} /> 
        </Stack.Navigator>
      );
}