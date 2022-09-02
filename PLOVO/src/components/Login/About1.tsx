import { View,  Image,  StyleSheet, Text, Dimensions } from "react-native";
import aboutImg1 from "../../img/about1.png";

const About1 = () => {
    const title = "환경을 위한,\n 그리고 나를 위한\n 등산 플로깅";
    const sub = "등산하며 주운 쓰레기, \n 정상에 있는 플로보에 넣어주세요.\n 등산 플로깅 기록을 관리하고\n SNS에 공유할 수 있습니다.";

    return(
        <View style={styles.container}>
            <View  style={styles.logoArea}>
                <Image style={styles.img} source={aboutImg1} style={{width: 305, height:305}} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.sub}>{sub}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#277BC0'
    },
    logoArea: {
        flex: 0.8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    img: {
        
    },
    title: {
        width: '100%',
        textAlign: 'right',
        fontWeight: '600',
        fontSize: 30
    },
    sub:{
        width: '100%',
        textAlign: 'right',
        fontSize: 15
    },
});

export default About1;