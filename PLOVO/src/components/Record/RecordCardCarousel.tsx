import { useState, useEffect } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, FlatList, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import RecordCardItem from "./RecordCardItem";

interface RecordData {
  date: string;
  distance: string;
  mname: string;
  profileImg: string;
  time: string;
  uploadImg: string;
  weight: string;
}

interface carouselProps {
  records: Array<RecordData>;
  myProfile: string;
  goToCard: (object: RecordData) => void;
}
const screenWidth = Math.round(Dimensions.get("window").width);
const gap = 28;
const offset = 20;
const pageWidth = screenWidth - (28 + 20) * 2;

export default function RecordCardCarousel(props: carouselProps) {
  const { records, myProfile, goToCard } = props;
  const [todayYear, setTodayYear] = useState(0);
  const [todayMoth, setTodayMonth] = useState(0);
  const [curYear, setCurYear] = useState("0");
  const [curMonth, setCurMonth] = useState("0");
  const [contents, setContents] = useState<Array<RecordData>>();
  const [page, setPage] = useState(0);

  const renderItem = ({ item }: any) => {
    return (
      <RecordCardItem
        item={item}
        myProfile={myProfile}
        style={{ width: pageWidth, marginHorizontal: gap / 2 }}
        goToCard={goToCard}
      />
    );
  };

  const onScroll = (e: any) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap)
    );
    setPage(newPage);
  };

  const getTodayMonth = () => {
    const today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    setCurYear(`${year}`);
    setCurMonth(month < 10 ? `0${month}` : `${month}`);
    setTodayYear(year);
    setTodayMonth(month);
  };

  const getNowContents = () => {
    const curDate = `${curYear}-${curMonth}`;
    const newArr: Array<RecordData> = records.filter((record, index) =>
      record.date.includes(curDate)
    );
    if (newArr) setContents(newArr);
    else setContents([]);
  };

  const leftCaretHandler = () => {
    if (Number(curMonth) === 1) {
      setCurMonth("12");
      const newYear = Number(curYear) - 1;
      setCurYear(newYear < 10 ? `0${newYear}` : `${newYear}`);
    } else {
      const newMonth = Number(curMonth) - 1;
      setCurMonth(newMonth < 10 ? `0${newMonth}` : `${newMonth}`);
    }
  };

  const rightCaretHandler = () => {
    const newYear = Number(curYear) + 1;
    const newMonth = Number(curMonth) + 1;
    if (Number(curYear) === todayYear) {
      if (Number(curMonth) < todayMoth) {
        if (Number(curMonth) === 12) {
          setCurMonth("01");
          setCurYear(newYear < 10 ? `0${newYear}` : `${newYear}`);
        } else {
          setCurMonth(newMonth < 10 ? `0${newMonth}` : `${newMonth}`);
        }
      }
    } else {
      if (Number(curMonth) === 12) {
        setCurMonth("01");
        setCurYear(newYear < 10 ? `0${newYear}` : `${newYear}`);
      } else {
        setCurMonth(newMonth < 10 ? `0${newMonth}` : `${newMonth}`);
      }
    }
  };

  useEffect(() => {
    getTodayMonth();
  }, []);

  useEffect(() => {
    getNowContents();
  }, [curYear, curMonth]);

  return (
    <Container>
      <DateSelector>
        <TouchableOpacity onPress={() => leftCaretHandler()}>
          <AntDesign name="caretleft" size={24} color="black" />
        </TouchableOpacity>
        <CurDate
          style={{ marginLeft: 5, marginRight: 5 }}
        >{`${curYear}-${curMonth}`}</CurDate>
        <TouchableOpacity onPress={() => rightCaretHandler()}>
          <AntDesign name="caretright" size={24} color="black" />
        </TouchableOpacity>
      </DateSelector>

      {contents && contents.length >= 1 ? (
        <>
          <FlatList
            automaticallyAdjustContentInsets={false}
            contentContainerStyle={{
              paddingHorizontal: offset + gap / 2,
            }}
            data={contents}
            decelerationRate="fast"
            horizontal
            keyExtractor={(item: RecordData) =>
              `page__${item.date}-${item.time}`
            }
            onScroll={onScroll}
            pagingEnabled
            renderItem={renderItem}
            snapToInterval={pageWidth + gap}
            snapToAlignment="start"
            showsHorizontalScrollIndicator={false}
          />
          <IndicatorWrapper>
            {Array.from({ length: contents.length }, (_, i) => i).map((i) => (
              <Indicator key={`indicator_${i}`} focused={i === page} />
            ))}
          </IndicatorWrapper>
        </>
      ) : (
        <NoItem>
          <NoItemText>{`${curMonth} 월의\n플로깅 기록이 없어요`}</NoItemText>
        </NoItem>
      )}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
`;

const DateSelector = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CurDate = styled.Text`
  font-size: 20px;
  font-weight: 900;
`;

const Indicator = styled.View<{ focused: boolean }>`
  margin: 0px 4px;
  background-color: black;
  width: ${(props) => (props.focused ? 12 : 6)}px;
  height: 6px;
  border-radius: 3px;
`;

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

const NoItem = styled.View`
  width: ${pageWidth}px;
  height: 175px;
  background-color: #474747;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const NoItemText = styled.Text`
  font-size: 22px;
  color: white;
  font-weight: 800;
  text-align: center;
`;
