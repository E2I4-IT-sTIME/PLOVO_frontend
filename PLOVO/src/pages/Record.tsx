import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import styled from "styled-components/native";
import NoRecord from "../components/Record/NoRecord";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../components/Res/RootStackParamList";

export type PlogScreenProps = StackScreenProps<RootStackParamList, "Record">;

interface PloggingRecord {
  date: string;
  distance: number;
  weight: number;
  name: string;
  img: string;
}

const dummyMyName = "중규리";

//네비게이션 네 번째인 Record 부분을 담당할 페이지
export default function Record({ navigation }: PlogScreenProps) {
  const [record, setRecord] = useState<Array<PloggingRecord>>();

  const goToPlog = () => {
    navigation.navigate("Plog");
  };

  useEffect(() => {
    const dummyData: Array<PloggingRecord> = [
      {
        date: "2022-08-12",
        distance: 4.8,
        weight: 600,
        name: "북한산",
        img: "http://san.chosun.com/news/photo/201704/10825_44653_4757.jpg",
      },
      {
        date: "2022-08-14",
        distance: 4.8,
        weight: 600,
        name: "설악산",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/LhotseMountain.jos.500pix.jpg",
      },
      {
        date: "2022-09-01",
        distance: 4.8,
        weight: 600,
        name: "지리산",
        img: "https://dl.dongascience.com/uploads/article/Contents/199305/S199305N007_img_01.jpg",
      },
      {
        date: "2022-09-12",
        distance: 4.8,
        weight: 600,
        name: "천왕봉",
        img: "https://news.imaeil.com/photos/2020/07/28/2020072818340699789_l.jpg",
      },
    ];
    setRecord(dummyData);
  }, []);
  return (
    <Container>
      <Header title={"MY RECORD"} color={false} />
      <NoRecord name={dummyMyName} goToPlog={goToPlog} />
    </Container>
  );
}

const Container = styled.ScrollView`
  width: 100%;
`;
