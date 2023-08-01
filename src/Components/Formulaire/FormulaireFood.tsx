import React, { Provider, useEffect, useState } from 'react';
import { Button, TextInput, View, SafeAreaView } from 'react-native';
import { CREATE_FOOD } from "../../GraphQL/Mutation";

import { useMutation } from '@apollo/react-hooks';
import UploadPictures from '../UploadPictures';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/RootReducers';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from 'cloudinary-react-native';

export const FormulaireFood = () => {

    // recupération de l'image sur cloudinary avec son id 
    const cld = new Cloudinary({
        cloud: {
            cloudName: "ddnauhqyh"
        }
    })
    // récuperation de l'id de l'image depuis le composant UploadPicture 
    const PhotoId = useSelector((state: RootState) => state.photoId)
    const [foodName, setFoodName] = useState("")
    const [foodCategory, setFoodCategory] = useState("")
    const [foodPrice, setFoodPrice] = useState("")
    const myImage = cld.image(PhotoId.photoId)

    const [create, { loading, error }] = useMutation(CREATE_FOOD)


    const onSubmit = () => {
        const newFood =  {
            foodName: foodName,
            foodCategory: foodCategory,
            foodPrice: parseInt(foodPrice, 10),
         };
 
        create({
            variables: {
                food: newFood,
                foodPicture: PhotoId.photoId,
            },
        });

    }

    return (
        <SafeAreaView>
            <View style={{ flex: 0, width: "100%", alignItems: "center", }}>

                <TextInput
                    placeholder='name'
                    onChangeText={foodName => setFoodName(foodName)}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={foodName}
                />
                <TextInput
                    editable={true}
                    placeholder='category'
                    onChangeText={foodCategory => setFoodCategory(foodCategory)}
                    value={foodCategory}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                />
                <TextInput
                    placeholder='price'
                    onChangeText={foodPrice => setFoodPrice(foodPrice)}
                    value={foodPrice}
                    keyboardType='numeric'
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                />
                <UploadPictures />
                <Button
                    onPress={() => onSubmit()}
                    title="Envoyer"
                    color="#841584"
                />
                {myImage ? <AdvancedImage cldImg={myImage} style={{ width: 200, height: 200 }}></AdvancedImage> : null}
            </View>
        </SafeAreaView>
    )
}
