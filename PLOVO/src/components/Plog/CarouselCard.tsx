import React from "react";
import styled from "styled-components/native";
import { ViewStyle } from "react-native";

interface RecommendCard {
  name: string; //산이름
  weight: string; //플로보 현재 무게
  rank: number;
}

interface Color {
  lightColor: string;
  mainColor: string;
  darkColor: string;
}

interface IPage {
  item: RecommendCard;
  color: Color;
  style: ViewStyle;
}

export default function Page(props: IPage) {
  const { item, color, style } = props;
  return (
    <PageItem style={style}>
      <CircleBox>
        {item.rank === 0 ? (
          <Circle source={require("../../../assets/green.png")} />
        ) : item.rank === 1 ? (
          <Circle source={require("../../../assets/blue.png")} />
        ) : item.rank === 2 ? (
          <Circle source={require("../../../assets/yellow.png")} />
        ) : item.rank === 3 ? (
          <Circle source={require("../../../assets/pink.png")} />
        ) : item.rank === 4 ? (
          <Circle source={require("../../../assets/purple.png")} />
        ) : (
          <></>
        )}
        <Mountain color={color.mainColor}>{item.name}</Mountain>
      </CircleBox>
      <InfoBox>
        <Title>산 이름</Title>
        <Info>{item.name}</Info>
        <Title>현재 플로보 무게</Title>
        <Info>{item.weight}kg</Info>
      </InfoBox>
    </PageItem>
  );
}

const PageItem = styled.View`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoBox = styled.View`
  height: 100%;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 14px;
  font-weight: 300;
  padding-bottom: 3px;
`;

const Info = styled.Text`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 8px;
`;

const CircleBox = styled.View`
  width: 150px;
  height: 150px;
  position: relative;
  align-items: center;
`;

const Circle = styled.Image`
  width: 100%;
  height: 100%;
`;

const Mountain = styled.Text<{ color: string }>`
  font-size: 20px;
  font-weight: 900;
  color: ${(props) => props.color};
  position: absolute;
  bottom: 35px;
`;
