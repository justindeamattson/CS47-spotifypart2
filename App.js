import Colors from "./Themes/colors"

import Song from './Song.js';
import List from './List.js';
import App1 from './App1.js';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function NewApp(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name = "LandingPage" component = {App1} options= {{headerShown: false}} />
            <Stack.Screen name = "List" component = {List} />
            <Stack.Screen name = "Song" component = {Song} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}