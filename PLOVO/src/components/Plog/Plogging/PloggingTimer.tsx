import styled from "styled-components/native";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState, useEffect, useRef } from "react";

export default function PloggingTimer() {
  const [timer, setTimer] = useState(0);
  const [timerState, setTimerState] = useState("Timer");
  return (
    <Container>
      <View>
        <Text>{timerState}</Text>
      </View>
    </Container>
  );
}

type IntervalFunction = () => unknown | void;
function useInterval(callback: IntervalFunction, delay: number | null) {
  const savedCallback = useRef<IntervalFunction | null>(null);

  useEffect(() => {
    if (delay === null) return;
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay === null) return;
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current();
      }
    }
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const Container = styled.View`
  height: 80%;
  align-items: center;
  justify-content: space-evenly;
`;
