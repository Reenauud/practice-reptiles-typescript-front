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
import { Badge } from '@rneui/themed';
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
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                      } else if (route.name === "Shop") {
                        iconName = focused ? "search" : "search-outline";
                      } else if (route.name === "User") {
                        iconName = focused ? "person" : "person-outline";
                      } else if (route.name === "Checkout") {
                        iconName = focused ? "cart" : "cart-outline";
                      }
                      return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    headerShown: false,
                    tabBarActiveTintColor: "darkgreen",
                    tabBarInactiveTintColor: "gray",
                  })}
                >
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Shop" component={Shop} />
                    <Tab.Screen name="User" component={User} />
                    <Tab.Screen
                    options={{
                        tabBarBadge: numberOfArticles !== 0 ? numberOfArticles : undefined
                    }}
                    name="Checkout" component={Checkout} />
                </Tab.Navigator>
            </StripeProvider>
        </NavigationContainer>
    )
}