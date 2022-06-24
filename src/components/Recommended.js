import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function Recommended(props) {
 return (
   <ImageBackground source={(props.cover)} style={styles.container} borderRadius={44 / 2} blurRadius={2}>
    <Text style={[styles.house, styles.shadow]}>{props.house}</Text>
    <Text style={[styles.offer, styles.shadow]}>{props.offer}</Text>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container:{
        height: 130,
        width: 230,
        marginRight: 20,
        borderRadius: 44 / 2,
        marginBottom: 40,
        opacity: 0.8,
        backgroundColor: '#000',
        marginLeft: 3,
        padding: 12,
        marginTop: 20,
    },
    house:{
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 15,
    },
    offer:{
        fontSize: 15,
        color: 'red',
        fontWeight: 'bold',
        marginEnd: 20,
    },
    shadow:{
        textShadowOffset: {width: 1, height: 2},
        textShadowRadius: 3,
        textShadowColor: '#000',
    }
})