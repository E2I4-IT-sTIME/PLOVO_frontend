import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

interface SearchProps {
  resultArray: Array<Result>;
  selectHandler: (name: string) => void;
}

interface Result {
  distance: string;
  mimage: string;
  mname: string;
  time: string;
  weight: number;
}

const screenHeight = Math.round(Dimensions.get("window").height);

export default function SearchResult(props: SearchProps) {
  const { resultArray, selectHandler } = props;
  return (
    <Container>
      {resultArray.length === 0 ? (
        <Non>
          <NonText>{"검색 결과가\n존재하지 않습니다😢"}</NonText>
        </Non>
      ) : (
        <Mountains>
          {resultArray.map((result, index) => (
            <Mountain
              key={`${result.mname}-${index}`}
              onPress={() => selectHandler(result.mname)}
            >
              <Mimg source={{ uri: result.mimage }} resizeMode="cover" />
              <Mname style={{ marginLeft: 10 }}>{result.mname}</Mname>
              <Minfo
                style={{ marginLeft: 5 }}
              >{`현재 플로보 무게 : ${result.weight}g`}</Minfo>
            </Mountain>
          ))}
        </Mountains>
      )}
    </Container>
  );
}

const Container = styled.ScrollView`
  width: 90%;
  height: ${screenHeight * 0.3}px;
  margin: auto;
  background-color: white;
  border-radius: 10px;
  padding: 10px 0px;
`;

const Non = styled.View`
  width: 100%;
  height: ${screenHeight * 0.3}px;
  align-items: center;
  justify-content: center;
`;

const NonText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

const Mountains = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const Mountain = styled.TouchableOpacity`
  width: 96%;
  height: 60px;
  border-radius: 10px;
  background-color: #f0f0f0;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 10px;
`;

const Mimg = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

const Mname = styled.Text`
  font-size: 20px;
  font-weight: 900;
`;

const Minfo = styled.Text`
  font-size: 15px;
  font-weight: 400;
`;
