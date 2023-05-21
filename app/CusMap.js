import { useState } from "react";
import MapView from 'react-native-maps';
import {Text, View, TextInput, Button} from 'react-native';
const regionn = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };

const CusMap = (region) => {
  console.log(region.region)
  const [Curmap, setCurmap] = useState(region.region); 
  return(
    Curmap &&
    <View>
    <MapView
      style={{
        width: "50%",
        height: "50%",
      }}
      onRegionChange={setCurmap()}
      region={Curmap}
    />
    <MapView
      style={{
        width: "50%",
        height: "50%",
      }}
      region={regionn}
    />
    </View>
    );
}

export default CusMap;