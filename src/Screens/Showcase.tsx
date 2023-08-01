import React from 'react';
import { StyleSheet, ScrollView, View, Text, Pressable, Image } from 'react-native';
import { ShowcaseNavigationProp } from '../Router/types';

export function Showcase ({ navigation }: ShowcaseNavigationProp) {
    return (
        <View style={{flex: 1}}>
            <Text style={{fontSize: 18, fontStyle: "italic", marginVertical: 20, marginHorizontal: 20}}>Parcourir nos articles</Text>
            <ScrollView horizontal={true} style={styles.showcaseContainer }>
                <View style={styles.articleContainer}>
                    <Pressable style={styles.showcaseImgBtn} onPress={() => navigation.navigate("Reptiles")}>
                    <Image
                        resizeMode="cover"
                        style={styles.showcaseImg}
                        source={require('./img/iguan.jpg')}
                    />
                    </Pressable>
                    <Text style={styles.articleTxt}>ANIMAUX</Text>
                </View>
                <View style={styles.articleContainer}>
                    <Pressable style={styles.showcaseImgBtn} onPress={() => navigation.navigate("Food")}>
                    <Image
                        resizeMode="cover"
                        style={styles.showcaseImg}
                        source={require('./img/rongeurs-congelés.png')}
                    />
                    </Pressable>
                    <Text style={styles.articleTxt}>NOURRITURE</Text>
                </View>
                <View style={styles.articleContainer}>
                    <Pressable style={styles.showcaseImgBtn} onPress={() => navigation.navigate("Equipments")}>
                    <Image
                        resizeMode="cover"
                        style={styles.showcaseImg}
                        source={require('./img/terra.jpg')}
                    />
                    </Pressable>
                    <Text style={styles.articleTxt}>MATERIEL</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    showcaseContainer: {
        flex: 1,
        height: 400,
    },

    articleContainer: {
        height: 300,
        width: 300,
        borderRadius: 10,
        marginHorizontal: 20,
    },

    showcaseImgBtn: {
        
    },

    showcaseImg: {
        height: "100%",
        width: "100%",
    },

    articleTxt: {
        fontSize: 20,
        textAlign: "center",
    }
});