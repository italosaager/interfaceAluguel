import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default function House(props) {
 return (
   <View style={styles.container}>
    <View>
        <Image source={props.cover} style={styles.cover}/>
    </View>

    <View style={styles.content}>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.price}>{props.price}</Text>
    </View>

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: 260,
        height: 70,
        backgroundColor: '#fff',
        elevation: 5,
        padding: 6,
        marginRight: 20,
        marginLeft: 2,
        borderRadius: 44 / 2,
    },
    cover:{
        borderRadius: 44 / 2,
        width: 60,
        height: 60,
    },
    content:{
        width: '65%',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        height: '100%',
    },
    description:{
        fontSize: 10,
    },
    price:{
        fontSize: 14,
        fontWeight: 'bold',
    }
})