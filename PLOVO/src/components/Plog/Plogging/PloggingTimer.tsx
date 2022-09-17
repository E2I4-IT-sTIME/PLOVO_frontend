import styled from "styled-components/native";
import { Pressable, Animated, Vibration } from "react-native";
import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import PloggingMap from "./PloggingMap";

interface timerProps {
  setLoading: Dispatch<SetStateAction<number>>;
  setTime: Dispatch<SetStateAction<string>>;
}

export default function PloggingTimer(props: timerProps) {
  const { setLoading, setTime } = props;
  const animation = useRef(new Animated.Value(1)).current;
  const [timerState, setTimerState] = useState("Timer");
  const [pause, setPause] = useState(false);
  const [stop, setStop] = useState(false);
  const [stopper, setStopper] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [curTime, setCurTime] = useState("00 : 00 : 00");
  const [quotes, setQuotes] = useState(
    "만약 당신이\n방금 쓰레기를 줍지 않았다면,\n그 쓰레기는\n약 80년 동안 그 자리에 남아있습니다."
  );

  const timer = () => {
    if (sec < 59) {
      setSec((prev) => prev + 1);
    } else if (sec === 59 && min < 59) {
      setSec(0);
      setMin((prev) => prev + 1);
    } else if (sec === 59 && min === 59) {
      setSec(0);
      setSec(0);
      setHour((prev) => prev + 1);
    }
  };

  useEffect(() => {
    let secString = sec.toString();
    let minString = min.toString();
    let hourString = hour.toString();
    if (sec < 10) {
      secString = `0${secString}`;
    }
    if (min < 10) {
      minString = `0${minString}`;
    }
    if (hour < 10) {
      hourString = `0${hourString}`;
    }
    setCurTime(`${hourString} : ${minString} : ${secString}`);
  }, [sec, min, hour]);

  useInterval(() => {
    if (!pause) timer();
  }, 1000);

  const stopHandler = () => {
    setStop(true);
    setTimerState("꾹 눌러주세요!");
  };

  const ploggingStop = () => {
    Animated.timing(animation, {
      toValue: 0, // 어떤 값으로 변경할지 - 필수
      duration: 500, // 애니메이션에 걸리는 시간(밀리세컨드) - 기본값 500
      delay: 0, // 딜레이 이후 애니메이션 시작 - 기본값 0
      useNativeDriver: true, // 네이티브 드라이버 사용 여부 - 필수
      isInteraction: true, // 사용자 인터랙션에 의해 시작한 애니메이션인지 지정 - 기본값 true
      //easing: Easing.inOut(Easing.ease), // 애니메이션 속서 변경 함수 - 기본값 Easing.inOut(Easing.ease)
    }).start(() => {
      // 애니메이션 처리 완료 후 실행할 작업
      setTime(curTime);
      setLoading(2);
    });
  };

  const vibrate = () => {
    Vibration.vibrate(10);
  };

  return (
    <Container style={{ opacity: animation }}>
      <TimeBox>
        <TimeState>{timerState}</TimeState>
        <Time>{curTime}</Time>
      </TimeBox>
      <QuotesBox>
        <Notice>알고계셨나요?</Notice>
        <Quotes>{quotes}</Quotes>
      </QuotesBox>
      {/* <MapBox>
        <PloggingMap />
      </MapBox> */}
      <ControlBox>
        <Pressable>
          <FontAwesome
            name={pause ? "play-circle" : "pause-circle"}
            size={90}
            color={pause ? "black" : "white"}
            onPress={() => {
              setPause((prev) => !prev);
              setTimerState(pause ? "Timer" : "Pause");
              vibrate();
            }}
          />
        </Pressable>
        <Pressable
          delayLongPress={2000}
          onLongPress={() => {
            vibrate();
            ploggingStop();
          }}
          onPressIn={() => {
            stopHandler();
            vibrate();
          }}
          onPressOut={() => {
            setStop(false);
            setTimerState("Timer");
          }}
        >
          <FontAwesome
            name="stop-circle"
            size={90}
            color={stop ? "black" : "white"}
          />
        </Pressable>
      </ControlBox>
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

const Container = styled(Animated.View)`
  height: 450px;
  align-items: center;
  justify-content: space-evenly;
`;

const TimeBox = styled.View`
  align-items: flex-start;
`;

const TimeState = styled.Text`
  font-size: 32px;
  font-weight: 900;
  color: white;
  margin-bottom: -10px;
`;

const Time = styled.Text`
  font-size: 48px;
  font-weight: 900;
  color: white;
`;

const QuotesBox = styled.View`
  align-items: center;
  justify-content: center;
`;

const Notice = styled.Text`
  font-size: 28px;
  font-weight: 600;
  color: white;
`;

const Quotes = styled.Text`
  font-size: 20px;
  font-weight: 400;
  color: white;
  text-align: center;
  margin-top: 10px;
`;

const ControlBox = styled.View`
  width: 60%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const MapBox = styled.View`
  width: 60%;
  height: 300px;
  border-radius: 10px;
`;
