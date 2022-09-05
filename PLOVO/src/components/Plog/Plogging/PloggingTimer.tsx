import styled from "styled-components/native";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState, useEffect, useRef } from "react";

export default function PloggingTimer() {
  const [timerState, setTimerState] = useState("Timer");
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [curTimer, setCurTime] = useState("00 : 00 : 00");

  const timer = () => {
    if (sec < 60) {
      setSec((prev) => prev + 1);
    } else if (sec === 60 && min < 60) {
      setSec(0);
      setMin((prev) => prev + 1);
    } else if (sec === 60 && min === 60) {
      setSec(0);
      setSec(0);
      setHour((prev) => prev + 1);
    }
  };

  useEffect(() => {
    let secString = "";
    if (sec < 10) {
    }
  }, [sec, min, hour]);

  useInterval(() => {
    timer();
  }, 1000);

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
