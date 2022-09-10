import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

interface titleProps {
  title: string;
  onPress: () => void;
}

export default function MyButton(props: titleProps) {
  const { title, onPress } = props;
  const GradientText = (props: any) => {
    return (
      <MaskedView maskElement={<Title {...props} />}>
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
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Title {...props} style={[props.style, { opacity: 0 }]} />
        </LinearGradient>
      </MaskedView>
    );
  };

  return (
    <Box onPress={() => onPress()}>
      <GradientText>{title}</GradientText>
    </Box>
  );
}

const Box = styled.TouchableOpacity`
  background-color: white;
  width: 80%;
  height: 50px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
  margin-bottom: 20px;
  padding-top: 12px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 900;
`;
