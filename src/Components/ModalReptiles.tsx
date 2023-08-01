import { Modal, View, Text, StyleSheet, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Image } from "@rneui/themed";
import { useSelector } from "react-redux";
import { RootState } from "../app/RootReducers";
import { useQuery } from "@apollo/client";
import { GET_ONE_REPTILES_BY_ID } from "../GraphQL/Queries";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "cloudinary-react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 




export default function ModalReptiles(id: any) {

  // const reptileId = useSelector((state: RootState) => state.reptileId)
  const idReptile = id.id
  console.log(idReptile)
  const {data} = useQuery(GET_ONE_REPTILES_BY_ID, {variables: {getOneReptileId : idReptile} })

  console.log(data?.getOneReptile.description)

  const cld = new Cloudinary({
    cloud: {
        cloudName: "ddnauhqyh"
    }
})

const myImage = cld.image(data?.getOneReptile.photoId)


  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>x</Text>
            </Pressable>
            <View style={styles.header}>
              <Text style={{fontWeight:"bold", fontSize:25}}>{data?.getOneReptile.name}</Text>

              <View style={{ height:200, width:200, marginLeft:"15%", marginTop:"5%", }}>
              {/* <Image source={user} ></Image> */}
              <AdvancedImage cldImg={myImage} style={{width:200, height:200, resizeMode:"cover" , borderRadius:100}}></AdvancedImage>

              </View>


            </View>
            <View style={{ flex:0.57, flexDirection:"row"}}>
            <View style={{ width:"50%" , flex:0.9, alignItems:"center"}}>
                   <Text style={{fontWeight:"bold", fontSize:15}}>OBSERVATIONS</Text>
                   <View style={{ marginTop:"5%", width:"97%", height:"90%", alignItems:"center", justifyContent:"space-between"}}>
                    <Text style={{textAlign:"justify"}}>{data?.getOneReptile.description}</Text>
                    <Button>ajouté au panier</Button>

                   </View>
                   </View>
                   <View style={{ width:"50%", flex:0.6, alignItems:"center"}}>
                    <View style={{backgroundColor:"orange", width:"100%", flex:0.35, alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", fontSize:15}}>MOEURS</Text>
                    </View>
                    <View style={{ width:"100%", flex:0.35, alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", fontSize:15}}>TEMPÉRATURE</Text>
                    <View style={{backgroundColor:"green", height:"80%", width:"100%" }}>
                      <View style={{ flexDirection:"row", justifyContent:"space-between", flex:0.5, alignItems:"center"}}>
                        <Feather name="sun" size={24} color="black" />
                        <Text>35-34C°</Text>

                        <Ionicons name="water-sharp" size={24} color="black" />
                        <Text>10-20</Text>
                      </View>
                      <View style={{ flexDirection:"row", justifyContent:"space-between", flex:0.5, alignItems:"center"}}>
                      <Ionicons name="moon" size={24} color="black" />
                      <Text>35-34C°</Text>

                               <Ionicons name="water-sharp" size={24} color="black" />
                        <Text>10-15</Text>
                      </View>

                    </View>
                    </View>

                    <Text style={{fontWeight:"bold", fontSize:15}}>ALIMENTATION</Text>

                   </View>
                   </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {setModalVisible(true)}}>
        <Text style={styles.textStyle}>Plus d'informations</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    //   flex: 1,
    justifyContent: 'center',
    //   alignItems: 'center',
    //   marginTop: ,
    width: "100%",
    backgroundColor:"transparent"
  },
  modalView: {
    margin: 20,
    backgroundColor: 'green',
    borderRadius: 20,
    // padding: 35,
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "97%",
    width:"90%"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  header: {
    backgroundColor: "green", flex: 0.4, height: "50%", width: "100%",

  },
  buttonOpen: {
    backgroundColor: 'green',
    borderRadius:8
  },
  buttonClose: {
    backgroundColor: 'red',
    width:"10%"
    
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});