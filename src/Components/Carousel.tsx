import React from 'react'
import { View } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCards'
import {data} from './DataCarousel'

const CarouselCards = () => {
  const isCarousel = React.useRef(null)

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        // inactiveSlideShift={1000}
        // useScrollView={true}
        autoplay={true}
      />
    </View>
  )
}


export default CarouselCards