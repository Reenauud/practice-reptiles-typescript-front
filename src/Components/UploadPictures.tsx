import * as SecureStore from "expo-secure-store"
import * as ImagePicker from "expo-image-picker"
import { Cloudinary } from "@cloudinary/url-gen";
import React from "react";
import { useState } from "react";
import { View } from "react-native";
import { Button } from "@rneui/themed";
import { useSelector, useDispatch } from "react-redux";
import {setPhotoId} from "../app/PictureSlice"
import { RootState } from "../app/RootReducers";
import { AdvancedImage } from "cloudinary-react-native";

async function save(key: string, value: string) {
    await SecureStore.setItemAsync(key, value)
    console.log("ca passe dans la fonction save ?")
}

console.log("test4dev")

// async function getVAlueFor(key: string) {
//     let result = await SecureStore.getItemAsync(key)
//     console.log("avant le try dans getValue ")

//     try {
//         if (result) {
//             console.log('ca passe bien dans get Value =) cest nice ')
//             console.log("result normalement idPhoto dans localStorage", result)
//         }

//     } catch (error) {
//         console.log(error)
//     }
// }

export default function UploadPictures() {

    const PhotoId = useSelector((state: RootState) => state.photoId)
    const dispatch = useDispatch()

    const [key, onChangeKey] = useState("")
    const [value, onChangeValue] = useState("")

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        })
        if (!result.canceled) {
            const res = result.assets[0].uri.split("/"[0])
            const imageName = res.pop()

            let picture = {
                uri: result.assets[0].uri,
                type: `test/${result.assets[0].type}`,
                name: `test.${imageName}`
            }

            cloudinaryUpload(picture)


        }

    }

    const cloudinaryUpload = async (image: any) => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'imgUpload')
        data.append('cloud_name', 'ddnauhqyh')

        try {


        await fetch("https://api.cloudinary.com/v1_1/ddnauhqyh/upload", {
            method: 'post',
            body: data
        }).then(res => res.json())
            .then(
                data => {onChangeValue(data.public_id) ,onChangeKey(key), save(data.public_id, data.public_id),  dispatch(setPhotoId(data.public_id))}).catch(err => {
                    console.log(err)
                    alert(err)
                })

                console.log(value, key)

                alert("upload image ok ")
          
        } catch (error) {

            alert(error)          
        }
    }



    return (
        <View>
            <Button onPress={pickImage} title={"ajouté une image"}></Button>
       
        </View>
    )

}