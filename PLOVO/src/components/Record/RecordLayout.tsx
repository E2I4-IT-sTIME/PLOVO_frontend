import styled from "styled-components/native";
import RecordCardCarousel from "./RecordCardCarousel";
import Chart from "../Res/Chart";

interface PloggingCardRecord {
  time: string;
  distance: number;
  weight: number;
  name: string;
  img: string;
  routeImg: string;
}

interface PloggingRecord {
  time: string;
  date: string;
  distance: number;
  weight: number;
  name: string;
  img: string;
}

interface recordProps {
  record: Array<PloggingRecord>;
  myName: string;
  myProfile: string;
  goToCard: (object: PloggingCardRecord) => void;
}

interface ChartData {
  points: Array<number>;
  values: Array<number>;
}

const dummyMyProfile =
  "https://www.nemopan.com/files/attach/images/6294/138/473/016/0ae9d616d278c99f9054c7a38e99ab2d.jpg";

const dummyChartTime: ChartData = {
  points: [4, 5, 6, 7, 8, 9],
  values: [48, 65, 0, 58, 132, 23],
};

const dummyChartWeight: ChartData = {
  points: [4, 5, 6, 7, 8, 9],
  values: [450, 600, 0, 120, 890, 130],
};

export default function RecordLayout(props: recordProps) {
  const { record, myName, goToCard } = props;
  return (
    <Container>
      <Title>{`${myName}님의,\n플로깅 기록이에요.`}</Title>
      <RecordCardCarousel
        records={record}
        myProfile={dummyMyProfile}
        goToCard={goToCard}
      />
      <ChartBox>
        <ChartTitle color={"#265042"}>플로깅 시간 차트</ChartTitle>
        <Chart
          points={dummyChartTime.points}
          values={dummyChartTime.values}
          backgroundColor={"#53bf9d90"}
          pointColor={"#439F82"}
          textColor={"#265042"}
        />
      </ChartBox>
      <ChartBox>
        <ChartTitle color={"#285C87"}>플로깅 무게 차트</ChartTitle>
        <Chart
          points={dummyChartWeight.points}
          values={dummyChartWeight.values}
          backgroundColor={"#277BC090"}
          pointColor={"#277BC0"}
          textColor={"#285C87"}
        />
      </ChartBox>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  justify-content: space-around;
  padding: 20px 0px;
`;

const Title = styled.Text`
  font-weight: 900;
  font-size: 24px;
  padding: 0px 0px 0px 30px;
`;

const ChartBox = styled.View`
  width: 85%;
  align-items: flex-start;
  align-self: center;
  margin-top: 40px;
`;

const ChartTitle = styled.Text<{ color: string }>`
  font-size: 22px;
  font-weight: 900;
  color: ${(props) => props.color};
`;
