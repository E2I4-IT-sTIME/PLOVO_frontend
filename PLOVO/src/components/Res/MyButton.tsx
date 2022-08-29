import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

interface titleProps {
  title: string;
}

export default function MyButton(props: titleProps) {
  const { title } = props;
  return (
    <Box>
      <Title>{title}</Title>
    </Box>
  );
}

const Box = styled(TouchableOpacity)`
  background-color: white;
  width: 100%;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
  margin-bottom: 20px;
`;

const Title = styled(Text)`
  color: black;
  font-size: 24px;
  font-weight: 900;
`;
