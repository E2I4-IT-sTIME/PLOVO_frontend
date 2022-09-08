import { StyleSheet, Text, View, Button } from "react-native";
import styled from "styled-components/native";
import MyButton from "../Res/MyButton";
import { useState, Dispatch, SetStateAction } from "react";
import { Dimensions } from "react-native";
import PlogRecommendCarousel from "./PlogRecommendCarousel";

interface stageProps {
  setStage: Dispatch<SetStateAction<number>>;
  moveToPlogging: (name: string) => void;
}

interface RecommendCard {
  name: string; //산이름
  weight: string; //플로보 현재 무게
  rank: number;
}

const dummy: Array<RecommendCard> = [
  { name: "북한산", weight: "0.1", rank: 0 },
  { name: "설악산", weight: "0.2", rank: 1 },
  { name: "지리산", weight: "0.3", rank: 2 },
  { name: "한라산", weight: "0.4", rank: 3 },
  { name: "백두산", weight: "0.5", rank: 4 },
];

export default function PlogRecommend(props: stageProps) {
  const { setStage, moveToPlogging } = props;
  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);
  const [page, setPage] = useState(0);

  return (
    <Container screenHeight={screenHeight}>
      <Title>{"지금 플로깅하기 좋은\n산이에요"}</Title>
      <PlogRecommendCarousel
        gap={28}
        offset={20}
        pages={dummy}
        pageWidth={screenWidth - (28 + 20) * 2}
        page={page}
        setPage={setPage}
      />
      <ButtonBox>
        <MyButton
          title={`${dummy[page].name}으로 할게요`}
          onPress={() => moveToPlogging(dummy[page].name)}
        />
        <MyButton title="직접 검색할게요" onPress={() => setStage(1)} />
      </ButtonBox>
    </Container>
  );
}

const Container = styled.View<{ screenHeight: number }>`
  height: ${(props) => `${props.screenHeight - 70}`}px;
  justify-content: space-between;
  padding-bottom: 80px;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 28px;
  font-weight: 800;
  padding: 0px 0px 30px 20px;
`;

const ButtonBox = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
