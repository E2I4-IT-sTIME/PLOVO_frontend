import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import styled from "styled-components/native";
import Plog from "./src/pages/Plog";

export default function App() {
  const [fontsLoaded] = useFonts({
    Pretendard: require("./assets/fonts/PretendardVariable.ttf"),
  });

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />
      <Plog />
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
});