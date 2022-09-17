import { StyleSheet, Text, View, Button } from "react-native";
import styled from "styled-components/native";
import MyButton from "../Res/MyButton";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Dimensions } from "react-native";
import PlogRecommendCarousel from "./PlogRecommendCarousel";
import axios from "axios";

interface stageProps {
  setStage: Dispatch<SetStateAction<number>>;
  moveToPlogging: (name: string) => void;
}

interface RecommendCard {
  mname: string; //산이름
  weight: string; //플로보 현재 무게
  distance: string;
  mimage: string;
  time: string;
}

export default function PlogRecommend(props: stageProps) {
  const { setStage, moveToPlogging } = props;
  const [recommendList, setRecommendList] = useState<Array<RecommendCard>>();
  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);
  const [page, setPage] = useState(0);

  const getMonutainRecommend = () => {
    axios
      .get("http://52.78.4.217:8080/mountain/recommend", {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        const list: Array<RecommendCard> = res.data;
        if (list.length > 5) {
          setRecommendList(list.slice(0, 4));
        } else {
          setRecommendList(list);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMonutainRecommend();
  }, []);

  return (
    <Container screenHeight={screenHeight}>
      <Title>{"지금 플로깅하기 좋은\n산이에요"}</Title>
      {recommendList ? (
        <>
          <PlogRecommendCarousel
            gap={28}
            offset={20}
            pages={recommendList}
            pageWidth={screenWidth - (28 + 20) * 2}
            page={page}
            setPage={setPage}
          />
          <ButtonBox>
            <MyButton
              title={`${recommendList[page].mname}으로 할게요`}
              onPress={() => moveToPlogging(recommendList[page].mname)}
            />
            <MyButton title="직접 검색할게요" onPress={() => setStage(1)} />
          </ButtonBox>
        </>
      ) : (
        <></>
      )}
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
