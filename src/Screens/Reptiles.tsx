import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { GET_ALL_REPTILES_BY_CATEGORY } from "../GraphQL/Queries"
import { useQuery, useMutation } from "@apollo/client"
import { useSelector } from "react-redux"
import { RootState } from "../app/RootReducers"
import { useDispatch } from "react-redux"
import { AdvancedImage } from "cloudinary-react-native"
import { Cloudinary } from "@cloudinary/url-gen"
import { Button } from "@rneui/themed"
import { LinearGradient } from "expo-linear-gradient"
import { TouchableOpacity } from "react-native-gesture-handler"

export default function Reptile() {

    const categoryName = useSelector((state: RootState) => state.categoryName)

    const cld = new Cloudinary({
        cloud: {
            cloudName: "ddnauhqyh"
        }
    })

    let name = categoryName.categoryName

    const { loading, error, data } = useQuery(GET_ALL_REPTILES_BY_CATEGORY, { variables: { categoryName: name } });

    const rept = data?.getAnimalsByCategory.map((rep: any) => {
        const myImage = cld.image(rep.photoId)

        const onPressReptileInfo = () => {
            return (

                alert("ici fiche reptiles")


            )
        }



        return (
            <LinearGradient
            colors={['#006400', '#FFFFFF',]}
            style={styles.background}
          >
            <View style={{backgroundColor:"grey", flexDirection:"row", height:"25%", justifyContent:"center", alignItems:"center", borderRadius:30, marginTop:"15%"}}>
                    
                <View style={{flex:0.5, justifyContent:"center"}}>
                    <Text>
                        nom : {rep.name}
                    </Text>
                    <Text>
                        description : {rep.description}
                    </Text>
                </View>
                <View>

                    <View style={{justifyContent:"center", flex:1}}>
                        <AdvancedImage cldImg={myImage} style={{ height: 150, width: 150, borderRadius:30 }}></AdvancedImage>
                    </View>
                    <TouchableOpacity style={{ width:"50%"}}>
                    <Button>
                        +
                    </Button>

                    </TouchableOpacity>
               
                 
                </View>

            </View>
            </LinearGradient>

        )

    }
    )
    return (

        <View style={{ backgroundColor: "transparent", flex: 1, justifyContent: "center" }}>
            {rept}
        </View>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        // backgroundColor: "lightgreen",
        height: 100,
        justifyContent: "space-between",

    }
})