import styled from "styled-components/native";
import {
  ButtonBox,
  Title,
  WhiteButton,
  WhiteText,
  PinkButton,
  PinkText,
} from "../../Res/PloggingView";
import { useState, Dispatch, SetStateAction } from "react";

interface findProps {
  setPlovo: Dispatch<SetStateAction<number>>;
}

export default function ToFindPlovo(props: findProps) {
  const { setPlovo } = props;
  return (
    <Container>
      <Title>{"이제,\n정상에 위치한\n플로보를 찾아주세요."}</Title>
      <ButtonBox>
        <PinkButton onPress={() => setPlovo(2)}>
          <WhiteText>찾았어요!</WhiteText>
        </PinkButton>
        <WhiteButton onPress={() => setPlovo(1)}>
          <PinkText>못 찾겠어요</PinkText>
        </WhiteButton>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 80px 0px;
`;
