import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Login from "./src/pages/Login";
import Plogging from "./src/pages/Plogging";
import Main from "./src/pages/Main";
import KakaoLogin from "./src/components/Login/KakaoLogin";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/components/Res/RootStackParamList";
import SignUp from "./src/pages/SignUp";

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
          name="KakaoLogin"
          component={KakaoLogin}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="SignUp"
          component={SignUp}
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
