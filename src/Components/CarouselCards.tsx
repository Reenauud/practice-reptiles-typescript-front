import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from 'cloudinary-react-native'

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH)

type CarouselCardComponentProps = {
  item: any;
  index: number;
}

const CarouselCardItem = ({ item, index }: CarouselCardComponentProps) => {
const cld = new Cloudinary({
  cloud: {
      cloudName: "ddnauhqyh"
  }
})
  const myImage = cld.image(item.animalPicture)
  return (
    <View style={styles.container} key={index}>
      <AdvancedImage cldImg={myImage} style={styles.image}></AdvancedImage>
      <Text style={styles.imageTitle}>{item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    alignItems:"center",
  },
  image: {
    width: 300,
    height: 130,
    zIndex:10

  },
  imageTitle: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "darkgreen",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    bottom: 0,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem