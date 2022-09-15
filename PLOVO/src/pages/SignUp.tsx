import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
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
  const tmpLocate = () => {
    navigation.reset({ routes: [{ name: "Main" }] });
  };

    const [pageIndex, setPageIndex] = useState(1);

    const changeIndex = (index:any) => {
      setPageIndex(index);
    }
    return (
      <>
      {pageIndex===1 &&  <WelecomeScreen changeIndex={changeIndex}/> }
      {pageIndex===2 &&  <TermsScreen changeIndex={changeIndex} /> }
      {pageIndex===3 &&  <NameScreen  changeIndex={changeIndex} /> }
      {pageIndex===4 &&  <ProfileScreen changeIndex={changeIndex}/>}
      {pageIndex===5 &&  <CompleteScreen tmpLocate={tmpLocate} />  }
      </>
    );
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
    },
  });

export default SignUp;