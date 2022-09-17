import styled from "styled-components/native";
import { ViewStyle } from "react-native";

interface RecordData {
  date: string;
  distance: string;
  mname: string;
  profileImg: string;
  time: string;
  uploadImg: string;
  weight: string;
}

interface IPage {
  item: RecordData;
  myProfile: string;
  style: ViewStyle;
  goToCard: (object: RecordData) => void;
}

export default function RecordCardItem(props: IPage) {
  const { item, myProfile, style, goToCard } = props;

  return (
    <UploadedImgBox style={style} onPress={() => goToCard(item)}>
      <UploadedImg source={{ uri: item.uploadImg }} resizeMode="cover">
        <InnerFrame>
          <WaterMarkText>{item.distance ? item.distance : 0} km</WaterMarkText>
          <WaterMarkText>{item.time ? item.time : "00:00:00"}</WaterMarkText>
          <WaterMarkText>{item.weight ? item.weight : 0} g</WaterMarkText>
          <WaterMarkText style={{ marginTop: 7 }}>{item.mname}</WaterMarkText>
          <Logo source={require("../../../assets/logo_title.png")} />
          <MyProfile source={{ uri: myProfile }} resizeMode="cover" />
        </InnerFrame>
      </UploadedImg>
    </UploadedImgBox>
  );
}

const UploadedImgBox = styled.Pressable`
  width: 100%;
  align-items: flex-start;
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
