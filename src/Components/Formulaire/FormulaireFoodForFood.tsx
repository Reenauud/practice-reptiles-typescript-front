import React, { Provider, useEffect, useState } from 'react';
import { Button, TextInput, View, SafeAreaView } from 'react-native';
import { CREATE_REPTILE } from "../../GraphQL/Mutation";
import { useMutation } from '@apollo/react-hooks';

export const FormulaireReptile = () => {

    const [nom, setNom] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [create, { loading, error }] = useMutation(CREATE_REPTILE)


    const onSubmit = () => {
        const newReptile =  {
            description: description,
            name: nom,
            price: parseInt(price, 10),
            quantity: parseInt(quantity, 10)
         };
        create({
            variables: {reptile: newReptile},
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
                <Button
                    onPress={() => onSubmit()}
                    title="Envoyer"
                    color="#841584"
                />
            </View>
        </SafeAreaView>
    )
}
