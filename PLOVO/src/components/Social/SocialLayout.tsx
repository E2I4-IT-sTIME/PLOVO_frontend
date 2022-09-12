import { useState, useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import BestPloggerCarousel from "./BestPloggerCarousel";

interface Plogger {
  rank: number;
  profileImg: string;
  name: string;
}

const dummyPlogger: Array<Plogger> = [
  {
    rank: 1,
    profileImg:
      "http://file3.instiz.net/data/file3/2018/01/30/7/6/a/76a98bce9e4e4d5bb321be80a84c0982.jpg",
    name: "고슴도치",
  },
  {
    rank: 1,
    profileImg:
      "http://file3.instiz.net/data/file3/2018/01/30/7/6/a/76a98bce9e4e4d5bb321be80a84c0982.jpg",
    name: "고",
  },
  {
    rank: 1,
    profileImg:
      "http://file3.instiz.net/data/file3/2018/01/30/7/6/a/76a98bce9e4e4d5bb321be80a84c0982.jpg",
    name: "ㅅ므",
  },
  {
    rank: 1,
    profileImg:
      "http://file3.instiz.net/data/file3/2018/01/30/7/6/a/76a98bce9e4e4d5bb321be80a84c0982.jpg",
    name: "도",
  },
  {
    rank: 1,
    profileImg:
      "http://file3.instiz.net/data/file3/2018/01/30/7/6/a/76a98bce9e4e4d5bb321be80a84c0982.jpg",
    name: "치",
  },
  {
    rank: 1,
    profileImg:
      "http://file3.instiz.net/data/file3/2018/01/30/7/6/a/76a98bce9e4e4d5bb321be80a84c0982.jpg",
    name: "고슴",
  },
  {
    rank: 1,
    profileImg:
      "http://file3.instiz.net/data/file3/2018/01/30/7/6/a/76a98bce9e4e4d5bb321be80a84c0982.jpg",
    name: "도치",
  },
  {
    rank: 1,
    profileImg:
      "http://file3.instiz.net/data/file3/2018/01/30/7/6/a/76a98bce9e4e4d5bb321be80a84c0982.jpg",
    name: "고도",
  },
  {
    rank: 1,
    profileImg:
      "http://file3.instiz.net/data/file3/2018/01/30/7/6/a/76a98bce9e4e4d5bb321be80a84c0982.jpg",
    name: "슴치",
  },
  {
    rank: 1,
    profileImg:
      "http://file3.instiz.net/data/file3/2018/01/30/7/6/a/76a98bce9e4e4d5bb321be80a84c0982.jpg",
    name: "고슴도",
  },
];

export default function SocailLayout() {
  const [curMonth, setCurMonth] = useState(0);

  const getTodayMonth = () => {
    const today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
    let month = today.getMonth() + 1;
    setCurMonth(month);
  };

  useEffect(() => {
    getTodayMonth();
  }, []);

  return (
    <Container>
      <BestPloggerBox>
        <Title>
          <Text style={{ color: "#277BC0" }}>{curMonth}월</Text>의 베스트 플로거
        </Title>
        <BestPloggerCarousel items={dummyPlogger} />
      </BestPloggerBox>
    </Container>
  );
}

const Container = styled.View`
  align-items: flex-start;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 900;
  padding-left: 20px;
`;

const BestPloggerBox = styled.View`
  width: 100%;
  margin: 10px 0px 20px 0px;
`;
