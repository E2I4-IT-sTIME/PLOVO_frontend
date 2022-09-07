import PloggingStart from "../components/Plog/Plogging/PloggingStart";
import PloggingPlay from "../components/Plog/Plogging/PloggingPlay";
import PloggingFinish from "../components/Plog/Plogging/PloggingFinish";
import PloggingResult from "../components/Plog/Plogging/PloggingResult";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../components/Res/RootStackParamList";
import { useState } from "react";

export type PloggingScreenProps = StackScreenProps<
  RootStackParamList,
  "Plogging"
>;
export default function Plogging({ navigation, route }: PloggingScreenProps) {
  const { name } = route.params;
  const [stage, setStage] = useState(0); //0이 start, 1이 play, 2가 finish, 3이 Result
  const [time, setTime] = useState("00 : 00 : 00"); //총 플로깅 시간
  const [weight, setWeight] = useState(0);

  const moveToMain = () => {
    navigation.goBack();
  };

  return (
    <>
      {stage === 0 ? (
        <PloggingStart
          name={name}
          goBack={navigation.goBack}
          setStage={setStage}
        />
      ) : stage === 1 ? (
        <PloggingPlay setStage={setStage} setTime={setTime} />
      ) : stage === 2 ? (
        <PloggingFinish setStage={setStage} name={name} setWeight={setWeight} />
      ) : stage === 3 ? (
        <PloggingResult
          moveToMain={moveToMain}
          name={name}
          time={time}
          weight={weight}
        />
      ) : (
        <></>
      )}
    </>
  );
}
