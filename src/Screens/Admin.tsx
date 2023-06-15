
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
import { FormulaireReptile } from "../Components/Formulaire/FormulaireReptile"
import React from "react"
// import { useMutation } from "@apollo/client"
// import { CREATE_REPTILE } from "../GraphQL/Mutation"
import CardReptiles from "../Components/CardReptiles"
import { FormulaireCategory } from "../Components/Formulaire/FormulaireCategory"
import { FormulaireFood } from "../Components/Formulaire/FormulaireFood"





export default function Admin() {


    const [formReptile, setFormReptile] = useState(false)
    const [formCategory, setFormCategory] = useState(false)
    const [formFood, setFormFood] = useState(false)

    const formReptileIsVisible = () => {
        setFormReptile(!formReptile)

    }

    const formCategoryIsVisible = () => {
        setFormCategory(!formCategory)

    }

    const formFoodIsVisible = () => {
        setFormFood(!formFood)

    }



    // ici requette graphql

    return (

        <View style={styles.container}>
            <Button onPress={() => { formReptileIsVisible() }}>
                ajouté un reptile
            </Button >
            {formReptile ?<FormulaireReptile />: null}
            <Button onPress={()=> {formCategoryIsVisible()}}>
                ajouté une catégorie de reptile
            </Button>
            {formCategory ? <FormulaireCategory/> : null}
            <Button onPress={()=> {formFoodIsVisible()}}>
                ajouté de la nourriture pour reptile
            </Button>
            {formFood ? <FormulaireFood/> : null}

            <Button >
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

