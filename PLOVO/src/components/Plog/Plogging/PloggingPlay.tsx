import { useState, Dispatch, SetStateAction } from "react";
import PloggingLoading from "./PloggingLoading";
import PloggingTimer from "./PloggingTimer";
import { StyleSheet, Text, View, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PloggingStop from "./PloggingStop";

interface playProps {
  setStage: Dispatch<SetStateAction<number>>;
}

export default function PloggingPlay(props: playProps) {
  const { setStage } = props;
  const [loading, setLoading] = useState(0);

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
      {loading === 0 ? (
        <PloggingLoading setLoading={setLoading} />
      ) : loading === 1 ? (
        <PloggingTimer setLoading={setLoading} />
      ) : (
        <PloggingStop setStage={setStage} />
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
