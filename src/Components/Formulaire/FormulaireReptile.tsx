import React, { Provider, useEffect, useRef, useState } from 'react';
import { Button, TextInput, View, SafeAreaView, Platform, Image, Alert } from 'react-native';
import { Form, Formik } from 'formik';
// import { useForm } from 'react-hook-form';
import { CREATE_REPTILE } from "../../GraphQL/Mutation";
import { create } from 'react-test-renderer';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from "expo-image-picker"
import * as SecureStore from 'expo-secure-store';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "cloudinary-react-native";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/RootReducers';
import { setReptileI } from '../../app/ReptileSlice';
import { SelectList } from "react-native-dropdown-select-list"
import { GET_ALL_CATEGORIES, GET_CATEGORY_BY_NAME } from '../../GraphQL/Queries';
// import {firebase} from '../../config'
import { Constants } from 'expo-constants';






export const FormulaireReptile = () => {

    const [nom, setNom] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [selected, setSelected] = useState("")
    const [createReptile, setCreateReptile] = useState({})
    const [create, { loading, error }] = useMutation(CREATE_REPTILE)
    const [image, setImage] = useState({})
    const [uploading, setUploading] = useState(false)
    const [allCategory, setAllCategorie] = useState([])
    const allCategoryData: any[] = []
    const [categoryId, setCategoryId] = useState()
    const [photoId, setPhotoId] = useState("")
    // const {reptileI} = useSelector((state: RootState) => state.reptileI)
    // const dispatch = useDispatch()
    const [category, setCategory] = useState("")
    const imagePicker = useRef(null)

    // const cld = new Cloudinary({
    //     cloud: {
    //         cloudName: "ddnauhqyh"
    //     }
    // })


    // const myImage = cld.image("sample")

    const [previewImage, setPreviewImage] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)
    const [uploadedUrl, setUploadedUrl] = useState(null)






    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        })
        if (!result.canceled) {
            // console.log(result.assets[0].uri)
            // const source = result.assets[0].uri
            // setImage(source)

    const res = result.assets[0].uri.split("/"[0])
    const imageName = res.pop()

    console.log("result ::::::" , result.assets[0].fileName)

    console.log("result==================================", imageName)
    let newFile = {
        uri: result.assets[0].uri,
        type:`test/${result.assets[0].type}`,
        name:`test.${imageName}`
    }

    cloudinaryUpload(newFile)


    console.log("ID EN HAUT ", photoId)
    


 

        //  let base64Img = `data:image/jpg;base64,${source}`
      
        //     //Add your cloud name
        //     let apiUrl = 'https://api.cloudinary.com/v1_1/ddnauhqyh/image/upload';
        
        //     let data = {
        //       "file": base64Img,
        //       "upload_preset": "imgUpload",
        //     }

        //     console.log("dataavant", data)
      
        //     fetch(apiUrl, {
        //       body: JSON.stringify(data),
        //       headers: {
        //         'content-type': 'application/json'
        //       },
        //       method: 'POST',
        //     }).then(async r => {
        //         let data = await r.json()
        //         console.log("data", data)
        //         return data.secure_url
        //   }).catch(err=>console.log(err))
        }

        }
    



    // const uploadImage = async () => {
    //     setUploading(true)
    //     const response = await fetch(image)
    //     const blob = await response.blob()
    //     const filename = image.substring(image.lastIndexOf('/') + 1)
    //     var ref = firebase.storage().ref().child(filename).put(blob)

    //     try {

    //         await ref
            
    //     } catch (error) {
    //         console.log(error)     
    //     }
    //     setUploading(false)
    //     Alert.alert("photo upload ")
    //     setImage("")

    
    // }


    const cloudinaryUpload = async (image : any) => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'imgUpload')
        data.append('cloud_name', 'ddnauhqyh' )


            await fetch("https://api.cloudinary.com/v1_1/ddnauhqyh/upload", {
                method: 'post',
                body: data
             }).then(res => res.json())
            .then(
                data => {setImage(data), console.log("dataaaaa", image), setPhotoId(data.public_id), console.log("ID -------------", photoId)}).catch(err => {
                    console.log(err)
                    alert(err)})


                




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
            category: categoryId
        };

        create({
            variables: { reptile: newReptile },
        });

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


                 {/* <Button title='search image' onPress={imagePicker.current} /> */}
                <Button title='upload' onPress={pickImage} /> 
          

           

                {/* {image && <Image source={{ uri:image}} style={{width:200, height:200}}></Image>} */}
                {/* <AdvancedImage cldImg={myImage} style={{ width: 300, height: 300 }} /> */}
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
