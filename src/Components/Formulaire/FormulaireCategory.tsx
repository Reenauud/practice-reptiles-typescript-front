import React, { Provider, useEffect, useState } from 'react';
import { Button, TextInput, View, SafeAreaView } from 'react-native';
import { CREATE_FAMILY } from "../../GraphQL/Mutation";
import { useMutation } from '@apollo/react-hooks';
import * as SecureStore from 'expo-secure-store';
import UploadPictures from '../UploadPictures';
import { useSelector } from 'react-redux';
import { RootState } from "../../app/RootReducers";
import { CREATE_CATEGORY } from '../../GraphQL/Mutation';
import { AdvancedImage } from 'cloudinary-react-native';
import { Cloudinary } from '@cloudinary/url-gen';


export const FormulaireCategory = () => {

    // récuperation de l'id de l'image depuis le composant UploadPicture 
    const PhotoId = useSelector((state: RootState) => state.photoId)
    
    // recupération de l'image sur cloudinary avec son id 
    const cld = new Cloudinary({
        cloud: {
            cloudName: "ddnauhqyh"
        }
    })

    const myImage = cld.image(PhotoId.photoId)


    const [category, setCategory] = useState("")
    // const [imageId, setImageId] = useState("")

    // async function getVAlueFor(key: string) {
    //     let imageId = await SecureStore.getItemAsync(key)
    //     console.log("avant le try dans getValue ")

    //     try {
    //         if (imageId) {
    //             console.log('ca passe bien dans get Value =) cest nice ')
    //             console.log("result normalement idPhoto dans localStorage", imageId)
    //             setImageId(imageId)
    //         }

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }



    const [create, { loading, error }] = useMutation(CREATE_CATEGORY)


    const onSubmit = () => {
        const newCategory = {
            categoryName: category,
            categoryImage: PhotoId.photoId
        };

        create({
            variables: {"categoryImage": PhotoId.photoId,"categoryName": category}
        })


    }

    return (
        <SafeAreaView>
            <View style={{ flex: 0, width: "100%", alignItems: "center", }}>

                <TextInput
                    placeholder='category'
                    onChangeText={newCategory => setCategory(newCategory)}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={category}


                />
                <Button
                    onPress={() => onSubmit()}
                    title="Envoyer"
                    color="#841584"
                />

                <UploadPictures />

                {myImage ? <AdvancedImage cldImg={myImage} style={{ width: 200, height: 200 }}></AdvancedImage> : null}

            </View>


        </SafeAreaView>

    )

}
