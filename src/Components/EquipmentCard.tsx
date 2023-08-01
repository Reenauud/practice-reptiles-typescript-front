import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Button } from '@rneui/themed';
import { EquipmentForSale } from '../types/datatypes';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from 'cloudinary-react-native';
import { useDispatch } from 'react-redux';
import { addArticle } from '../app/OrderSlice';

type EquipmentCardComponentProps = {
    equipment: EquipmentForSale;
}

export default function EquipmentCard( { equipment }: EquipmentCardComponentProps) {
    const dispatch = useDispatch();
    const cld = new Cloudinary({
        cloud: {
            cloudName: "ddnauhqyh"
        }
    })

    const imageToShow = cld.image(equipment.equipmentPicture);

    return (
        <Card containerStyle={{flex: 1, height: 300, width: "80%", marginVertical: 20, marginHorizontal: 35 }}>
            <Card.Title>{equipment.equipmentName}</Card.Title>
            <View style={{width: "100%", height: "50%"}}>
                <AdvancedImage cldImg={imageToShow} style={{ width: "100%", height: "100%" }} resizeMode='cover'></AdvancedImage>
            </View>
                
                    <Text>{equipment.equipmentDescription}</Text>
                    <Text>{equipment.equipmentDetails}</Text>  

                    <Text style={{textAlign: "right", fontWeight: "bold"}}>{equipment.equipmentPrice.toFixed(2)} €</Text>
                    <Button
                    title="Ajouter au panier"
                    onPress={() => dispatch(addArticle({picture: equipment.equipmentPicture, name: equipment.equipmentName, quantity: 1, unitPrice: equipment.equipmentPrice}))}
                    />                
        </Card>
    )
}

const styles = StyleSheet.create({
    articleCard: {
        flex: 1,
        width: "40%",
        height: 250,
        padding: 4,
        marginHorizontal: 4,
        marginVertical: 4,
        border: "1px solid black",
        borderRadius: 5,
    },

    imgForSale: {
      height: "60%",
      width: "100%",
    },
  
  });