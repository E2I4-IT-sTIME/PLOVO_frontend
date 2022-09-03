import { View,  Image,  StyleSheet, Text, Dimensions } from "react-native";
import aboutImg1 from "../../img/about1.png";

const About1 = () => {
    const title = "환경을 위한,\n 그리고 나를 위한\n 등산 플로깅";
    const sub = "등산하며 주운 쓰레기, \n 정상에 있는 플로보에 넣어주세요.\n 등산 플로깅 기록을 관리하고\n SNS에 공유할 수 있습니다.";

    return(
        <View style={styles.container}>
            <View  style={styles.logoArea}>
                <Image style={styles.img} source={aboutImg1}/>
                <View style={styles.textbox}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.sub}>{sub}</Text>
                </View>
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
        flex: 0.7,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    img: {
        width: 320, 
        height: 260,
    },
    textbox: {
        width:'90%',        
    },
    title: {
        width: '100%',
        textAlign: 'right',
        fontWeight: '700',
        fontSize: 30,
        color:'white',
        marginBottom: 15
    },
    sub:{
        width: '100%',
        textAlign: 'right',
        fontWeight: '400',
        fontSize: 20,
        color:'white'
    },
});

export default About1;