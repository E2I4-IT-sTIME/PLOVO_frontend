import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TutorialCard from "./TutorialCard";
import tutorial1 from "../../img/tutorial1.png";
import tutorial2 from "../../img/tutorial2.png";
import tutorial3 from "../../img/tutorial3.png";
import tutorial4 from "../../img/tutorial4.png";

const win = Dimensions.get('window');
const Tutorial = () => {
    const cardText1 = "전국 46개 산의\n실시간 쓰레기 양을\n확인하고,\n등산로를 결정해요.";
    const cardText2 = "플로보에서\n시작 버튼을 누르고\n플로깅을 시작해요.";
    const cardText3 = "플로깅을 종료하면,\n정상에 있는 플로보의\n입을 열 수 있어요.\n그 안에 쓰레기를 쏙!";
    const cardText4 = "플로보에서\n당신의 플로깅 기록을\n확인하고, 공유해요.";

    return (
        <View style={styles.container}>
            <Text style={styles.title}><Text style={{fontWeight:'bold', color:'#277BC0'}}>플로보</Text> 100배 즐기기</Text>
            <ScrollView horizontal={true}>
                <TutorialCard color="#43A7E0" imgSrc={tutorial1} content={cardText1} />
                <TutorialCard color="#53BF9D" imgSrc={tutorial2} content={cardText2} />
                <TutorialCard color="#FFB200" imgSrc={tutorial3} content={cardText3} />
                <TutorialCard color="#F94C66" imgSrc={tutorial4} content={cardText4} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: win.height/2.8,
        padding: 20
    },
    title: {
        textAlign: 'left',
        fontSize: 20,
        marginBottom: 10
    },
});

export default Tutorial;