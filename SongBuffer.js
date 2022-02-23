import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import ConvertToMinutes from './utils/millisToMinuteSeconds';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function SongBuffer({ songNumber, name, artistName, name2, img, length, url, url1 }) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.mainContainer}
      onPress={() => navigation.navigate("List", { url: url })}
    >
    <Pressable 
    onPress = {(e) => {
      e.stopPropagation()
      navigation.navigate("Song", { url1: url1})}
    }
    >
      <Ionicons name="play-circle" size={22} color="green" />
    </Pressable>
      <Image style={styles.forPic} source={{ uri: img }} />
      <View style={styles.titleAndName}>
        <Text style={styles.song} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {artistName}
        </Text>
      </View>
      <View style={styles.record}>
        <Text style={styles.song} numberOfLines={1}>
          {name2}
        </Text>
      </View>

      <View style={styles.lengthContainer}>
        <Text numberOfLines={1} style={styles.lengthStyle} >
          {ConvertToMinutes(length)}
        </Text>
      </View>
    </Pressable>

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 7.5,
    alignContent: 'space-between',
  },
  songNumberStyle: {
    color: "white",
    width: '10%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  forPic: {
    height: 50,
    width: 50,
  },
  titleAndName: {
    alignContent: 'center',
    justifyContent: 'center',
    width: '35%',
    margin: 2.5,

  },
  song: {
    color: "white",
  },
  artist: {
    color: "gray",
  },
  recordContainer: {
    justifyContent: 'center',
  },
  record: {
    color: "white",
    width: '30%',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 2.5,
  },
  lengthStyle: {
    color: "white",
  },
  lengthContainer: {
    justifyContent: "center",
    alignContent: 'center',
    width: '25%',
    margin: 2.5,
  },
});
