import React, { useState } from 'react';
import { Button, TextInput, View, SafeAreaView } from 'react-native';
import { useMutation } from '@apollo/react-hooks';
import UploadPictures from '../UploadPictures';
import { useSelector } from 'react-redux';
import { RootState } from "../../app/RootReducers";
import { CREATE_EQUIPMENT } from '../../GraphQL/Mutation';
import { AdvancedImage } from 'cloudinary-react-native';
import { Cloudinary } from '@cloudinary/url-gen';


export const EquipmentsForm = () => {

    // récuperation de l'id de l'image depuis le composant UploadPicture 
    const PhotoId = useSelector((state: RootState) => state.photoId)
    
    // recupération de l'image sur cloudinary avec son id 
    const cld = new Cloudinary({
        cloud: {
            cloudName: "ddnauhqyh"
        }
    })

    const myImage = cld.image(PhotoId.photoId)
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [details, setDetails] = useState<string>("");
    const [price, setPrice] = useState<string>("");


    
    const [create, { loading, error }] = useMutation(CREATE_EQUIPMENT);


    const onSubmit = () => {
        const newEquipment = {
            equipmentName: name,
            equipmentDescription: description,
            equipmentDetails: details,
            equipmentPrice: parseInt(price, 10),
            
        };

        create({
            variables: {
                equipment: newEquipment,
                equipmentPicture: PhotoId.photoId,
            }
        })

    }

    return (
        <SafeAreaView>
            <View style={{ flex: 0, width: "100%", alignItems: "center", }}>
                <TextInput
                    placeholder='Nom du matériel'
                    onChangeText={name => setName(name)}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={name}
                />
                <TextInput
                    placeholder='Description'
                    onChangeText={description => setDescription(description)}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={description}
                />
                <TextInput
                    placeholder='Détails'
                    onChangeText={details => setDetails(details)}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={details}
                />
                <TextInput
                    placeholder='Prix'
                    onChangeText={price => setPrice(price)}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={price}
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
