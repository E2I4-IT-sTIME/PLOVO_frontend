import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Dimensions } from "react-native";

interface PloggingCardRecord {
  time: string;
  distance: string;
  weight: number;
  name: string;
  img: string;
  routeImg: string;
}

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
const imgSize = screenWidth * 0.5;

export default function PloggingCard(props: PloggingCardRecord) {
  const { time, distance, weight, name, img, routeImg } = props;

  return (
    <Background source={{ uri: img }} resizeMode="cover">
      <LinearGradient
        style={styles.container}
        colors={["#ffffff00", "#000000"]}
      >
        <InfoBox>
          <InfoName>{name}</InfoName>
          <InfoText>{distance ? distance : 0}</InfoText>
          <InfoText>{time ? time : "00 : 00 : 00"}</InfoText>
          <InfoText>{weight ? weight : 0} g</InfoText>
        </InfoBox>
        {/* <RouteImg source={{ uri: routeImg }} resizeMode="cover" /> */}
        <Logo source={require("../../../assets/logo_title.png")} />
      </LinearGradient>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
`;

const InfoBox = styled.View`
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  bottom: 80px;
  left: 30px;
`;

const InfoName = styled.Text`
  font-size: 32px;
  color: white;
`;

const InfoText = styled.Text`
  font-size: 38px;
  color: white;
  font-weight: 800;
  text-shadow-color: rgba(0, 0, 0, 0.25);
  text-shadow-offset: 0px 4px;
  text-shadow-radius: 3px;
`;

const RouteImg = styled.Image`
  width: ${imgSize}px;
  height: ${imgSize}px;
  position: absolute;
  top: ${screenHeight * 0.25}px;
`;

const Logo = styled.Image`
  width: 135px;
  height: 70px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
