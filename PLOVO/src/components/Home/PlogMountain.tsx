import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import PlogRecommendCarousel from "../Plog/PlogRecommendCarousel";
import axios from "axios";

interface RecommendCard {
  mname: string; //산이름
  weight: string; //플로보 현재 무게
  distance: string;
  mimage: string;
  time: string;
}

const win = Dimensions.get("window");

const PlogMountain = (props: any) => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);
  const [page, setPage] = useState(0);
  const [recommendList, setRecommendList] = useState<Array<RecommendCard>>();

  const getMonutainRecommend = () => {
    axios
      .get("http://52.78.4.217:8080/mountain/recommend", {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        const list: Array<RecommendCard> = res.data;
        if (list.length > 5) {
          setRecommendList(list.slice(0, 4));
        } else {
          setRecommendList(list);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMonutainRecommend();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={{ fontWeight: "bold", color: "#439F82" }}>플로보</Text>를
        채워주세요
      </Text>
      {recommendList ? (
        <View style={styles.box}>
          <PlogRecommendCarousel
            gap={10}
            offset={0}
            pages={recommendList}
            pageWidth={screenWidth - 35 * 2}
            page={page}
            setPage={setPage}
          />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: win.height / 3,
    padding: 20,
  },
  title: {
    textAlign: "left",
    fontSize: 20,
  },
  box: {
    marginTop: -10,
    zIndex: -1,
  },
});

export default PlogMountain;
