import React from 'react';
import { View, Text } from 'react-native';
import { AnimalForSale } from '../types/datatypes';
import { AdvancedImage } from 'cloudinary-react-native';
import { Card, Button } from '@rneui/themed';
import { Cloudinary } from '@cloudinary/url-gen';
import { useDispatch } from 'react-redux';
import { addArticle } from '../app/OrderSlice';

type AnimalCardComponentProps = {
    animal: AnimalForSale;
}

export function AnimalCard ({ animal }: AnimalCardComponentProps) {
    const dispatch = useDispatch();
    const cld = new Cloudinary({
        cloud: {
            cloudName: "ddnauhqyh"
        }
    })

    const imageToShow = cld.image(animal.animalPicture);

    return (
        <Card containerStyle={{flex: 1, height: 300, width: "80%", marginVertical: 20, marginHorizontal: 35 }}>
            <Card.Title>{animal.name}</Card.Title>
            <View style={{width: "100%", height: "50%"}}>
                <AdvancedImage cldImg={imageToShow} style={{ width: "100%", height: "100%" }} resizeMode='cover'></AdvancedImage>
            </View>
                
                    <Text>{animal.description}</Text>

                    <Text style={{textAlign: "right", fontWeight: "bold"}}>{animal.price.toFixed(2)} €</Text>
                    <Button
                    title="Ajouter au panier"
                    onPress={() => dispatch(addArticle({picture: animal.animalPicture, name: animal.name, quantity: 1, unitPrice: animal.price}))}
                    />                
        </Card>
    )
}