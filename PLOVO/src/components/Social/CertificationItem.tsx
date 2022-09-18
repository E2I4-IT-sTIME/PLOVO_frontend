import styled from "styled-components/native";
import { ViewStyle } from "react-native";

interface cardProps {
  time: string;
  date: string;
  distance: string;
  weight: number;
  name: string;
  img: string;
  profile: string;
}

interface IPage {
  item: cardProps;
  style: ViewStyle;
}

export default function CertificationItem(props: IPage) {
  const { item, style } = props;

  return (
    <UploadedImgBox style={style}>
      <UploadedImg source={{ uri: item.img }} resizeMode="cover">
        <InnerFrame>
          <WaterMarkText>{item.time}</WaterMarkText>
          <WaterMarkText>{item.weight}</WaterMarkText>
          <WaterMarkText>{item.distance} g</WaterMarkText>
          <WaterMarkText style={{ marginTop: 7 }}>{item.name}</WaterMarkText>
          <Logo source={require("../../../assets/logo_title.png")} />
          <MyProfile source={{ uri: item.profile }} resizeMode="cover" />
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
