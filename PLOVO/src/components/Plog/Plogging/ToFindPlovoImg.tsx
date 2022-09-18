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
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import PlovoImgCarousel from "./PlovoImgCarousel";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

interface imgProps {
  setPlovo: Dispatch<SetStateAction<number>>;
  name: string;
  plovoId: number;
}

const dummy: Array<string> = [
  "https://dl.dongascience.com/uploads/article/Contents/199305/S199305N007_img_01.jpg",
  "http://cdn.kormedi.com/wp-content/uploads/2021/10/ec82b0-580x387.jpg",
  "http://san.chosun.com/news/photo/201909/13046_54948_128.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4e/LhotseMountain.jos.500pix.jpg",
  "https://navjagat.com/wp-content/uploads/2022/07/Himalaya-parvat.jpg",
];

export default function ToFindPlovoImg(props: imgProps) {
  const { setPlovo, name, plovoId } = props;
  const [imgList, setImgList] = useState<Array<string>>();

  const getData = async () => {
    try {
      const loadedData = await AsyncStorage.getItem("token");
      const token = loadedData ? JSON.parse(loadedData) : "";
      getPlovoImgs(token);
    } catch (e) {
      console.log("토큰 불러오기 실패");
    }
  };

  const getPlovoImgs = (token: string) => {
    axios
      .get("http://52.78.4.217:8080/auth/plog/site", {
        params: { plovo_id: plovoId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("데이터받기성공");
        setImgList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const reportHandler = () => {
    Alert.alert("플로보 위치 문의", "문의가 접수되었습니다.", [
      { text: "닫기", onPress: () => {} },
    ]);
  };

  return (
    <Container>
      <TitleBox>
        <Mountain>{name}</Mountain>
        <Title style={{ marginTop: 10 }}>
          {"플로보 위치를\n확인해주세요."}
        </Title>
      </TitleBox>
      {imgList ? <PlovoImgCarousel imgs={imgList} /> : <></>}
      <ButtonBox>
        <PinkButton onPress={() => setPlovo(2)}>
          <WhiteText>찾았어요!</WhiteText>
        </PinkButton>
        <WhiteButton onPress={() => reportHandler()}>
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
