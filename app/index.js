import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drive from './Screens/Drive/Drive_index';
import Home from './Screens/Home/Home_index';


const Stack = createNativeStackNavigator();

function Main() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name="Drive" component={Drive} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;