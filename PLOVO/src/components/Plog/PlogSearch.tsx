import { StyleSheet, Text, View, Button } from "react-native";
import styled from "styled-components/native";
import MyButton from "../Res/MyButton";
import { Dispatch, SetStateAction } from "react";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

interface stageProps {
  setStage: Dispatch<SetStateAction<number>>;
}

export default function PlogSearch(props: stageProps) {
  const { setStage } = props;
  return (
    <Container>
      <Title>{"산 이름으로 검색해요."}</Title>
      <ButtonBox>
        <MyButton title="이 산으로 할게요" onPress={() => setStage(0)} />
        <MyButton title="추천해주세요" onPress={() => setStage(2)} />
      </ButtonBox>
    </Container>
  );
}

const Container = styled(View)`
  /* padding: 10px 20px 0px 20px; */
`;

const Title = styled(Text)`
  color: white;
  font-size: 28px;
  font-weight: 800;
  padding: 0px 0px 0px 20px;
`;

const ButtonBox = styled(View)`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
