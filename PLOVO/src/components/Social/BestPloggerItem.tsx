import styled from "styled-components/native";
import { ViewStyle } from "react-native";

interface Plogger {
  profile_img: string;
  username: string;
}

interface IPage {
  item: Plogger;
  style: ViewStyle;
  index: number;
}

export default function BestPloggerItem(props: IPage) {
  const { item, style, index } = props;
  return (
    <UploadedImgBox style={style}>
      <UploadedImg source={{ uri: item.profile_img }} resizeMode="cover">
        <InnerFrame>
          <WaterMarkText style={{ fontSize: 18, top: 10, left: 10 }}>
            {index + 1}위
          </WaterMarkText>
          <WaterMarkText style={{ fontSize: 22, bottom: 10, right: 10 }}>
            {item.username}
          </WaterMarkText>
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
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
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
  font-weight: 900;
  text-shadow-color: rgba(0, 0, 0, 0.25);
  text-shadow-offset: 0px 4px;
  text-shadow-radius: 3px;
  position: absolute;
`;
