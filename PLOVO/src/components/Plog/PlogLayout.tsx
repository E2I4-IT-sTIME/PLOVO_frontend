import { StyleSheet, Text, View, Button } from "react-native";
import styled from "styled-components/native";
import MyButton from "../Res/MyButton";

export default function PlogLayout() {
  return (
    <Container>
      <Title>{"플로깅 할\n산을 선택해주세요"}</Title>
      <ButtonBox>
        <MyButton title="추천해주세요" />
        <MyButton title="직접 검색할게요" />
      </ButtonBox>
    </Container>
  );
}

const Container = styled(View)`
  padding: 20px;
`;

const Title = styled(Text)`
  color: white;
  font-size: 32px;
  font-weight: 800;
`;

const ButtonBox = styled(View)`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
