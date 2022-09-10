import { StyleSheet, Text, View, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header/Header";
import PlogLayout from "../components/Plog/PlogLayout";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../components/Res/RootStackParamList";

export type PlogScreenProps = StackScreenProps<RootStackParamList, "Plog">;

//네비게이션 두 번째인 Plog 부분을 담당할 페이지
export default function Plog({ navigation }: PlogScreenProps) {
  const moveToPlogging = (name: string) => {
    navigation.navigate("Plogging", {
      name: name,
    });
  };
  return (
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
      <Header title="PLOGGING" color={true} />
      <PlogLayout moveToPlogging={moveToPlogging} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
