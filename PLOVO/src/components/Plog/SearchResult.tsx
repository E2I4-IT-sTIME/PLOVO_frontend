import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

interface SearchProps {
  resultArray: Array<Result>;
}

interface Result {
  name: string;
  weight: string;
}

const screenHeight = Math.round(Dimensions.get("window").height);

export default function SearchResult(props: SearchProps) {
  const { resultArray } = props;
  return (
    <Container>
      {resultArray.length === 0 ? (
        <Non>
          <NonText>{"검색 결과가\n존재하지 않습니다😢"}</NonText>
        </Non>
      ) : (
        <></>
      )}
    </Container>
  );
}

const Container = styled(ScrollView)`
  width: 90%;
  height: ${screenHeight * 0.3}px;
  margin: auto;
  background-color: white;
  border-radius: 10px;
`;

const Non = styled(View)`
  width: 100%;
  height: ${screenHeight * 0.3}px;
  align-items: center;
  justify-content: center;
`;

const NonText = styled(Text)`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;
