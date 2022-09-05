import { View,  Image,  StyleSheet, Text, Dimensions } from "react-native";
import aboutImg1 from "../../img/about3.png";

const About3 = () => {
    const title = "작심삼일은 안녕!\n꾸준히 채워나가는\n내 등산 기록";
    const sub = "플로보는 환경 뿐 아니라\n당신의 삶 까지-\n건강을 채워드려요.";

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

export default About3;