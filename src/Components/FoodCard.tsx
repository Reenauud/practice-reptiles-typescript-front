import React from 'react';
import { View, Text } from 'react-native';
import { FoodForSale } from '../types/datatypes';
import { AdvancedImage } from 'cloudinary-react-native';
import { Card, Button } from '@rneui/themed';
import { Cloudinary } from '@cloudinary/url-gen';
import { useDispatch } from 'react-redux';
import { addArticle } from '../app/OrderSlice';

type FoodCardComponentProps = {
    food: FoodForSale;
}

export function FoodCard ({ food }: FoodCardComponentProps) {
    const dispatch = useDispatch();
    const cld = new Cloudinary({
        cloud: {
            cloudName: "ddnauhqyh"
        }
    })

    const imageToShow = cld.image(food.foodPicture);

    return (
        <Card containerStyle={{flex: 1, height: 300, width: "80%", marginVertical: 20, marginHorizontal: 35 }}>
            <Card.Title>{food.foodCategory}</Card.Title>
            <View style={{width: "100%", height: "50%"}}>
                <AdvancedImage cldImg={imageToShow} style={{ width: "100%", height: "100%" }} resizeMode='contain'></AdvancedImage>
            </View>
                
                    <Text>{food.foodName}</Text>

                    <Text style={{textAlign: "right", fontWeight: "bold"}}>{food.foodPrice.toFixed(2)} €</Text>
                    <Button
                    title="Ajouter au panier"
                    onPress={() => dispatch(addArticle({picture: food.foodPicture, name: food.foodName, quantity: 1, unitPrice: food.foodPrice}))}
                    />                
        </Card>
    )
}