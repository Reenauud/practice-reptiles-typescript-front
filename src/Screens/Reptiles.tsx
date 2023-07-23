import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView  } from "react-native"
import { GET_ALL_REPTILES_BY_CATEGORY } from "../GraphQL/Queries"
import { useQuery } from "@apollo/client"
import { useSelector } from "react-redux"
import { RootState } from "../app/RootReducers"
import { useDispatch } from "react-redux"
import { AdvancedImage } from "cloudinary-react-native"
import { Cloudinary } from "@cloudinary/url-gen"
import { LinearGradient } from "expo-linear-gradient"
import { TouchableOpacity } from "react-native-gesture-handler"
import ModalReptiles from "../Components/ModalReptiles"
import { Dispatch } from "@reduxjs/toolkit"
import  {setReptileId}  from "../app/reptileIdSlice"
import { setReptileI } from "../app/ReptileSlice"


export default function Reptile() {

    const categoryName = useSelector((state: RootState) => state.categoryName)
    const reptileId = useSelector((state: RootState) => state.reptileId)
    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch()
    const [id, setId] = useState(0)

    const cld = new Cloudinary({
        cloud: {
            cloudName: "ddnauhqyh"
        }
    })


    const { loading, error, data } = useQuery(GET_ALL_REPTILES_BY_CATEGORY, { variables: { categoryName: name } });

    const rept = data?.getAnimalsByCategory.map((rep: any, key: number) => {
        const myImage = cld.image(rep.photoId)
        const id = rep.id

        return (
     
            <View style={{ flexDirection:"row", height:"14%", justifyContent:"space-between", alignItems:"center", borderRadius:30, marginTop:"15%", width:"90%"}}>
                <View style={{flex:0.7, justifyContent:"center", height:"100%", alignItems:"center"}}>
                    <Text style={{marginBottom:15}}>
                        {rep.name}
                    </Text>
                    <TouchableOpacity>
                        <ModalReptiles id={id} />
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ flex:1}}>
                        <AdvancedImage cldImg={myImage} style={{ height: 150, width: 150, borderRadius:30 }}></AdvancedImage>
                    </View>
                </View>
            </View>
        )
    })
    return (


        <View style={{ backgroundColor: "transparent", flex: 1, justifyContent: "center" }}>
            <ScrollView>
                <LinearGradient
                colors={['#006400', '#FFFFFF',]}
                style={{flex:1, alignItems:"center"}}
            >
                    {rept}
                </LinearGradient>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: 100,
        justifyContent: "space-between",
    }
})