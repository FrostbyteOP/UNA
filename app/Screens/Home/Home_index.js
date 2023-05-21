import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { View, Text, Button, StatusBar } from 'react-native';

export default Home = ({ navigation }) =>{

  return(
    <View className="bg-neutral-500 dark:bg-slate-900">
    <Text className="font-red"> 
    Home Screenrr
    </Text>
    <Button className="mt-8 rounded"
        title="Schedule a Drive"
        onPress={() => navigation.navigate('Drive')}
      />
    </View>
)}

const styles = StyleSheet.create({
    container: {
      flex: 1, //the container will fill the whole screen.
      justifyContent: "center",
      alignItems: "center",
    },
    map: {
      width: "100%",
      height: "70%"
    },
  });