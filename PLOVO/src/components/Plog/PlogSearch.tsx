import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styled from "styled-components/native";
import MyButton from "../Res/MyButton";
import { Dispatch, SetStateAction, useState } from "react";
import SearchResult from "./SearchResult";

interface stageProps {
  setStage: Dispatch<SetStateAction<number>>;
}

interface Result {
  name: string;
  weight: string;
}

export default function PlogSearch(props: stageProps) {
  const { setStage } = props;
  const [keyword, setKeyword] = useState("");
  const [err, setErr] = useState("");
  const [results, setResults] = useState<Array<Result>>([]);
  const search = () => {
    if (keyword.length > 1) {
      //검색
      setKeyword("");
      setErr(`${keyword}의 검색결과입니다.`);
    } else {
      setErr("검색어가 너무 짧습니다.");
    }
  };

  return (
    <Container>
      <Title>{"산 이름으로 검색해요."}</Title>
      <CoverBox>
        <SearchBox>
          <InputBox
            placeholder="산 이름을 입력해주세요."
            placeholderTextColor="#ffffff89"
            onChangeText={(text: string) => {
              setKeyword(text);
            }}
            value={keyword}
          ></InputBox>
          <SearchBtn onPress={() => search()}>
            <BtnTitle>검색</BtnTitle>
          </SearchBtn>
        </SearchBox>
        {err === "" ? <></> : <ErrMsg>{err}</ErrMsg>}
      </CoverBox>
      <SearchResult resultArray={results} />
      <ButtonBox>
        <MyButton title="이 산으로 할게요" onPress={() => setStage(0)} />
        <MyButton title="추천해주세요" onPress={() => setStage(2)} />
      </ButtonBox>
    </Container>
  );
}

const Container = styled.View`
  /* padding: 10px 20px 0px 20px; */
`;

const Title = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: 800;
  padding: 0px 0px 0px 20px;
`;

const ButtonBox = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const CoverBox = styled.View`
  flex-direction: column;
  width: 90%;
  align-items: start;
  justify-content: center;
  padding: 12px 0px 20px 0px;
  margin: auto;
`;

const SearchBox = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: auto;
  align-items: center;
`;

const InputBox = styled.TextInput`
  border: 2px solid white;
  border-radius: 10px;
  width: 75%;
  height: 38px;
  padding-left: 7px;
  color: white;
  font-size: 18px;
`;

const SearchBtn = styled.TouchableOpacity`
  width: 20%;
  height: 35px;
  background-color: white;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;

const BtnTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;

const ErrMsg = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: white;
  margin-top: 10px;
`;
