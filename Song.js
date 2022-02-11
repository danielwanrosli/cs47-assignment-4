import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import millisToMinutesAndSeconds from "./utils/millisToMinuteSeconds.js";


export default function Song({ index, imageUrl, title, artist, album, duration }) {
  return (
    <View style={styles.container}>
        {/* <View style={styles.overallContainer}> */}
        <View style={styles.indexContainer}>
             <Text style={{color: 'white'}}> {index}   </Text>
         </View>

         <View style={styles.indexContainer}>
             <Text style={{color: 'white'}}> {title}    </Text>
         </View>

         <View style={styles.indexContainer}>
             <Text style={{color: 'white'}}> {artist}   </Text>
         </View>

         <View style={styles.indexContainer}>
             <Text style={{color: 'white'}}> {album}   </Text>
         </View>

         <View style={styles.indexContainer}>
             <Image source={{ uri: imageUrl }} style = {{ width: 50, height: 30}}/>
         </View>


         <View style={styles.indexContainer}>
             <Text style={{color: 'white'}}>{millisToMinutesAndSeconds(duration)}</Text>
         </View>

         {/* </View> */}
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'white'
    },

    sectionIndex: {
        flex: 1
    },

    imageContainer: {
        width: 50,
        height: 50
    },

    sectionTitle: {
        flex: 3
    },

    sectionAlbum: {
        flex: 3
    },

    sectionDuration: {
        flex: 1
    },




  });