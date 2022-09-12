import styled from "styled-components/native";
import RecordCardCarousel from "./RecordCardCarousel";

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
}

const dummyMyProfile =
  "https://www.nemopan.com/files/attach/images/6294/138/473/016/0ae9d616d278c99f9054c7a38e99ab2d.jpg";

export default function RecordLayout(props: recordProps) {
  const { record, myName } = props;
  return (
    <Container>
      <Title>{`${myName}님의,\n플로깅 기록이에요.`}</Title>
      <RecordCardCarousel records={record} myProfile={dummyMyProfile} />
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
