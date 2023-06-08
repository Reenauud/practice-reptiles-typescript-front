
import { Button } from "@rneui/themed"
// import React from "react"
import { View, Text, StyleSheet } from "react-native"
// import { SafeAreaView } from "react-native-safe-area-context"
// import Connexion from "./Connexion"
// import Home from "./Home"
import { useState } from "react"
// import { TouchableOpacity } from "react-native-gesture-handler"
// import Formik from 'formik';
// import { Form, FormProvider, useForm } from "react-hook-form"
// import { Input } from "@mui/material"
import { FormulaireReptile } from "../Components/FormulaireReptile"
import React from "react"
// import { useMutation } from "@apollo/client"
// import { CREATE_REPTILE } from "../GraphQL/Mutation"





export default function Admin() {


    const [visible, setVisible] = useState(false)

    const isVisible = () => {
        setVisible(!visible)
    }



    // ici requette graphql

    return (

        <View style={styles.container}>
            <Button onPress={() => { isVisible() }}>
                ajouté un reptile
            </Button>
            {visible ?<FormulaireReptile />: null}
            <Button>
                ajouté une catégorie de reptile
            </Button>
            <Button>
                ajouté de la nourriture pour reptile
            </Button>
            <Button>
                ajouté de la nourriture pour proie
            </Button>


        </View>

    )


}


const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: "lightgreen",
        justifyContent: "space-between",
        height: 10


    },

    container: {
        flex: 1,
        marginTop: 50
        // width: "100%",
    },

    ajoutReptileView: {
        backgroundColor: "red"

    },
    form: {
        width: 10,
        height: 10
    },

    view: {
        flex: 1,
        height: 100,
        width: 100
    },

    hide: {



    }



});

