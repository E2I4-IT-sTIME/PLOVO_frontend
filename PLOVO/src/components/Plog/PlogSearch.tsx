import { Alert } from "react-native";
import styled from "styled-components/native";
import MyButton from "../Res/MyButton";
import { Dispatch, SetStateAction, useState } from "react";
import SearchResult from "./SearchResult";
import axios from "axios";

interface stageProps {
  setStage: Dispatch<SetStateAction<number>>;
  moveToPlogging: (name: string) => void;
}

interface Result {
  distance: string;
  mimage: string;
  mname: string;
  time: string;
  weight: number;
}

export default function PlogSearch(props: stageProps) {
  const { setStage, moveToPlogging } = props;
  const [keyword, setKeyword] = useState("");
  const [err, setErr] = useState("");
  const [results, setResults] = useState<Array<Result>>([]);
  const [choice, setChoice] = useState("");
  const search = () => {
    if (keyword.length > 1) {
      searching();
      setKeyword("");
      setErr(`${keyword}의 검색결과입니다.`);
    } else {
      setErr("검색어가 너무 짧습니다.");
    }
  };

  const moveBtnClickHandler = () => {
    if (choice === "") {
      alert();
    } else {
      moveToPlogging(choice);
      setChoice("");
    }
  };

  const searching = () => {
    axios
      .get("http://52.78.4.217:8080/mountain/search", {
        params: { mName: keyword },
      })
      .then((res) => {
        console.log(res);
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectHandler = (name: string) => {
    setChoice(name);
  };

  const alert = () =>
    Alert.alert(
      "산을 선택해주세요",
      "선택한 산이 없네요.\n산을 선택해주세요!",
      [{ text: "닫기", onPress: () => {} }]
    );

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
      <SearchResult resultArray={results} selectHandler={selectHandler} />
      <ButtonBox>
        <MyButton
          title={choice === "" ? "이 산으로 할게요" : `${choice}으로 할게요`}
          onPress={() => moveBtnClickHandler()}
        />
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
  align-items: flex-start;
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
