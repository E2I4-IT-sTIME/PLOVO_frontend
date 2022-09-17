import { useState, Dispatch, SetStateAction, useRef } from "react";
import { StyleSheet, Text, View, Button, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ToFindPlovo from "./ToFindPlovo";
import ToFindPlovoImg from "./ToFindPlovoImg";
import ToOpenPlovo from "./ToOpenPlovo";
import ToWeighPlovo from "./ToWeighPlovo";
import PlovoFinish from "./PlovoFinish";
import styled from "styled-components/native";

interface finishProps {
  setStage: Dispatch<SetStateAction<number>>;
  setWeight: Dispatch<SetStateAction<number>>;
  name: string;
  recordId: number;
}

export default function PloggingFinish(props: finishProps) {
  const { setStage, setWeight, name, recordId } = props;
  const [plovo, setPlovo] = useState(0); //0은 플로보를 찾아주세요 | 1은 플로보 위치 이미지 | 2는 플로보 입열기 | 3은 무게측정 중 | 4는 플로보 종료
  const animation = useRef(new Animated.Value(1)).current;

  const plovoFadeout = () => {
    Animated.timing(animation, {
      toValue: 0, // 어떤 값으로 변경할지 - 필수
      duration: 500, // 애니메이션에 걸리는 시간(밀리세컨드) - 기본값 500
      delay: 250, // 딜레이 이후 애니메이션 시작 - 기본값 0
      useNativeDriver: true, // 네이티브 드라이버 사용 여부 - 필수
      isInteraction: true, // 사용자 인터랙션에 의해 시작한 애니메이션인지 지정 - 기본값 true
      //easing: Easing.inOut(Easing.ease), // 애니메이션 속서 변경 함수 - 기본값 Easing.inOut(Easing.ease)
    }).start(() => {
      // 애니메이션 처리 완료 후 실행할 작업
      // 햅틱 한 번 넣어야함
      setStage(3);
    });
  };

  return (
    <Container style={{ opacity: animation }}>
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
          <ToFindPlovoImg setPlovo={setPlovo} name={name} recordId={recordId} />
        ) : plovo === 2 ? (
          <ToOpenPlovo setPlovo={setPlovo} />
        ) : plovo == 3 ? (
          <ToWeighPlovo setPlovo={setPlovo} setWeight={setWeight} />
        ) : plovo === 4 ? (
          <PlovoFinish plovoFadeout={plovoFadeout} />
        ) : (
          <></>
        )}
      </LinearGradient>
    </Container>
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

const Container = styled(Animated.View)`
  width: 100%;
  height: 100%;
`;
