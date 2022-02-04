import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default function Song({ index, image, title, artist, album, duration }) {
  return (
    <View style={styles.container}>
        <View>
            <Text>{index}</Text>
        </View>

        <View>
            <Text>{image}</Text>
        </View>

        <View>
            <Text>{title} + {artist}</Text>
        </View>

        <View>
            <Text>{album}</Text>
        </View>

        <View>
            <Text>{duration}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },

  });