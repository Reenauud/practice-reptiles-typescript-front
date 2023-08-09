
import React from "react";
import { View, Text, StyleSheet, FlatList, Button, Pressable } from "react-native";
import { Divider } from "@rneui/themed";
import { ArticleOrder } from "../app/OrderSlice";
import { RootState } from "../app/RootReducers";
import { useSelector } from "react-redux";
import { Cloudinary } from "@cloudinary/url-gen";
import OrderItemLine from "../Components/OrderItemLine";

export default function Panier ({ navigation }: any){
    const order = useSelector((state: RootState) => state.order);

    const cld = new Cloudinary({
        cloud: {
            cloudName: "ddnauhqyh"
        }
    })

    return (
        <View style={styles.page}>
            <Text style={{textAlign: "center", fontSize: 30, marginVertical: 10}}>Votre panier en détail</Text>
            {order.cart.length > 0 ?
            <View style={{flex: 0}}>
                <Divider inset={true} insetType="middle" />
                <FlatList 
                data={order.cart}
                keyExtractor={item => item.name}
                renderItem={({item}: {item: ArticleOrder}) => 
                  <OrderItemLine 
                product={item} />}
                />     
                <Text style={{textAlign: "center", fontWeight: "bold"}}>Total commande : {order.totalAmount.toFixed(2)} €</Text>
                <Pressable
                onPress={() => navigation.navigate("PaymentScreen")}
                style={styles.payBtn}>
                    <Text style={{color: "white", textAlign: "center", fontWeight: "bold"}}>Payer</Text>
                </Pressable>
            </View>
            : 
            <View>    
                <Divider inset={true} insetType="middle"/>
                <Text style={{textAlign: "center", fontWeight: "bold"}}>Votre panier est vide.</Text>
            </View>
        }
        </View>
    )
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
    },

    payBtn: {
        height: 50,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "darkgreen",
        alignSelf: "center",
        marginVertical: 10,
        borderRadius: 5,
    },
})


