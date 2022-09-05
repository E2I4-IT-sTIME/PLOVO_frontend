import { StyleSheet, Text, View, Button } from "react-native";
import styled from "styled-components/native";
import MyButton from "../Res/MyButton";
import { useState, useEffect } from "react";
import PlogDefault from "./PlogDefault";
import PlogRecommend from "./PlogRecommend";
import PlogSearch from "./PlogSearch";

interface plogProps {
  moveToPlogging: (name: string) => void;
}

export default function PlogLayout(props: plogProps) {
  const { moveToPlogging } = props;
  const [stage, setStage] = useState(0); //0은 기본 | 1은 추천 | 2는 검색
  return (
    <View>
      {stage === 0 ? (
        <PlogDefault setStage={setStage} />
      ) : stage === 1 ? (
        <PlogSearch setStage={setStage} moveToPlogging={moveToPlogging} />
      ) : stage === 2 ? (
        <PlogRecommend setStage={setStage} moveToPlogging={moveToPlogging} />
      ) : (
        <></>
      )}
    </View>
  );
}
