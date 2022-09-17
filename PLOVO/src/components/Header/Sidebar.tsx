import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import StackNavigator from "../../../StackNavigator";
import Main from "../../pages/Main";
import Plog from "../../pages/Plog";

const win = Dimensions.get("window");
const Sidebar = (props: any) => {
  const { onPressHandler } = props;

  const username = "어서오세요,\n";
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          onPressHandler();
        }}
      >
        <Ionicons name="menu" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.welcome}>
        <Text style={styles.name}>{username}반갑습니다.</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>로그아웃</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>회원 탈퇴</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>플로보 이용 약관</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>개인정보 처리 방침</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 0,
    bottom: 20,
    flex: 1,
    width: win.width / 1.5,
    height: win.height + 60,
    zIndex: 3,
    backgroundColor: "white",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: -10,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    paddingTop: 35,
    elevation: 8,
  },
  welcome: {
    width: "50%",
    paddingVertical: 10,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
  },
  btn: {
    marginBottom: 10,
  },
  btnText: {
    textAlign: "right",
  },
});

export default Sidebar;
