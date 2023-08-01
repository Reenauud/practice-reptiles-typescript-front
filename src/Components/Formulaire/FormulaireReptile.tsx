import React, { useEffect, useState } from 'react';
import { Button, TextInput, View, SafeAreaView } from 'react-native';
import { CREATE_REPTILE } from "../../GraphQL/Mutation";
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "cloudinary-react-native";
import { SelectList } from "react-native-dropdown-select-list"
import { GET_ALL_CATEGORIES, GET_CATEGORY_BY_NAME } from '../../GraphQL/Queries';
import UploadPictures from '../UploadPictures';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/RootReducers';

export const FormulaireReptile = () => {

    const [nom, setNom] = useState("")
    const [scientificName, setScientificName] = useState<string>("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [selected, setSelected] = useState("")
    const [create, { loading, error }] = useMutation(CREATE_REPTILE)
    const allCategoryData: any[] = []
    const [categoryId, setCategoryId] = useState()
    //const [photoId, setPhotoId] = useState("")

    // récuperation de l'id de l'image depuis le composant UploadPicture 
    const PhotoId = useSelector((state: RootState) => state.photoId)

    const cld = new Cloudinary({
        cloud: {
            cloudName: "ddnauhqyh"
        }
    })

    const myImage = cld.image(PhotoId.photoId)

    const { data: allCategoriesData } = useQuery(GET_ALL_CATEGORIES)
        // console.log("result ", result.data.data)

    useEffect(() => {
        //allCategoryData
        //data
    }, [])

        allCategoriesData?.getAllCategories.map((cat: any) => {
            const data = {
                key: cat.id,
                value: cat.categoryName
            }
            allCategoryData.push(data)
        })


    const { data } = useQuery(GET_CATEGORY_BY_NAME, {
        variables: {
            categoryName: selected
        },
        onCompleted(data) {
            try {
                setCategoryId(data?.getCategory.id)
            } catch (error) {
                console.log(error)
            }
        },
    })

    const categorySelected = (value: string) => {
        setSelected(value)
    }

    const onSubmit = () => {
        const newReptile = {
            name: nom,
            scientificName: scientificName,
            description: description,
            price: parseInt(price, 10),
            quantity: parseInt(quantity, 10),
            //photoId: photoId
        };

        try {

            create({
                variables: { 
                    categoryId,
                    reptile: newReptile,
                    animalPicture: PhotoId.photoId
                },
            });

            //alert("reptile bien ajouté =) ")

            //setDescription("")
            //setNom("")
            //setScientificName("")
            //setPrice("")
            //setQuantity("")

            // a voir pour remise par defaut du select // 

        } catch (error) {

            alert(error)

        }
    }

    return (
        <SafeAreaView>
            <View style={{ flex: 0, width: "100%", alignItems: "center", }}>

                
                <TextInput
                    editable={true}
                    placeholder='name'
                    onChangeText={nom => setNom(nom)}
                    value={nom}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                />
                <TextInput
                    editable={true}
                    placeholder='Scientific name'
                    onChangeText={scientificName => setScientificName(scientificName)}
                    value={scientificName}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                />
                <TextInput
                    placeholder='description'
                    onChangeText={description => setDescription(description)}
                    value={description}
                    editable={true}
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
                
                <UploadPictures />
                <Button
                    onPress={() => onSubmit()}
                    title="Send"
                    color="#841584"
                    />
                
                    {myImage !== undefined ? <AdvancedImage cldImg={myImage} style={{ width: 200, height: 200 }} /> : null}
            </View>

        </SafeAreaView>
    )

}
