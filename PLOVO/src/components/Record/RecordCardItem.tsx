import styled from "styled-components/native";
import { ViewStyle } from "react-native";

interface PloggingCardRecord {
  time: string;
  distance: number;
  weight: number;
  name: string;
  img: string;
  routeImg: string;
}

interface cardProps {
  time: string;
  date: string;
  distance: number;
  weight: number;
  name: string;
  img: string;
}

interface IPage {
  item: cardProps;
  myProfile: string;
  style: ViewStyle;
  goToCard: (object: PloggingCardRecord) => void;
}

export default function RecordCardItem(props: IPage) {
  const { item, myProfile, style, goToCard } = props;

  const thisRecord: PloggingCardRecord = {
    time: item.time,
    distance: item.distance,
    weight: item.weight,
    name: item.name,
    img: item.img,
    routeImg: "https://cdn-icons-png.flaticon.com/512/96/96643.png", //이거 수정해야함
  };

  return (
    <UploadedImgBox style={style} onPress={() => goToCard(thisRecord)}>
      <UploadedImg source={{ uri: item.img }} resizeMode="cover">
        <InnerFrame>
          <WaterMarkText>{item.distance} km</WaterMarkText>
          <WaterMarkText>{item.time}</WaterMarkText>
          <WaterMarkText>{item.weight} g</WaterMarkText>
          <WaterMarkText style={{ marginTop: 7 }}>{item.name}</WaterMarkText>
          <Logo source={require("../../../assets/logo_title.png")} />
          <MyProfile source={{ uri: myProfile }} resizeMode="cover" />
        </InnerFrame>
      </UploadedImg>
    </UploadedImgBox>
  );
}

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
