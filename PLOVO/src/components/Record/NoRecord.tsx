import styled from "styled-components/native";
import { Dimensions, View, Text } from "react-native";

interface nameProps {
  name: string;
  goToPlog: () => void;
}

const screenHeight = Math.round(Dimensions.get("window").height);

export default function NoRecord(props: nameProps) {
  const { name, goToPlog } = props;
  return (
    <Container>
      <View>
        <Title>{`${name}님의,\n플로깅 기록이 아직 없어요.`}</Title>
        <Illust
          source={require("../../../assets/norecord_illust.png")}
          resizeMode="cover"
        />
        <Text
          style={{ textAlign: "center" }}
        >{`환경과 건강을 지키는 플로깅,\n플로보와 함께해요!`}</Text>
      </View>
      <PlogButton onPress={() => goToPlog()}>
        <ButtonText>플로깅 시작하기</ButtonText>
      </PlogButton>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: ${screenHeight - 130}px;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.Text`
  font-weight: 900;
  font-size: 24px;
  padding: 0px 0px 0px 30px;
`;

const Illust = styled.Image`
  transform: scale(0.8);
`;

const PlogButton = styled.TouchableOpacity`
  width: 60%;
  height: 70px;
  border-radius: 20px;
  background-color: #277bc0;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const ButtonText = styled.Text`
  font-weight: 900;
  font-size: 26px;
  color: white;
`;
