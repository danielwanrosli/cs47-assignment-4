import { StyleSheet, Text, SafeAreaView, Image, Pressable, View} from "react-native";
import Colors from "./Themes/colors"


export default function SpotifyAuthButton({ index, image, title, artist, album, duration }) {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.spotifyButtonContainer}>
        <View>
          <Image style={styles.spotifyLogo} source={require('./assets/spotify-logo.png') } /> 
        </View>

        <View>
          <Pressable>
            <Text style={styles.buttonText}> CONNECT WITH SPOTIFY </Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    
    spotifyButtonContainer: {
      backgroundColor: 'rgb(29, 185, 84)',
      borderRadius: 99999,
      flexDirection: 'row',
      padding: 10
    },
  
    spotifyLogo: {
      flex: 1,
      width: 20,
      height: 20,
      resizeMode: 'contain',
      marginLeft: 3,
      marginRight: 2
  
    },
  
    buttonText: {
      fontSize: 15,
      color: '#fff',
      fontWeight: 'bold'
    }
  
  });