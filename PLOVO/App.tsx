import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import styled from "styled-components/native";
import Login from "./src/pages/Login";

export default function App() {
  const [fontsLoaded] = useFonts({
    Pretendard: require("./assets/fonts/PretendardVariable.ttf"),
  });

  return <Login />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
