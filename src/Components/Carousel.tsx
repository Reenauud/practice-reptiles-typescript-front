import React from 'react'
import { View } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCards'
import { useQuery } from '@apollo/client'
import { GET_ALL_REPTILES } from '../GraphQL/Queries'

const CarouselCards = () => {
  const isCarousel = React.useRef(null)

  const {data} = useQuery(GET_ALL_REPTILES)

  const dataaa : any = []

     const ArrayOfData = data?.getAllReptiles

     const allData = ArrayOfData?.forEach((e : any) => {
      const title = e.name
      const picture = e.photoId
      dataaa.push({title: title, imgUrl: picture})
      
     });



  return (
    <View>
      <Carousel
        layout="default"
        vertical={false}
        layoutCardOffset={9}
        ref={isCarousel}
        data={dataaa}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        autoplay={true}
      />
    </View>
  )
}

export default CarouselCards;