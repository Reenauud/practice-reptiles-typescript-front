import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from 'cloudinary-react-native'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

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
  const myImage = cld.image(item.imgUrl)
  return (
    <View style={styles.container} key={index}>
      <AdvancedImage cldImg={myImage} style={styles.image}></AdvancedImage>
      <Image
        source={{ uri: item.imgUrl }}
        
      />
      <Text style={styles.header}>{item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    alignItems:"center",
  },
  image: {
    width: 130,
    height: 130,
    borderRadius:80,
    zIndex:10

  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem