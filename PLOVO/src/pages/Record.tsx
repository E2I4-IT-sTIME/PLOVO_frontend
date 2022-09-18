import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import styled from "styled-components/native";
import NoRecord from "../components/Record/NoRecord";
import RecordLayout from "../components/Record/RecordLayout";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../components/Res/RootStackParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { RefreshControl } from "react-native";

export type PlogScreenProps = StackScreenProps<RootStackParamList, "Record">;

// interface PloggingRecord {
//   time: string;
//   date: string;
//   distance: number;
//   weight: number;
//   name: string;
//   img: string;
// }

// interface PloggingCardRecord {
//   time: string;
//   distance: number;
//   weight: number;
//   name: string;
//   img: string;
//   routeImg: string;
// }

interface RecordObject {
  profileImg: string;
  timeAndWeightRes: Array<ChartData>;
  userUploadImgRes: Array<RecordData>;
  username: string;
}

interface ChartData {
  month: string;
  time: string;
  weight: string;
}

interface RecordData {
  date: string;
  distance: string;
  mname: string;
  profileImg: string;
  time: string;
  uploadImg: string;
  weight: string;
}

//네비게이션 네 번째인 Record 부분을 담당할 페이지
export default function Record({ navigation }: PlogScreenProps) {
  const [record, setRecord] = useState<RecordObject>();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      getData();
      setRefreshing(false);
    }, 2000);
  };

  const goToPlog = () => {
    navigation.navigate("Plog");
  };

  const goToCard = (object: RecordData) => {
    navigation.navigate("PloggingCard", {
      img: object.uploadImg,
      name: object.mname,
      distance: object.distance,
      weight: Number(object.weight),
      time: object.time,
      routeImg: "",
    });
  };

  const getData = async () => {
    try {
      const loadedData = await AsyncStorage.getItem("token");
      const token = loadedData ? JSON.parse(loadedData) : "";
      getRecordData(token);
    } catch (e) {
      console.log("토큰 불러오기 실패");
    }
  };

  const getRecordData = (token: string) => {
    axios
      .get("http://52.78.4.217:8080/auth/record", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setRecord(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Header title={"MY RECORD"} color={false} />
      {record ? (
        record.userUploadImgRes.length === 0 ? (
          <NoRecord name={record.username} goToPlog={goToPlog} />
        ) : (
          <RecordLayout
            timeAndWeightRes={record.timeAndWeightRes}
            userUploadImgRes={record.userUploadImgRes}
            myName={record.username}
            myProfile={record.profileImg}
            goToCard={goToCard}
          />
        )
      ) : (
        <></>
      )}
    </Container>
  );
}

const Container = styled.ScrollView`
  width: 100%;
`;
