import styled from "styled-components/native";
import {
  ButtonBox,
  Title,
  WhiteButton,
  WhiteText,
  PinkButton,
  PinkText,
  SubTitle,
} from "../../Res/PloggingView";
import { useState, Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Dimensions, Animated } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

interface weighProps {
  setPlovo: Dispatch<SetStateAction<number>>;
}

export default function ToWeighPlovo(props: weighProps) {
  const { setPlovo } = props;
  const animation = useRef(new Animated.Value(1)).current;
  const [weight, setWeight] = useState(0);
  const [sec, setSec] = useState(30);

  const timeLimit = () => {
    if (sec > 0) setSec((prev) => prev - 1);
    else fadeOut();
  };

  useInterval(() => {
    timeLimit();
  }, 1000);

  const fadeOut = () => {
    Animated.timing(animation, {
      toValue: 0, // 어떤 값으로 변경할지 - 필수
      duration: 500, // 애니메이션에 걸리는 시간(밀리세컨드) - 기본값 500
      delay: 250, // 딜레이 이후 애니메이션 시작 - 기본값 0
      useNativeDriver: true, // 네이티브 드라이버 사용 여부 - 필수
      isInteraction: true, // 사용자 인터랙션에 의해 시작한 애니메이션인지 지정 - 기본값 true
      //easing: Easing.inOut(Easing.ease), // 애니메이션 속서 변경 함수 - 기본값 Easing.inOut(Easing.ease)
    }).start(() => {
      setPlovo(4);
    });
  };

  return (
    <Container style={{ opacity: animation }}>
      <UpperBox>
        <Circle>
          <MiniTitle>현재 담긴 무게</MiniTitle>
          <Title style={{ marginTop: 2, fontSize: 45 }}>{weight}g</Title>
        </Circle>
        <SubTitleBox>
          <SubTitle>
            {"실시간 측정 중 입니다.\n플로보에 추가적인 무게를 가하지 마세요."}
          </SubTitle>
          <SubTitle style={{ marginTop: 10 }}>
            {sec}초 후 자동으로 닫힙니다.
          </SubTitle>
        </SubTitleBox>
      </UpperBox>
      <ButtonBox>
        <PinkButton onPress={() => fadeOut()}>
          <WhiteText>플로보 CLOSE</WhiteText>
        </PinkButton>
        <WhiteButton>
          <PinkText>기계 이상 신고</PinkText>
        </WhiteButton>
      </ButtonBox>
    </Container>
  );
}

type IntervalFunction = () => unknown | void;
function useInterval(callback: IntervalFunction, delay: number | null) {
  const savedCallback = useRef<IntervalFunction | null>(null);

  useEffect(() => {
    if (delay === null) return;
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay === null) return;
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current();
      }
    }
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const Container = styled(Animated.View)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0px;
`;

const UpperBox = styled.View`
  width: 100%;
  height: ${screenHeight * 0.5}px;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.View`
  width: ${screenWidth * 0.6}px;
  height: ${screenWidth * 0.6}px;
  border-radius: 100%;
  border: 1.5px solid white;
  justify-content: center;
  align-items: center;
`;

const MiniTitle = styled.Text`
  font-size: 24px;
  font-weight: 400;
  color: white;
`;

const SubTitleBox = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;
