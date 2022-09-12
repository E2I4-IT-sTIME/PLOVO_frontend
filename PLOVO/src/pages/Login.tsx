import { Dimensions, ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import About1 from "../components/Login/About1";
import About2 from "../components/Login/About2";
import About3 from "../components/Login/About3";
import LoginScreen from "../components/Login/LoginScreen";
import Swiper from "react-native-swiper";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../components/Res/RootStackParamList";

export type HomeScreenProps = StackScreenProps<RootStackParamList, "Login">;

const Login = ({ navigation, route }: HomeScreenProps) => {
  const tmpLocate = () => {
    navigation.reset({ routes: [{ name: "Main" }] });
  };

  const SignUpLocate = () => {
    //navigation.navigate
    // { key: string; params?: undefined; merge?: boolean | undefined; }
    navigation.navigate("Main");
  };

  return (
    <Swiper
      horizontal={true}
      style={styles.container}
      dot={
        <View
          style={{
            backgroundColor: "rgba(255,255,255,.3)",
            width: 13,
            height: 13,
            borderRadius: 7,
            marginLeft: 5,
            marginRight: 5,
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: "#fff",
            width: 13,
            height: 13,
            borderRadius: 7,
            marginLeft: 7,
            marginRight: 7,
          }}
        />
      }
      paginationStyle={{
        bottom: 30,
      }}
      loop={false}
    >
      <About1 />
      <About2 />
      <About3 />
      <LoginScreen locate={tmpLocate} SignUpLocate={SignUpLocate} />
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
});

export default Login;
