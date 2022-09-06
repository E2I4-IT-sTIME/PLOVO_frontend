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
import { useState, Dispatch, SetStateAction, useRef } from "react";
import { Animated } from "react-native";

interface openProps {
  setPlovo: Dispatch<SetStateAction<number>>;
}

export default function ToOpenPlovo(props: openProps) {
  const { setPlovo } = props;
  const animation = useRef(new Animated.Value(1)).current;

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
      <Title>
        {"플로보의 입에\n주운 쓰레기를\n넣어주세요.\n무게 측정이 시작됩니다."}
      </Title>
      <ButtonBox>
        <PinkButton onPress={() => setPlovo(3)}>
          <WhiteText>플로보 OPEN</WhiteText>
        </PinkButton>
        <WhiteButton style={{ marginBottom: 30 }} onPress={() => fadeOut()}>
          <PinkText>쓰레기는 다음에</PinkText>
        </WhiteButton>
        <SubTitle>{"휴대폰을\n플로보와 가까이 붙여주세요."}</SubTitle>
      </ButtonBox>
    </Container>
  );
}

const Container = styled(Animated.View)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 80px 0px 40px 0px;
`;
