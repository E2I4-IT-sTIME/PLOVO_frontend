import styled from "styled-components/native";
import { useState, Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Pressable, Animated, View, Text, StyleSheet } from "react-native";
import {
  ButtonBox,
  PinkButton,
  WhiteText,
  WhiteButton,
  PinkText,
} from "../../Res/PloggingView";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";

interface resultProps {
  moveToMain: () => void;
  name: string;
  time: string;
  weight: number;
}

const dummyDistance = 4.8;
const dummyMyProfile =
  "https://www.nemopan.com/files/attach/images/6294/138/473/016/0ae9d616d278c99f9054c7a38e99ab2d.jpg";
const dummyChart = [10, 5, 3, 1, 6, 7];

export default function PloggingResult(props: resultProps) {
  const { moveToMain, name, time, weight } = props;
  const animation = useRef(new Animated.Value(0)).current;
  const [curMon, setCurMon] = useState(0);
  const [chartMons, setChartMons] = useState<Array<number>>();
  const [chartRatio, setChartRatio] = useState<Array<number>>();
  const [date, setDate] = useState("");
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [imageUrl, setImageUrl] = useState("");

  const getDate = () => {
    const today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
    let time = {
      year: today.getFullYear(), //현재 년도
      month: today.getMonth() + 1, // 현재 월
      date: today.getDate(), // 현제 날짜
      hours: today.getHours(), //현재 시간
      minutes: today.getMinutes(), //현재 분
    };
    const dayString = `${time.year}-${
      time.month < 10 ? `0${time.month}` : time.month
    }-${time.date < 10 ? `0${time.date}` : time.date}`;
    setCurMon(time.month);
    setDate(dayString);
  };

  const uploadImage = async () => {
    // 권한 확인 코드: 권한 없으면 물어보고, 승인하지 않으면 함수 종료
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }
    // 이미지 업로드 기능
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1],
    });
    if (result.cancelled) {
      return null; // 이미지 업로드 취소한 경우
    }
    // 이미지 업로드 결과 및 이미지 경로 업데이트
    console.log(result);
    setImageUrl(result.uri);
  };

  const ratioCalculator = () => {
    const max = Math.max(...dummyChart);
    const ratioArray = dummyChart.map((value) =>
      Number((value / max).toFixed(2))
    );
    setChartRatio(ratioArray);
  };

  useEffect(() => {
    getDate();
    ratioCalculator();
    fadeIn();
  }, []);

  useEffect(() => {
    const months = [
      curMon - 5,
      curMon - 4,
      curMon - 3,
      curMon - 2,
      curMon - 1,
      curMon,
    ];
    setChartMons(months);
  }, [curMon]);

  const fadeIn = () => {
    Animated.timing(animation, {
      toValue: 1, // 어떤 값으로 변경할지 - 필수
      duration: 500, // 애니메이션에 걸리는 시간(밀리세컨드) - 기본값 500
      delay: 0, // 딜레이 이후 애니메이션 시작 - 기본값 0
      useNativeDriver: true, // 네이티브 드라이버 사용 여부 - 필수
      isInteraction: true, // 사용자 인터랙션에 의해 시작한 애니메이션인지 지정 - 기본값 true
      //easing: Easing.inOut(Easing.ease), // 애니메이션 속서 변경 함수 - 기본값 Easing.inOut(Easing.ease)
    }).start();
  };

  return (
    <Container style={{ opacity: animation }}>
      <ContainerBox>
        <LinearGradient
          colors={["#277BC0", "#53BF9D", "#A0B956"]}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 1,
          }}
          style={{ borderRadius: 10 }}
        >
          <TitleBox>
            <Title>{name} 플로깅</Title>
            <DateView>{date}</DateView>
          </TitleBox>
        </LinearGradient>
        <View style={{ marginTop: 30, paddingLeft: 5 }}>
          <Info>거리 {dummyDistance} km</Info>
          <Info>시간 {time}</Info>
          <Info>무게 {weight} g</Info>
        </View>
        <ImgLayout>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Info
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#277BC0",
              }}
            >
              사진
            </Info>
            <Info
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "black",
              }}
            >
              {" "}
              등록하기
            </Info>
          </View>
          {imageUrl === "" ? (
            <ImgBox onPress={() => uploadImage()}>
              <Entypo name="image-inverted" size={50} color="black" />
            </ImgBox>
          ) : (
            <UploadedImgBox onPress={() => uploadImage()}>
              <UploadedImg source={{ uri: imageUrl }} resizeMode="cover">
                <InnerFrame>
                  <WaterMarkText>{dummyDistance} km</WaterMarkText>
                  <WaterMarkText>{time}</WaterMarkText>
                  <WaterMarkText>{weight} g</WaterMarkText>
                  <WaterMarkText style={{ marginTop: 7 }}>{name}</WaterMarkText>
                  <Logo source={require("../../../../assets/logo_title.png")} />
                  <MyProfile
                    source={{ uri: dummyMyProfile }}
                    resizeMode="cover"
                  />
                </InnerFrame>
              </UploadedImg>
            </UploadedImgBox>
          )}
        </ImgLayout>
        <ChartBox>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Info
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#439F82",
              }}
            >
              플로보
            </Info>
            <Info
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "black",
              }}
            >
              {" "}
              무게 추이
            </Info>
          </View>
          <Chart style={{ marginTop: 10 }}>
            {chartMons && chartRatio ? (
              chartMons.map((mon, index) => (
                <ChartContent key={`${mon}-${index}`}>
                  <ChartBar height={chartRatio[index]} />
                  <ChartMonth>{mon}</ChartMonth>
                </ChartContent>
              ))
            ) : (
              <></>
            )}
          </Chart>
        </ChartBox>
        <ButtonBox style={{ marginTop: 50 }}>
          <PinkButton onPress={() => moveToMain()}>
            <WhiteText>플로깅 마치기</WhiteText>
          </PinkButton>
          <WhiteButton>
            <PinkText>이상 기록 신고하기</PinkText>
          </WhiteButton>
        </ButtonBox>
      </ContainerBox>
    </Container>
  );
}

const Container = styled(Animated.ScrollView)`
  width: 100%;
  height: 100%;
  padding: 0px 25px;
`;

const ContainerBox = styled.View`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  margin: 50px 0px;
`;

const TitleBox = styled.View`
  padding: 10px 15px;
`;

const Title = styled.Text`
  font-size: 42px;
  font-weight: 900;
  color: white;
  text-shadow-color: rgba(0, 0, 0, 0.25);
  text-shadow-offset: 0px 4px;
  text-shadow-radius: 3px;
`;

const DateView = styled.Text`
  font-size: 18px;
  font-weight: 300;
  color: white;
`;

const ImgLayout = styled.View`
  width: 100%;
  align-items: start;
  margin-top: 30px;
`;

const Info = styled.Text`
  font-size: 20px;
  font-weight: 600;
  text-shadow-color: rgba(0, 0, 0, 0.085);
  text-shadow-offset: 0px 2px;
  text-shadow-radius: 3px;
`;

const ImgBox = styled.Pressable`
  width: 100%;
  height: 175px;
  border-radius: 10px;
  background-color: #d9d9d9;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const UploadedImgBox = styled.Pressable`
  width: 100%;
  align-items: start;
`;

const UploadedImg = styled.ImageBackground`
  width: 100%;
  height: 175px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin-top: 10px;
`;

const InnerFrame = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #00000043;
  padding: 20px 0px 0px 20px;
  position: relative;
`;

const WaterMarkText = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: 900;
  text-shadow-color: rgba(0, 0, 0, 0.25);
  text-shadow-offset: 0px 4px;
  text-shadow-radius: 3px;
`;

const Logo = styled.Image`
  width: 135px;
  height: 70px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const MyProfile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ChartBox = styled.View`
  width: 100%;
  margin-top: 30px;
  align-items: start;
`;

const Chart = styled.View`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: #53bf9d90;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;
  padding: 10px;
`;

const ChartContent = styled.View`
  width: 12%;
  align-items: center;
`;

const ChartMonth = styled.Text`
  color: #265042;
  font-size: 20px;
  font-weight: 900;
`;

//최대로 높아질 수 있는 높이 230px
const ChartBar = styled.View<{ height: number }>`
  width: 100%;
  height: ${(props) => 230 * props.height}px;
  background-color: #439f82;
  border-radius: 7px;
  margin-bottom: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
