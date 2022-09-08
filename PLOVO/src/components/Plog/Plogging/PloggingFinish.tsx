import { useState, Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ToFindPlovo from "./ToFindPlovo";
import ToFindPlovoImg from "./ToFindPlovoImg";
import ToOpenPlovo from "./ToOpenPlovo";
import ToWeighPlovo from "./ToWeighPlovo";
import PlovoFinish from "./PlovoFinish";

interface finishProps {
  setStage: Dispatch<SetStateAction<number>>;
  name: string;
}

export default function PloggingFinish(props: finishProps) {
  const { setStage, name } = props;
  const [plovo, setPlovo] = useState(0); //0은 플로보를 찾아주세요 | 1은 플로보 위치 이미지 | 2는 플로보 입열기 | 3은 무게측정 중 | 4는 플로보 종료
  return (
    <LinearGradient
      colors={["#277BC0", "#53BF9D", "#A0B956"]}
      start={{
        x: 0,
        y: 0,
      }}
      end={{
        x: 1,
        y: 1,
      }}
      style={styles.container}
    >
      {plovo === 0 ? (
        <ToFindPlovo setPlovo={setPlovo} />
      ) : plovo === 1 ? (
        <ToFindPlovoImg setPlovo={setPlovo} name={name} />
      ) : plovo === 2 ? (
        <ToOpenPlovo setPlovo={setPlovo} />
      ) : plovo == 3 ? (
        <ToWeighPlovo setPlovo={setPlovo} />
      ) : plovo === 4 ? (
        <PlovoFinish setPlovo={setPlovo} />
      ) : (
        <></>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
