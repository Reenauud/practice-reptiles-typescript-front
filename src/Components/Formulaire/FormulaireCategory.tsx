import React, { Provider, useEffect, useState } from 'react';
import { Button, TextInput, View, SafeAreaView } from 'react-native';
import { Form, Formik } from 'formik';
// import { useForm } from 'react-hook-form';
import { CREATE_FAMILY } from "../../GraphQL/Mutation";
import { create } from 'react-test-renderer';
import { useMutation } from '@apollo/react-hooks';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as SecureStore from 'expo-secure-store';

export const FormulaireCategory = () => {

    const [newFamily, setNewFamily] = useState("")



    const [create, { loading, error }] = useMutation(CREATE_FAMILY)


    const onSubmit = () => {
        const newCategory =  {
            type: newFamily,
         };
 
        create({
            variables: {family: newCategory}
        })

    }

    return (



        <SafeAreaView>
            <View style={{ flex: 0, width: "100%", alignItems: "center", }}>

                <TextInput
                    placeholder='family'
                    onChangeText={newFamily => setNewFamily(newFamily)}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={newFamily}


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
