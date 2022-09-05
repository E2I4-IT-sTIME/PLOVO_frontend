import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

interface headerProps {
  title: string;
}

export default function Header(props: headerProps) {
  const { title } = props;
  return (
    <HeaderBox>
      <Title>{title}</Title>
    </HeaderBox>
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
