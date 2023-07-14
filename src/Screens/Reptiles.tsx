import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useQuery } from "@apollo/client"
import {GET_ALL_CATEGORIES} from "../GraphQL/Queries"
import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedImage } from "cloudinary-react-native"


export default function Reptiles() {

    const {loading, data, error} = useQuery(GET_ALL_CATEGORIES)
    
 
    if(loading){
        console.log('loading')
    }
    if(error){
        console.log("ERROR", error)
    }

    const cld = new Cloudinary({
        cloud: {
            cloudName: "ddnauhqyh"
        }
    })

    // const reptilesInfo = () => {

    //     if(data){

    //         data.getAllCategory.map((a: any)=> {
    //             return(
    //                     <Text>{a.categoryName}</Text>

    //             )
    //         })
    
    //     }

    // }

    const rept = data?.getAllCategory.map((a: any) => {
        const myImage = cld.image(a.categoryImage)

        return(

 
                <View>
                              <Text>{a.categoryName}</Text>
                <AdvancedImage cldImg={myImage} style={{width:100, height:100}}></AdvancedImage>
                
                </View>
      


        )



})

    return (
        <View style={styles.container} >
        <LinearGradient
            colors={['#006400', '#FFFFFF',]}
            style={styles.container}

        >

        {rept}

                  
        </LinearGradient>
        </View>


        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgreen",
        justifyContent: "center",
        alignContent: "center",
        height: "100%"
    },

})