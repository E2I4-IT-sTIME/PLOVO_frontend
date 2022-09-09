import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { RootStackParamList } from "../components/Res/RootStackParamList";
import CompleteScreen from "../components/SignUp/CompleteScreen";
import NameScreen from "../components/SignUp/NameScreen";
import ProfileScreen from "../components/SignUp/ProfileScreen";
import SignUpButton from "../components/SignUp/SignUpButton";
import TermsScreen from "../components/SignUp/TermsScreen";
import WelecomeScreen from "../components/SignUp/WelcomeScreen";

export type HomeScreenProps = StackScreenProps<RootStackParamList, "SignUp">;

const SignUp = ({ navigation }: any) => {
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
            <WelecomeScreen />
            <TermsScreen />
            <NameScreen />
            <ProfileScreen />
            <CompleteScreen />      
        </Swiper>
    );
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
    },
  });

export default SignUp;