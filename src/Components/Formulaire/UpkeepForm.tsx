import React, { useState } from 'react';
import { Button, TextInput, View, SafeAreaView } from 'react-native';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_UPKEEP } from '../../GraphQL/Mutation';
import { AnimalsIds } from '../../types/datatypes';
import { SelectList } from 'react-native-dropdown-select-list';

type UpkeepFormComponentProps = {
    animalsIds: AnimalsIds
}

export const UpkeepForm = ({ animalsIds }: UpkeepFormComponentProps) => {

    const [difficulty, onChangeDifficulty] = useState<string>("");
    const [location, onChangeLocation] = useState<string>("");
    const [eatingPlan, onChangeEatingPlan] = useState<string>("");
    const [dayCycle, onChangeDayCycle] = useState<string>("");
    const [humidity, onChangeHumidity] = useState<string>("");
    const [mores, onChangeMores] = useState<string>("");
    const [dayTemperature, onChangeDayTemperature] = useState<string>("");
    const [nightTemperature, onChangeNightTemperature] = useState<string>("");
    const [upkeepInformations, onChangeUpkeepInformations] = useState<string>("");


    
    const [create, { loading, error }] = useMutation(CREATE_UPKEEP);


    const onSubmit = () => {
        const newUpkeep = {
            difficulty,
            location,
            eatingPlan,
            dayCycle,
            humidity,
            mores,
            dayTemperature,
            nightTemperature,
            upkeepInformations,
        };

        create({
            variables: {
                upkeep: newUpkeep,    
            }
        })

    }

    return (
        <SafeAreaView>
            <View style={{ flex: 0, width: "100%", alignItems: "center", }}>
                <TextInput
                    placeholder="Difficulté d'entretien"
                    onChangeText={onChangeDifficulty}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={difficulty}
                />
                <TextInput
                    placeholder='Origine'
                    onChangeText={onChangeLocation}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={location}
                />
                <TextInput
                    placeholder='Régime alimentaire'
                    onChangeText={onChangeEatingPlan}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={eatingPlan}
                />
                <TextInput
                    placeholder='Cycle de jour'
                    onChangeText={onChangeDayCycle}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={dayCycle}
                />
                <TextInput
                    placeholder='Hygrométrie'
                    onChangeText={onChangeHumidity}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={humidity}
                />
                <TextInput
                    placeholder='Moeurs'
                    onChangeText={onChangeMores}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={mores}
                />
                <TextInput
                    placeholder='Température journée'
                    onChangeText={onChangeDayTemperature}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={dayTemperature}
                />
                <TextInput
                    placeholder='Température nuit'
                    onChangeText={onChangeNightTemperature}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={nightTemperature}
                />
                <TextInput
                    placeholder='Informations entretien'
                    multiline
                    numberOfLines={20}
                    maxLength={500}
                    onChangeText={onChangeUpkeepInformations}
                    editable={true}
                    style={{ backgroundColor: "lightgrey", width: "50%", alignItems: "center", borderWidth: 1, marginBottom: 9 }}
                    value={upkeepInformations}
                />
                <Button
                    onPress={() => onSubmit()}
                    title="Envoyer"
                    color="#841584"
                />
                <SelectList
                    setSelected={(value: string) => categorySelected(value)}
                    data={animalsIds}
                    save="value"
                    boxStyles={{ backgroundColor: "lightGreen" }}
                />
            </View>
        </SafeAreaView>

    )

}
