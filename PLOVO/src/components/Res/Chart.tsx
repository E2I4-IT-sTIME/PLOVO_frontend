import styled from "styled-components/native";

interface chartProps {
  points: Array<number>;
  values: Array<number>;
  backgroundColor: string;
  pointColor: string;
  textColor: string;
}

export default function Chart(props: chartProps) {
  const { points, values, backgroundColor, pointColor, textColor } = props;
  const max = Math.max(...values);
  const heights: Array<number> = values.map((value) =>
    max === 0 ? value : value / max
  );

  return (
    <ChartBox style={{ marginTop: 10 }} backgroundColor={backgroundColor}>
      {points.map((mon, index) => (
        <ChartContent key={`${mon}-${index}`}>
          <ChartBar height={heights[index]} pointColor={pointColor} />
          <ChartText textColor={textColor}>{mon}</ChartText>
        </ChartContent>
      ))}
    </ChartBox>
  );
}

const ChartBox = styled.View<{ backgroundColor: string }>`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: ${(props) => props.backgroundColor};
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;
  padding: 10px;
`;

const ChartContent = styled.View`
  width: 12%;
  align-items: center;
`;

const ChartText = styled.Text<{ textColor: string }>`
  color: ${(props) => props.textColor};
  font-size: 20px;
  font-weight: 900;
`;

//최대로 높아질 수 있는 높이 230px
const ChartBar = styled.View<{ height: number; pointColor: string }>`
  width: 100%;
  height: ${(props) => 230 * props.height}px;
  background-color: ${(props) => props.pointColor};
  border-radius: 7px;
  margin-bottom: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
