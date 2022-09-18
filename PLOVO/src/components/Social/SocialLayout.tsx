import { useState, useEffect } from "react";
import { Text, ScrollView, RefreshControl } from "react-native";
import styled from "styled-components/native";
import BestPloggerCarousel from "./BestPloggerCarousel";
import CertificationLayout from "./CertificationLayout";
import axios from "axios";
import Header from "../Header/Header";

interface Plogger {
  profile_img: string;
  username: string;
}

interface RecentPlog {
  distance: string;
  mname: string;
  time: string;
  uploadImg: string;
  userProfile: string;
  weight: string;
}

interface SocailObject {
  bestPlogger: Array<Plogger>;
  recentPlog1: Array<RecentPlog>;
  recentPlog2: Array<RecentPlog>;
  recentPlog3: Array<RecentPlog>;
}

interface PloggingRecord {
  time: string;
  date: string;
  distance: string;
  weight: string;
  name: string;
  img: string;
  profile: string;
}

interface cert {
  name: string;
  items: Array<PloggingRecord>;
}

interface CertProps {
  items: Array<cert>;
}

export default function SocailLayout() {
  const [curMonth, setCurMonth] = useState(0);
  const [socialData, setSocialData] = useState<SocailObject>();
  const [certArray, setCertArray] = useState<Array<cert>>();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      getSocialData();
      setRefreshing(false);
    }, 2000);
  };

  const getTodayMonth = () => {
    const today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
    let month = today.getMonth() + 1;
    setCurMonth(month);
  };

  const getSocialData = () => {
    axios
      .get("http://52.78.4.217:8080/social")
      .then((res) => {
        setSocialData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCertArray = () => {
    if (socialData) {
      const certArray: Array<cert> = [];

      const firstName = socialData.recentPlog1[0].mname;
      const firstObject: Array<PloggingRecord> = [];
      socialData.recentPlog1.map((data, index) =>
        firstObject.push({
          time: data.time,
          date: data.time,
          distance: data.distance,
          weight: data.weight,
          name: data.mname,
          img: data.uploadImg,
          profile: data.userProfile,
        })
      );
      certArray.push({ name: firstName, items: firstObject });

      const secondName = socialData.recentPlog2[0].mname;
      const secondObject: Array<PloggingRecord> = [];
      socialData.recentPlog2.map((data, index) =>
        secondObject.push({
          time: data.time,
          date: data.time,
          distance: data.distance,
          weight: data.weight,
          name: data.mname,
          img: data.uploadImg,
          profile: data.userProfile,
        })
      );
      certArray.push({ name: secondName, items: secondObject });

      const thirdName = socialData.recentPlog3[0].mname;
      const thirdObject: Array<PloggingRecord> = [];
      socialData.recentPlog3.map((data, index) =>
        thirdObject.push({
          time: data.time,
          date: data.time,
          distance: data.distance,
          weight: data.weight,
          name: data.mname,
          img: data.uploadImg,
          profile: data.userProfile,
        })
      );
      certArray.push({ name: thirdName, items: thirdObject });

      setCertArray(certArray);
    }
  };

  useEffect(() => {
    getTodayMonth();
    getSocialData();
  }, []);

  useEffect(() => {
    getCertArray();
  }, [socialData]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Header title={"SOCIAL"} color={false} />
      <Container>
        <Box>
          <Title>
            <Text style={{ color: "#277BC0" }}>{curMonth}월</Text>의 베스트
            플로거
          </Title>
          {socialData ? (
            <BestPloggerCarousel items={socialData.bestPlogger} />
          ) : (
            <></>
          )}
        </Box>
        <Box>
          <Title>실시간 플로깅 인증</Title>
          {certArray ? <CertificationLayout items={certArray} /> : <></>}
        </Box>
      </Container>
    </ScrollView>
  );
}

const Container = styled.View`
  align-items: flex-start;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 900;
  padding-left: 20px;
`;

const Box = styled.View`
  width: 100%;
  margin: 10px 0px 20px 0px;
`;
