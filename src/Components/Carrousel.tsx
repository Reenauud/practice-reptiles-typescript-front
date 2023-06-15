import React from "react";
import { height } from "@mui/system";
import { View, Text } from "react-native";

import { RNCarousel } from "react-native-carousel-cards";

export default function Carrousel() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 40 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Nos nouveautés</Text>
      </View>

      <RNCarousel
        isCustomCarouselContent={false}
        indicatorBorderColor="green"
        indicatorActiveBackgroundColor="green"
        onClick={alert("ok")}
        data={[
          {
            url: "https://www.leparisien.fr/resizer/9JnN48VaGBfb36K2nfpuC84w6TI=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/V7WINWIMIBEBBH3G5MPISDU6AI.JPG",
          },
          {
            url: "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/1/f/b/1fb2629a25_59155_serpent-mamba-vert-peterkraayvanger-pixabay-dp.jpg",
          },
          {
            url: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQfrUo2sqS3C2n3qFaBcYxM7SjzjCAKfvhwEChlzcWEM84Gipm9G7AgonxR9dnVqzUVHwb6Aht9jbJab74",
          },
          {
            url: "https://reptilesmagazine.com/wp-content/uploads/2022/01/crested-gecko-droplets-Dan-Olsen.jpg",
          },
        ]}
      />
    </View>
  );
}
