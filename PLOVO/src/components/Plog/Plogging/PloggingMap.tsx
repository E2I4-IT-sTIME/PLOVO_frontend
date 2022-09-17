import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default function PloggingMap() {
  const [location, setLocation] = useState(null);
  const [err, setErrorMsg] = useState<null | string>(null);

  useLayoutEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      console.log(location);
    })();
  }, []);

  return (
    <View style={styles.map}>
      {location ? (
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
          showUserLocation
          followUserLocation
          loadingEnabled
          region={location}
        ></MapView>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
