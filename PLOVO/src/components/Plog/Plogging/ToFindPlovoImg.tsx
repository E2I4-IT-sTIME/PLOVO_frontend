import styled from "styled-components/native";
import {
  Mountain,
  ButtonBox,
  Title,
  WhiteButton,
  WhiteText,
  PinkButton,
  PinkText,
} from "../../Res/PloggingView";
import { useState, Dispatch, SetStateAction } from "react";
import PlovoImgCarousel from "./PlovoImgCarousel";

interface imgProps {
  setPlovo: Dispatch<SetStateAction<number>>;
  name: string;
}

const dummy: Array<string> = [
  "https://dl.dongascience.com/uploads/article/Contents/199305/S199305N007_img_01.jpg",
  "http://cdn.kormedi.com/wp-content/uploads/2021/10/ec82b0-580x387.jpg",
  "http://san.chosun.com/news/photo/201909/13046_54948_128.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4e/LhotseMountain.jos.500pix.jpg",
  "https://navjagat.com/wp-content/uploads/2022/07/Himalaya-parvat.jpg",
];

export default function ToFindPlovoImg(props: imgProps) {
  const { setPlovo, name } = props;
  return (
    <Container>
      <TitleBox>
        <Mountain>{name}</Mountain>
        <Title style={{ marginTop: 10 }}>
          {"플로보 위치를\n확인해주세요."}
        </Title>
      </TitleBox>
      <PlovoImgCarousel imgs={dummy} />
      <ButtonBox>
        <PinkButton onPress={() => setPlovo(2)}>
          <WhiteText>찾았어요!</WhiteText>
        </PinkButton>
        <WhiteButton>
          <PinkText>문의하기</PinkText>
        </WhiteButton>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 60px 0px 30px 0px;
`;

const TitleBox = styled.View`
  align-items: flex-start;
`;
