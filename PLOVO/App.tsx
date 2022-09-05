import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import styled from "styled-components/native";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Plog from "./src/pages/Plog";
import Plogging from "./src/pages/Plogging";
import Social from "./src/pages/Social";
import Record from "./src/pages/Record";
import Main from "./src/pages/Main";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/components/Res/RootStackParamList";

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Pretendard: require("./assets/fonts/PretendardVariable.ttf"),
  });

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Plogging"
          component={Plogging}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
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
