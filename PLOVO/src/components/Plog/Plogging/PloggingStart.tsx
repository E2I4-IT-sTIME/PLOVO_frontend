import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { StyleSheet, Text, Platform, Vibration } from "react-native";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface startProps {
  name: string;
  goBack: () => void;
  setStage: Dispatch<SetStateAction<number>>;
  data: PlogData;
  setRecordId: Dispatch<SetStateAction<number>>;
  setPlovoId: Dispatch<SetStateAction<number>>;
}

interface PlogData {
  distance: string;
  mimage: string;
  mname: string;
  time: string;
  weight: number;
}

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function PloggingStart(props: startProps) {
  const { name, goBack, setStage, data, setRecordId, setPlovoId } = props;
  const [token, setToken] = useState("");

  const startHandler = () => {
    setStage(1);
    Vibration.vibrate(300);
  };

  const onStartPlogging = () => {
    axios
      .get("http://52.78.4.217:8080/auth/plog/start", {
        params: { mName: name },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setRecordId(res.data.userRecord_id);
        setPlovoId(res.data.plovoId);
        startHandler();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData = async () => {
    try {
      const loadedData = await AsyncStorage.getItem("token");
      setToken(loadedData ? JSON.parse(loadedData) : "");
      console.log(
        `토큰 불러오기 성공 : ${loadedData ? JSON.parse(loadedData) : ""}`
      );
    } catch (e) {
      console.log("토큰 불러오기 실패");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Background source={{ uri: data.mimage }} resizeMode="cover" />
      <HoverBox>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{name}플로깅</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
          예상거리 <Text style={{ color: "#277BC0" }}>{data.distance}km</Text>
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          현재 플로보 무게{" "}
          <Text style={{ color: "#277BC0" }}>{data.weight}g</Text>
        </Text>
      </HoverBox>
      <BottomBox>
        <LinearGradient
          style={styles.container}
          colors={["#ffffff00", "#277BC0"]}
        >
          <CustomButton type={true} onPress={() => onStartPlogging()}>
            <CustomTitle type={true}>플로깅 시작하기</CustomTitle>
          </CustomButton>
          <CustomButton type={false} onPress={() => goBack()}>
            <CustomTitle type={false}>뒤로가기</CustomTitle>
          </CustomButton>
          <NoticeTitle>
            {"플로보의 입을 열 때 까지\n앱을 종료하지 말아주세요!"}
          </NoticeTitle>
        </LinearGradient>
      </BottomBox>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

const Container = styled.View`
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
`;

const BottomBox = styled.View`
  width: 100%;
  height: 90%;
`;

const CustomButton = styled.TouchableOpacity<{ type: boolean }>`
  width: 70%;
  height: 65px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: ${(props) => (props.type ? "#277BC0" : "white")};
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const CustomTitle = styled.Text<{ type: boolean }>`
  font-size: 26px;
  font-weight: 900;
  color: ${(props) => (props.type ? "white" : "#277BC0")};
`;

const NoticeTitle = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 50px;
`;

const HoverBox = styled.View`
  width: 70%;
  height: 160px;
  background-color: #ffffffce;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
  position: absolute;
  align-self: center;
  top: 100px;
  align-items: center;
  justify-content: center;
`;
