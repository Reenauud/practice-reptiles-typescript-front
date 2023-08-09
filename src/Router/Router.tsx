import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StripeProvider } from '@stripe/stripe-react-native';
import Constants from "expo-constants";
import Home from "../Screens/Home";
import { Shop } from '../Screens/Shop';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from './types';
import { User } from '../Screens/User';
import { Checkout } from '../Screens/Checkout';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from 'react-redux';
import { RootState } from '../app/RootReducers';

const { manifest } = Constants;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function Router() {
    const [numberOfArticles, setNumberOfArticles] = useState<number>(0);
    const order = useSelector((state: RootState) => state.order);

    useEffect(() => {
        const getNumberOfArticles = () => {
            const numberInCart = order.cart.reduce((acc, curr) => acc += curr.quantity, 0);
            setNumberOfArticles(numberInCart);
        }
        getNumberOfArticles();
    }, [order]);

    return (
        <NavigationContainer>
            <StripeProvider
            publishableKey={manifest?.extra?.stripePublishableKey}
            >
                <Tab.Navigator
                initialRouteName="Accueil"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === "Accueil") {
                        iconName = focused ? "home" : "home-outline";
                      } else if (route.name === "Produits") {
                        iconName = focused ? "search" : "search-outline";
                      } else if (route.name === "Compte") {
                        iconName = focused ? "person" : "person-outline";
                      } else if (route.name === "Achats") {
                        iconName = focused ? "cart" : "cart-outline";
                      }
                      return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    headerShown: false,
                    tabBarActiveTintColor: "darkgreen",
                    tabBarInactiveTintColor: "gray",
                  })}
                >
                    <Tab.Screen name="Accueil" component={Home} />
                    <Tab.Screen name="Produits" component={Shop} />
                    <Tab.Screen name="Compte" component={User} />
                    <Tab.Screen
                    options={{
                        tabBarBadge: numberOfArticles !== 0 ? numberOfArticles : undefined
                    }}
                    name="Achats" component={Checkout} />
                </Tab.Navigator>
            </StripeProvider>
        </NavigationContainer>
    )
}