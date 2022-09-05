import { useState, useEffect } from "react";
import PloggingLoading from "./PloggingLoading";
import { StyleSheet, Text, View, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function PloggingPlay() {
  const [loading, setLoading] = useState(true);

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
      {loading ? (
        <PloggingLoading setLoading={setLoading} />
      ) : (
        <Text>플로깅시작</Text>
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
