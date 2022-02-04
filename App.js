import { StyleSheet, Text, SafeAreaView, Image, Pressable, View} from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import Colors from "./Themes/colors"
import { getCurrentTimeInSeconds } from "expo-auth-session/build/TokenRequest";
import Song from './Song';
import SpotifyAuthButton from "./SpotifyAuthButton";


// Endpoints for authorizing with Spotify
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token"
};

export default function App() {
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      scopes: SCOPES,
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: REDIRECT_URI
    },
    discovery
  );

  console.log(tracks);

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      setToken(access_token);
    }
  }, [response]);

  useEffect(() => {
    if (token) {
      // TODO: Select which option you want: Top Tracks or Album Tracks

      // Comment out the one you are not using
      // myTopTracks(setTracks, token);
      albumTracks(ALBUM_ID, setTracks, token);
    }
  }, [token]);

  const renderSong = (Song) => (
    <Song 
      index={Song.index}
      image={Song.image} // index tracks into these?
      title={item.title}
      artist={item.artist}
      album={item.album}
      duration={item.duration} />
  );

function SpotifyAuthButton({ index, image, title, artist, album, duration }) {
    return (
      <SafeAreaView style={styles.container}>
        
        <View style={styles.spotifyButtonContainer}>
          <View>
            <Image style={styles.spotifyLogo} source={require('./assets/spotify-logo.png') } /> 
          </View>
  
          <View>
            <Pressable onPress={promptAsync}>
              <Text style={styles.buttonText}> CONNECT WITH SPOTIFY </Text>
            </Pressable>
          </View>
  
        </View>
      </SafeAreaView>
    );
  }

  // let contentDisplayed = null;

  // if (token) {
  //   contentDisplayed = <FlatList/>
  // } else {
  //   contentDisplayed = <SpotifyAuthButton/>
  // }

  return (
    <SpotifyAuthButton/>
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
