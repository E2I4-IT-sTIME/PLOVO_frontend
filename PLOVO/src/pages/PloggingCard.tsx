import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../components/Res/RootStackParamList";
import { useState } from "react";
import PloggingCardLayout from "../components/PloggingCard/PloggingCardLayout";

export type PloggingScreenProps = StackScreenProps<
  RootStackParamList,
  "PloggingCard"
>;

export default function PloggingCard({
  navigation,
  route,
}: PloggingScreenProps) {
  const { img, name, distance, weight, time, routeImg } = route.params;

  console.log(distance);

  const goBack = () => [navigation.goBack()];

  return (
    <>
      <PloggingCardLayout
        time={time}
        distance={distance}
        weight={weight}
        name={name}
        routeImg={routeImg}
        img={img}
        goBack={goBack}
      />
    </>
  );
}
