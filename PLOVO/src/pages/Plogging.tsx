import PloggingStart from "../components/Plog/Plogging/PloggingStart";
import PloggingPlay from "../components/Plog/Plogging/PloggingPlay";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../components/Res/RootStackParamList";
import { useState } from "react";

export type PloggingScreenProps = StackScreenProps<
  RootStackParamList,
  "Plogging"
>;
export default function Plogging({ navigation, route }: PloggingScreenProps) {
  const { name } = route.params;
  const [stage, setStage] = useState(0); //0이 start, 1이 play, 2가 finish

  return (
    <>
      {stage === 0 ? (
        <PloggingStart
          name={name}
          goBack={navigation.goBack}
          setStage={setStage}
        />
      ) : stage === 1 ? (
        <PloggingPlay />
      ) : (
        <></>
      )}
    </>
  );
}
