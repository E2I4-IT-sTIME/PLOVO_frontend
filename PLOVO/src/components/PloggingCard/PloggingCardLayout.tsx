import styled from "styled-components/native";
import { Dimensions, PixelRatio, View, Platform, Alert } from "react-native";
import PloggingCard from "./PloggingCard";
import { Feather, AntDesign } from "@expo/vector-icons";
import ViewShot, { captureRef } from "react-native-view-shot";
import { useCallback, useRef } from "react";
import * as MediaLibrary from "expo-media-library";

interface PloggingCardRecord {
  time: string;
  distance: number;
  weight: number;
  name: string;
  img: string;
  routeImg: string;
  goBack: () => void;
}

const os = Platform.OS;
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
const myProfile =
  "data:image/jpeg;base64,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";

export default function PloggingCardLayout(props: PloggingCardRecord) {
  const { time, distance, weight, name, img, routeImg, goBack } = props;
  const viewShot = useRef(null);

  const permissionAlert = () => {
    Alert.alert(
      "PLOVO에서 갤러리에 접근할 수 있는 권한이 없습니다.",
      "설정에서 권한을 부여해주세요."
    );
  };

  const saveImageFromView = async () => {
    try {
      const uri = await captureRef(viewShot);
      await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert("플로깅 카드 저장 완료!");
    } catch (e) {
      console.log(e);
      permissionAlert();
    }
  };

  const capture = useCallback(async () => {
    // android
    if (os === "android") {
      const permission = await MediaLibrary.getPermissionsAsync();
      if (permission.canAskAgain && permission.status !== "granted") {
        const permissionResponse = await MediaLibrary.requestPermissionsAsync();
        if (permissionResponse.status !== "granted") {
          permissionAlert();
        } else {
          await saveImageFromView();
        }
      } else if (permission.status !== "granted") {
        permissionAlert();
      } else {
        await saveImageFromView();
      }
    }
    // iOS
    else {
      await saveImageFromView();
    }
  }, []);

  return (
    <Container>
      <ViewShot
        ref={viewShot}
        style={{
          height: screenHeight,
          width: screenWidth,
          backgroundColor: "white",
        }}
      >
        <PloggingCard
          time={time}
          distance={distance}
          weight={weight}
          name={name}
          routeImg={routeImg}
          img={img}
        />
      </ViewShot>
      <Buttons>
        <MyButton style={{ marginRight: 10 }} onPress={() => goBack()}>
          <AntDesign name="back" size={26} color="white" />
        </MyButton>
        <MyButton onPress={() => capture()}>
          <Feather name="download" size={26} color="white" />
        </MyButton>
      </Buttons>
    </Container>
  );
}

const Container = styled.View`
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 40px;
  left: 20px;
  opacity: 0.6;
`;

const MyButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: black;
  justify-content: center;
  align-items: center;
`;
