import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import SongBuffer from './SongBuffer';

import Colors from "./Themes/colors"
import Images from "./Themes/images"

import { Image, Pressable, FlatList, View } from "react-native";



const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token"
};

export default function App({navigation}) {

  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      scopes: SCOPES,
      usePKCE: false,
      redirectUri: REDIRECT_URI
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      setToken(access_token);
    }
  }, [response]);

  useEffect(() => {
    if (token) {
      albumTracks(ALBUM_ID, setTracks, token);
    }
  }, [token]);


  if (token) {
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoHolder}>
        <Image style={styles.icon1} source={(Images.spotify)} />
        <Text style={styles.titleText}>
          Album Track
        </Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={tracks}
          renderItem={({ item, index }) =>
            <SongBuffer
              length={item.duration_ms}
              name={item.name}
              name2={item.album.name}
              artistName={item.artists[0].name}
              img={item.album.images[0].url}
              songNumber={index + 1}
              url = {item.external_urls.spotify}
              url1 = {item.preview_url}
            />}
          keyExtractor={(item, index) => index.toString()} />
      </View>
    </SafeAreaView>)
  }
  else {
    return (
      <SafeAreaView style={styles.container}>
        <Pressable style={styles.mainButton}
          onPress={() =>
            promptAsync()
          }>
          <View style={styles.container3}>
            <Image style={styles.icon2} source={(Images.spotify)} />
            <Text style={styles.text1}>
              CONNECT WITH SPOTIFY
            </Text>
          </View>
        </Pressable>
      </SafeAreaView>)
  }
}

const styles = StyleSheet.create({
  mainButton: {
    flexDirection: "row",
    backgroundColor: Colors.spotify,
    borderRadius: 100,
    padding: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  list: {
    flex: 20,
    flexDirection: 'row',

  },
  logoHolder: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',

  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  icon2: {
    height: 20,
    width: 20,

  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon1: {
    height: 30,
    width: 30,
  },
});





