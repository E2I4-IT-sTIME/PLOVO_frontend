import { StyleSheet, Text, View, Button } from "react-native";
import styled from "styled-components/native";
import MyButton from "../Res/MyButton";
import { useState, useEffect } from "react";
import PlogDefault from "./PlogDefault";
import PlogRecommend from "./PlogRecommend";
import PlogSearch from "./PlogSearch";

export default function PlogLayout() {
  const [stage, setStage] = useState(0); //0은 기본 | 1은 추천 | 2는 검색
  return (
    <View>
      {stage === 0 ? (
        <PlogDefault setStage={setStage} />
      ) : stage === 1 ? (
        <PlogSearch setStage={setStage} />
      ) : stage === 2 ? (
        <PlogRecommend setStage={setStage} />
      ) : (
        <></>
      )}
    </View>
  );
}
