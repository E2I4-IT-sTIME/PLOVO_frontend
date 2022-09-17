import { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import PlogRecommendCarousel from "../Plog/PlogRecommendCarousel";

interface RecommendCard {
    name: string; //산이름
    weight: string; //플로보 현재 무게
    rank: number;
}

const dummy: Array<RecommendCard> = [
    { name: "북한산", weight: "0.1", rank: 0 },
    { name: "설악산", weight: "0.2", rank: 1 },
    { name: "지리산", weight: "0.3", rank: 2 },
    { name: "한라산", weight: "0.4", rank: 3 },
    { name: "백두산", weight: "0.5", rank: 4 },
  ];

const win = Dimensions.get('window');
const PlogMountain = (props:any) => {
    const screenWidth = Math.round(Dimensions.get("window").width);
    const screenHeight = Math.round(Dimensions.get("window").height);
    const [page, setPage] = useState(0);
    const MountainResList = props.data;

    return (
        <View style={styles.container}>
            <Text style={styles.title}><Text style={{fontWeight:'bold', color:'#439F82'}}>플로보</Text>를 채워주세요</Text>
            <PlogRecommendCarousel
                gap={10}
                offset={0}
                pages={dummy}
                pageWidth={screenWidth - (35) * 2}
                page={page}
                setPage={setPage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: win.height/3,
        padding: 20
    },
    title: {
        textAlign: 'left',
        fontSize: 20,
    },
});

export default PlogMountain;