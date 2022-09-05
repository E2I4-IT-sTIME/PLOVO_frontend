import { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface startProps {
  name: string;
  goBack: () => void;
  setStage: Dispatch<SetStateAction<number>>;
}

interface PlogData {
  name: string; //산 이름
  distance: string; //거리
  weight: string; //무게
  img: string; //이미지 url
}

const dummy: PlogData = {
  name: "북한산", //산 이름
  distance: "5", //거리
  weight: "0.8", //무게
  img: "https://t1.daumcdn.net/cfile/blog/2166C83F54D4CC0E0E", //이미지 url
};

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function PloggingStart(props: startProps) {
  const { name, goBack, setStage } = props;
  return (
    <Container>
      <Background source={{ uri: dummy.img }} resizeMode="cover" />
      <HoverBox>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{name}플로깅</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
          예상거리 <Text style={{ color: "#277BC0" }}>{dummy.distance}km</Text>
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          현재 플로보 무게{" "}
          <Text style={{ color: "#277BC0" }}>{dummy.weight}kg</Text>
        </Text>
      </HoverBox>
      <BottomBox>
        <LinearGradient
          style={styles.container}
          colors={["#ffffff00", "#277BC0"]}
        >
          <CustomButton type={true} onPress={() => setStage(1)}>
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
