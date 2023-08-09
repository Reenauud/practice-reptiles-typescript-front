import React from 'react';
import { Divider } from '@rneui/themed';
import { AdvancedImage } from 'cloudinary-react-native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { ArticleOrder, increaseQuantity, removeOneArticle, removeWholeArticle } from '../app/OrderSlice';
import { Cloudinary } from '@cloudinary/url-gen';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/RootReducers';

type OrderItemLineComponentProps = {
    product: ArticleOrder;
}

export default function OrderItemLine ({ product }: OrderItemLineComponentProps) {
    const dispatch = useDispatch();

    const cld = new Cloudinary({
        cloud: {
            cloudName: "ddnauhqyh"
        }
    })

    const onRemove = (product: ArticleOrder) => {
        dispatch(removeOneArticle({ picture: product.picture, name: product.name, quantity: product.quantity, unitPrice: product.unitPrice }))
    }
    
    return (
        <View style={styles.productItem}>
            <View style={styles.productInfos}>
                <View style={styles.productImgContainer}>
                    <AdvancedImage cldImg={cld.image(product.picture)} alt={product.name} style={{ width: "100%", height: "100%" }}/>
                </View>
            
                <View>
                    <Text style={{fontSize: 18}}>{product.name}</Text>
                </View>
            </View>

                    
            <View style={styles.actionBtnsContainer}>
                <TouchableOpacity
                    style={styles.actionBtn}
                    onPress={() => onRemove(product)}>
                    <Ionicons name="remove-outline" color="white" size={20} />
                </TouchableOpacity>
                <Text>{product.quantity}</Text>
                <TouchableOpacity
                    style={styles.actionBtn}
                    onPress={() => dispatch(increaseQuantity({ name: product.name }))}
                    
                >
                    <Ionicons name="add-outline" color="white" size={20} />
                </TouchableOpacity>
            
        
                <View>
                    <Text>{product.unitPrice.toFixed(2)} €/u</Text>
                </View>
        
            
                <TouchableOpacity
                    onPress={() => dispatch(removeWholeArticle({ name: product.name }))}>
                    <Ionicons name="trash-outline" size={20}/>
                </TouchableOpacity>
            </View>
            <Divider />
        </View>                
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
    },

    productImgContainer: {
        height: 100,
        width: 100,
    },

    productItem: {
        flex: 0,
        marginVertical: 10,
    },

    productInfos: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    actionBtnsContainer: {
        flex:0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 4,
    },

    actionBtn: {
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        width: 30,
        height: 30,
        backgroundColor: "darkgreen",
    },

})