import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import Sidebar from "./Sidebar";

interface headerProps {
  title: string;
  color: boolean; //true면 하얀색, false면 색상
}

const dummyMyProfile =
  "https://www.nemopan.com/files/attach/images/6294/138/473/016/0ae9d616d278c99f9054c7a38e99ab2d.jpg";

export default function Header(props: headerProps) {
  const { title, color } = props;
  const [isBarVisible, setIsBarVisible] = useState(false);
  const onPressHandler = () => {
    setIsBarVisible((prev) => {
      return !prev;
    });
  };

  const GradientText = (props: any) => {
    return (
      <MaskedView maskElement={<Title {...props} style={{ marginTop: 15 }} />}>
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
          style={styles.container}
        >
          <Title {...props} style={[props.style, { opacity: 0 }]} />
        </LinearGradient>
      </MaskedView>
    );
  };

  return (
    <>
      <HeaderBox>
        {color ? (
          <Title>{title}</Title>
        ) : (
          <NoRecordHeader>
            {/* <MyProfile source={{ uri: dummyMyProfile }} resizeMode="cover" /> */}
            <GradientText>{title}</GradientText>
            <TouchableOpacity
              onPress={() => {
                onPressHandler();
              }}
            >
              <Ionicons name="menu" size={30} color="black" />
            </TouchableOpacity>
          </NoRecordHeader>
        )}
      </HeaderBox>
      {isBarVisible && <Sidebar onPressHandler={onPressHandler} />}
    </>
  );
}

const HeaderBox = styled.View`
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 800;
`;

const NoRecordHeader = styled.View`
  width: 90%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MyProfile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
