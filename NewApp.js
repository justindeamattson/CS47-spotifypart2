import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import SongBuffer from './SongBuffer';

import Colors from "./Themes/colors"
import Images from "./Themes/images"

import { Image, Pressable, FlatList, View } from "react-native";

import Song from './Song.js';
import List from './List.js';
import App1 from './App1.js';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
/* 
const Stack = createStackNavigator();

export default function NewApp(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name = "LandingPage" component = {App1} options= {{headerShown: false}} />
            <Stack.Screen name = "Song" component = {Song} />
            <Stack.Screen name = "List" component = {List} />
            </Stack.Navigator>
        </NavigationContainer>
    );
 */
}