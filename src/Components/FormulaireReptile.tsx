import React, { Provider, useEffect, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { Form, Formik } from 'formik';
// import { useForm } from 'react-hook-form';

import { useMutation } from "@apollo/client";
import { CREATE_REPTILE } from "../GraphQL/Mutation";
import { qualifiedTypeIdentifier } from '@babel/types';


// // const { register, handleSubmit, watch, formState: { errors } } = useForm();

// // const onSubmit = (data: any) => console.log(data)

// const[description, setDescription] = useState("");
let description = "aaaaaaaaa"





// const [createReptile, { data, loading, error: any}] = useMutation(CREATE_REPTILE)
// if(loading) return ("submitting")
// if(Error) return `Sudmission error! ${Error}`

export const FormulaireReptile = () => {

    const [nom, setNom] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [price, setPrice] = useState<number | string>('')
    const [quantity, setQuantity] = useState<number | string>('')

    const [createReptile, setCreateReptile] = useState({})

    const [create,{error, data, loading}] = useMutation(CREATE_REPTILE, {


        variables: { reptile: { description : description , name: nom, price: price, quantity: quantity}},
        onCompleted: (data) => {
            console.log(data),
            console.log("ca passe ici ? ligne 38")
        }

    });
    console.log("histoir d'etre sur ", description, nom , price , quantity)
    if(loading) return console.log(data)
    if(data) return console.log(data)
    if(error) return console.log(error)




    return (
        <>
            <Formik
                initialValues={{ description: "" , family:'', name: '', price: '', quantity: '' }}
                onSubmit={(values)=> {setDescription(values.description), setNom(values.name), setPrice(values.price), setQuantity(values.quantity), create()
                     console.log('ca passe ici ligne 51 ? ')
                }}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <View style={{ flex: 0, width: "100%", alignItems: "center", }}>

                        <TextInput
                        onChangeText={handleChange('description')}
                            
                            value={values.description}

                            placeholder='description'
                            style={{ backgroundColor: "lightgrey", marginTop: 10, width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                        />
                        <TextInput
                            placeholder='family'
                            onChangeText={handleChange('family')}
                            style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                            value={values.family}


                        />
                        <TextInput
                            placeholder='name'
                            onChangeText={handleChange('name')}
                            style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                            value={values.name}

                        />
                        <TextInput
                            placeholder='price'
                            onChangeText={handleChange('price')}
                            keyboardType='numeric'
                            style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                            value={values.price}
                            

                        />
                        <TextInput
                            placeholder='quantity'
                            onChangeText={handleChange('quantity')}
                            style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                            value={values.quantity}
                            keyboardType='numeric'


                        />

                        <Button onPress={()=> handleSubmit()} title="Submit" />
                    </View>
                )}
            </Formik>

        </>
    )

}
