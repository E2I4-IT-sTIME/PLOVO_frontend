import PloggingStart from "../components/Plog/Plogging/PloggingStart";
import PloggingPlay from "../components/Plog/Plogging/PloggingPlay";
import PloggingFinish from "../components/Plog/Plogging/PloggingFinish";
import PloggingResult from "../components/Plog/Plogging/PloggingResult";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../components/Res/RootStackParamList";
import { useState, useEffect } from "react";
import axios from "axios";

export type PloggingScreenProps = StackScreenProps<
  RootStackParamList,
  "Plogging"
>;

interface Mountain {
  distance: string;
  mimage: string;
  mname: string;
  time: string;
  weight: number;
}

export default function Plogging({ navigation, route }: PloggingScreenProps) {
  const { name } = route.params;
  const [stage, setStage] = useState(0); //0이 start, 1이 play, 2가 finish, 3이 Result
  const [time, setTime] = useState("00 : 00 : 00"); //총 플로깅 시간
  const [weight, setWeight] = useState(0);
  const [info, setInfo] = useState<Mountain>();
  const [recordId, setRecordId] = useState<number>(0);
  const [plovoId, setPlovoId] = useState<number>(0);

  const getMountainInfo = () => {
    axios
      .get("http://52.78.4.217:8080/mountain/search", {
        params: { mName: name },
      })
      .then((res) => {
        setInfo(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const moveToMain = () => {
    navigation.goBack();
  };

  useEffect(() => {
    getMountainInfo();
  }, []);

  return (
    <>
      {info ? (
        stage === 0 ? (
          <PloggingStart
            name={name}
            goBack={navigation.goBack}
            setStage={setStage}
            data={info}
            setRecordId={setRecordId}
            setPlovoId={setPlovoId}
          />
        ) : stage === 1 ? (
          <PloggingPlay
            setStage={setStage}
            setTime={setTime}
            recordId={recordId}
          />
        ) : stage === 2 ? (
          <PloggingFinish
            setStage={setStage}
            name={name}
            setWeight={setWeight}
            recordId={recordId}
          />
        ) : stage === 3 ? (
          <PloggingResult
            moveToMain={moveToMain}
            name={name}
            time={time}
            weight={weight}
          />
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </>
  );
}
