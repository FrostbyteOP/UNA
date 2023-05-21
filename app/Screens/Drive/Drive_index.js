import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import {Text, View, TextInput, Button} from 'react-native';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from "react-native-maps";

const Drive = () => {
  const [Cord, setCord] = useState({coordinate: {
    latitude: 37.78825,
    longitude: -122.4324,
  }});
  const [Flow, setFlow] = useState(0);
  const [Show, setShow] = useState(1); //0 -> start lcoation 1-> end loc, 3 -> get path
  function start_loc_click(){

    setFlow(Flow + 1);
    setShow(Show + 1);

  };
  function end_loc_click(){

    setShow(Show + 1);
    setFlow(Flow + 1);

  };
  const [m1, setm1] = useState({coordinate:{latitude: 37.78825, longitude: -122.4324}})
  const [m2, setm2] = useState({coordinate:{latitude: 37.78825, longitude: -122.4324}})

  const handle_map_press = (e) =>{
    //console.log(e.nativeEvent.coordinate);
    if (Flow == 0){
      setm1({coordinate: e.nativeEvent.coordinate})
    }
    if (Flow == 1){
      setm2({coordinate: e.nativeEvent.coordinate})
    }
    //console.log(m1);
  };
 //come up with a better logic
  //console.log(Cord);
  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <Text>Hello, world!</Text>
      <View style={StyleSheet.absoluteFillObject}>
      <View style={styles.container}>
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: Cord.coordinate.latitude,
          longitude: Cord.coordinate.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsCompass={true}
        onPress={(e) => handle_map_press(e)}
        >

        {(Flow == 0 || Show > 0) && <Marker
        style= {styles.marker}
          coordinate = {{
            latitude: m1.coordinate.latitude,
            longitude: m1.coordinate.longitude
          }}
          title='Start Loaction'
          description='drag maps to select location point'
          />}

        {
          (Flow == 1 || Show > 1) && <Marker
          style= {styles.marker}
            coordinate = {{
              latitude: m2.coordinate.latitude,
              longitude: m2.coordinate.longitude
            }}
            title='End Loaction'
            description='drag maps to select location point'
            />}
          

        </MapView>
        </View>

      {Flow == 0 && <Button
          title="Confirm Start Location"
          onPress={() => start_loc_click()}
        />}
        {Flow == 1 && <Button
          title="Confirm end Location"
          onPress={() => end_loc_click()}
        />}
        
        </View>
    </SafeAreaView>
  );
};
export default Drive;

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