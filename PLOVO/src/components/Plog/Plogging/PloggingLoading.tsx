import { useState, useEffect, Dispatch, SetStateAction, useRef } from "react";
import styled from "styled-components/native";

interface LoadingProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function PloggingLoading(props: LoadingProps) {
  const { setLoading } = props;
  const [timer, setTimer] = useState(3);
  useInterval(() => {
    setTimer((prev) => prev - 1);
    if (timer === 0) setLoading(false);
  }, 1000);
  return <Timer>{timer}</Timer>;
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

const Timer = styled.Text`
  font-size: 80px;
  font-weight: 900;
  color: white;
`;
