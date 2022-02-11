import { StyleSheet, Text, SafeAreaView, Image, Pressable, View, FlatList} from "react-native";
import Colors from "./Themes/colors"
import NewView from './NewView';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="SongDetails" component={NewView} headerStyle={{backgroundColor: 'black'}} headerTitleStyle={{color: 'white'}}/>
        <Stack.Screen name="SongPreview" component={NewView} headerStyle={{backgroundColor: 'black'}} headerTitleStyle={{color: 'white'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  
});
