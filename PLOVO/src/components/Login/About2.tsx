import { View,  Image,  StyleSheet, Text, Dimensions } from "react-native";
import aboutImg1 from "../../img/about2.png";

const About2 = () => {
    const title = "언제 어디서나\n플로보와 함께라면";
    const sub = "새벽 등산, 오후 등산, 야간 등산…\n시간과 장소는 중요하지 않아요.\n플로보와 함께라면!";

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
        alignItems: 'center',
    },
    img: {
        width: 350, 
        height: 280,
    },
    textbox: {
        width:'80%',        
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

export default About2;