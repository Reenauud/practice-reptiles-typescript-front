import React, { useEffect } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useQuery } from "@apollo/client"
import { GET_ALL_CATEGORIES } from "../GraphQL/Queries"
import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedImage } from "cloudinary-react-native"
import { TouchableHighlight } from "react-native-gesture-handler"
import { useSelector } from "react-redux"
import { RootState } from "../app/RootReducers"
import { useDispatch } from "react-redux"
import { setCategoryId } from "../app/CategorySlice"
import { setCategoryName } from "../app/CategoryNameSlice"


export default function Categories({navigation}: any) {

    const categoryId = useSelector((state: RootState) => state.categoryId)
    const categoryName = useSelector((state: RootState) => state.categoryName)

    const dispatch = useDispatch()
    const { loading, data, error } = useQuery(GET_ALL_CATEGORIES)


    if (loading) {
        console.log('loading')
    }
    if (error) {
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

    const OnImagePress = (id: number, categoryName: string) => {

        dispatch(setCategoryName(categoryName))


        return (
            // alert(id),
     
        navigation.navigate("Reptiles"),
                

            dispatch(setCategoryId(id),

        ))         
        
    }


    const rept = data?.getAllCategories.map((a: any) => {
        const myImage = cld.image(a.categoryImage)

        return (

            <View style={{ alignItems: "center", flex: 0.5 }}>
                <View>
                    <TouchableOpacity onPress={() => {
                        OnImagePress(a.id, a.categoryName)
                    }}>

                        <AdvancedImage cldImg={myImage} style={{ width: 100, height: 100 }} ></AdvancedImage>
                        <Text>{a.categoryName}</Text>


                    </TouchableOpacity>
                </View>

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
        height: "100%",
    },

})