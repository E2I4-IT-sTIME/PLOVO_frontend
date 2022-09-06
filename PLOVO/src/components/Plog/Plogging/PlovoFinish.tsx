import styled from "styled-components/native";
import { useState, Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Pressable, Animated } from "react-native";

interface finishProps {
  setPlovo: Dispatch<SetStateAction<number>>;
}

export default function PlovoFinish(props: finishProps) {
  const { setPlovo } = props;
  const animation = useRef(new Animated.Value(0)).current;
  const [title, setTitle] = useState("결과 화면을 준비 중 입니다.");

  const titlePlay = () => {
    useInterval(() => {
      if (title === "결과 화면을 준비 중 입니다.")
        setTitle("결과 화면을 준비 중 입니다..");
      else if (title === "결과 화면을 준비 중 입니다..")
        setTitle("결과 화면을 준비 중 입니다...");
      else setTitle("결과 화면을 준비 중 입니다.");
    }, 500);
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1, // 어떤 값으로 변경할지 - 필수
      duration: 500, // 애니메이션에 걸리는 시간(밀리세컨드) - 기본값 500
      delay: 250, // 딜레이 이후 애니메이션 시작 - 기본값 0
      useNativeDriver: true, // 네이티브 드라이버 사용 여부 - 필수
      isInteraction: true, // 사용자 인터랙션에 의해 시작한 애니메이션인지 지정 - 기본값 true
      //easing: Easing.inOut(Easing.ease), // 애니메이션 속서 변경 함수 - 기본값 Easing.inOut(Easing.ease)
    }).start(() => {
      // 애니메이션 처리 완료 후 실행할 작업
      // 햅틱 한 번 넣어야함
      setTimeout(() => {
        fadeOut();
      }, 4000);
    });
  }, []);

  const fadeOut = () => {
    Animated.timing(animation, {
      toValue: 0, // 어떤 값으로 변경할지 - 필수
      duration: 500, // 애니메이션에 걸리는 시간(밀리세컨드) - 기본값 500
      delay: 0, // 딜레이 이후 애니메이션 시작 - 기본값 0
      useNativeDriver: true, // 네이티브 드라이버 사용 여부 - 필수
      isInteraction: true, // 사용자 인터랙션에 의해 시작한 애니메이션인지 지정 - 기본값 true
      //easing: Easing.inOut(Easing.ease), // 애니메이션 속서 변경 함수 - 기본값 Easing.inOut(Easing.ease)
    }).start(() => {
      // 애니메이션 처리 완료 후 실행할 작업
    });
  };

  titlePlay();

  return (
    <Container style={{ opacity: animation }}>
      <Logo source={require("../../../../assets/logo_title.png")} />
      <Title>{title}</Title>
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
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 217px;
  height: 107px;
  margin-bottom: 0px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;
