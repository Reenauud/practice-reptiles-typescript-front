import React, { useEffect, useState } from 'react';
import { Button, TextInput, View, SafeAreaView } from 'react-native';
import { CREATE_REPTILE } from "../../GraphQL/Mutation";
import { useMutation, useQuery } from '@apollo/react-hooks';
import * as ImagePicker from "expo-image-picker"
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "cloudinary-react-native";
import { SelectList } from "react-native-dropdown-select-list"
import { GET_ALL_CATEGORIES, GET_CATEGORY_BY_NAME } from '../../GraphQL/Queries';

export const FormulaireReptile = () => {

    const [nom, setNom] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [selected, setSelected] = useState("")
    const [create, { loading, error }] = useMutation(CREATE_REPTILE)
    const [image, setImage] = useState({})
    const allCategoryData: any[] = []
    const [categoryId, setCategoryId] = useState()
    const [photoId, setPhotoId] = useState("")

    const cld = new Cloudinary({
        cloud: {
            cloudName: "ddnauhqyh"
        }
    })

    const myImage = cld.image(photoId)

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


        await fetch("https://api.cloudinary.com/v1_1/ddnauhqyh/upload", {
            method: 'post',
            body: data
        }).then(res => res.json())
            .then(
                data => { setImage(data), setPhotoId(data.public_id) }).catch(err => {
                    console.log(err)
                    alert(err)
                })
    }
    const result = useQuery(GET_ALL_CATEGORIES)

    useEffect(() => {
        allCategoryData
        data
        setSelected

    }, [])

    if (result) {
        result.data?.getAllCategory.map((cat: any) => {
            const data = {
                key: cat.id,
                value: cat.categoryName
            }
            allCategoryData.push(data)
        })
    }

    const { data } = useQuery(GET_CATEGORY_BY_NAME, {
        variables: {
            categoryName: selected
        },
        onCompleted(data) {
            try {
                setCategoryId(data?.getCategoryByName.id)
            } catch (error) {
                console.log(error)
            }
        },
    })

    const categorySelected = (value: string) => {
        setSelected(value)
        data
    }

    const onSubmit = () => {
        const newReptile = {
            description: description,
            name: nom,
            price: parseInt(price, 10),
            quantity: parseInt(quantity, 10),
            photoId: photoId
        };

        try {

            create({
                variables: { reptile: newReptile, categoryId },
            });

            alert("reptile bien ajouté =) ")

            setDescription("")
            setNom("")
            setPrice("")
            setQuantity("")
            setPhotoId("")

            // a voir pour remise par defaut du select // 

        } catch (error) {

            alert(error)

        }
    }

    return (
        <SafeAreaView>
            <View style={{ flex: 0, width: "100%", alignItems: "center", }}>

                <TextInput
                    placeholder='description'
                    onChangeText={description => setDescription(description)}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={description}
                />
                <TextInput
                    editable={true}
                    placeholder='name'
                    onChangeText={nom => setNom(nom)}
                    value={nom}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                />
                <TextInput
                    placeholder='price'
                    onChangeText={price => setPrice(price)}
                    value={price}
                    keyboardType='numeric'
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                />
                <TextInput
                    placeholder='quantity'
                    onChangeText={quantity => setQuantity(quantity)}
                    value={quantity}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    keyboardType='numeric'
                />
                <SelectList
                    setSelected={(value: string) => categorySelected(value)}
                    data={allCategoryData}
                    save="value"
                    boxStyles={{ backgroundColor: "lightGreen" }}
                />
                <Button title='upload' onPress={pickImage} />
                
                {photoId ? <AdvancedImage cldImg={myImage} style={{ width: 300, height: 300 }} /> : null}
                <Button
                    onPress={() => onSubmit()}
                    title="Send"
                    color="#841584"
                />
                <Button
                    // onPress={()=> change()}
                    title='changement' />

            </View>

        </SafeAreaView>
    )

}
