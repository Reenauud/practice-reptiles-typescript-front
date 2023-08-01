import React, { useState } from "react";
import { Button } from "@rneui/themed";
import { ScrollView, StyleSheet } from "react-native";
import { FormulaireReptile } from "../Components/Formulaire/FormulaireReptile";
import { FormulaireCategory } from "../Components/Formulaire/FormulaireCategory";
import { FormulaireFood } from "../Components/Formulaire/FormulaireFood";
import { EquipmentsForm } from "../Components/Formulaire/EquipmentsForm";
import { UpkeepForm } from "../Components/Formulaire/UpkeepForm";
import { GET_ALL_ANIMALS_IDS } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import { AnimalsIds } from "../types/datatypes";

export default function Admin() {
    const [formToShow, setFormToShow] = useState<number>(0);
    const [animalsIds, setAnimalsIds] = useState<AnimalsIds[]>([]);
    const { loading, error } = useQuery(GET_ALL_ANIMALS_IDS, {
        onCompleted: (data) => {
            setAnimalsIds(data?.getAllReptiles);
        }
    })

    return (
        <ScrollView style={styles.container}>
            <Button onPress={() => { setFormToShow(1)}}>
                Ajouter un reptile
            </Button >
            {formToShow === 1 ? <FormulaireReptile/> : null}
            <Button onPress={()=> { setFormToShow(2) }}>
                Ajouter une catégorie de reptile
            </Button>
            {formToShow === 2 ? <FormulaireCategory/> : null}
            <Button onPress={()=> { setFormToShow(3) }}>
                Ajouter de la nourriture
            </Button>
            {formToShow === 3 ? <FormulaireFood/> : null}
            <Button onPress={()=> { setFormToShow(4) }}>
                Ajouter du matériel
            </Button>
            {formToShow === 4 ? <EquipmentsForm /> : null}
            <Button onPress={()=> { setFormToShow(5) }}>
                Ajouter une fiche d'entretien
            </Button>
            {formToShow === 5 ? <UpkeepForm animalsIds={animalsIds} /> : null}
        </ScrollView>
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
        marginTop: 50,
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

});

