import styled from "styled-components/native";
import RecordCardCarousel from "./RecordCardCarousel";
import Chart from "../Res/Chart";

interface recordProps {
  myName: string;
  myProfile: string;
  timeAndWeightRes: Array<ChartData>;
  userUploadImgRes: Array<RecordData>;
  goToCard: (object: RecordData) => void;
}

interface ChartData {
  month: string;
  time: string;
  weight: string;
}

interface RecordData {
  date: string;
  distance: string;
  mname: string;
  profileImg: string;
  time: string;
  uploadImg: string;
  weight: string;
}

export default function RecordLayout(props: recordProps) {
  const { myName, myProfile, timeAndWeightRes, userUploadImgRes, goToCard } =
    props;
  const points = timeAndWeightRes.map((data, index) => Number(data.month));
  const times = timeAndWeightRes.map((data, index) => Number(data.time));
  const weights = timeAndWeightRes.map((data, index) => Number(data.weight));

  return (
    <Container>
      <Title>{`${myName}님의,\n플로깅 기록이에요.`}</Title>
      <RecordCardCarousel
        records={userUploadImgRes}
        myProfile={myProfile}
        goToCard={goToCard}
      />
      <ChartBox>
        <ChartTitle color={"#265042"}>플로깅 시간 차트</ChartTitle>
        <Chart
          points={points}
          values={times}
          backgroundColor={"#53bf9d90"}
          pointColor={"#439F82"}
          textColor={"#265042"}
        />
      </ChartBox>
      <ChartBox>
        <ChartTitle color={"#285C87"}>플로깅 무게 차트</ChartTitle>
        <Chart
          points={points}
          values={weights}
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
