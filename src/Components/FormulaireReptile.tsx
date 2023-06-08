import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { Form, Formik } from 'formik';
// import { useForm } from 'react-hook-form';

import { useMutation } from "@apollo/client";
import { CREATE_REPTILE } from "../GraphQL/Mutation";


// // const { register, handleSubmit, watch, formState: { errors } } = useForm();

// // const onSubmit = (data: any) => console.log(data)

// const[description, setDescription] = useState("");
let description = "aaaaaaaaa"



// const [createReptile, { data, loading, error: any}] = useMutation(CREATE_REPTILE)
// if(loading) return ("submitting")
// if(Error) return `Sudmission error! ${Error}`

export const FormulaireReptile = () => {

    const [nom, setNom] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")

    const [createReptile, setCreateReptile] = useState({})

    const { loading, data } : any = useMutation(CREATE_REPTILE, {


        variables: { reptile: { description , nom, price, quantity} }

    });
    if(loading) return console.log("loading")
    if(data) return console.log(data)

    return (
        <>
            <Formik
                initialValues={{ description , family:'', name: '', price: "", quantity: "" }}
                onSubmit={(values)=> {setCreateReptile(values), console.log(createReptile)
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={{ flex: 0, width: "100%", alignItems: "center", }}>

                        <TextInput
                        onChangeText={handleChange('description')}
                            onBlur={handleBlur('description')}
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
                            style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                            value={values.price}

                        />
                        <TextInput
                            placeholder='quantity'
                            onChangeText={handleChange('quantity')}
                            style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                            value={values.quantity}

                        />

                        <Button onPress={()=> handleSubmit()} title="Submit" />
                    </View>
                )}
            </Formik>

        </>
    )

}
