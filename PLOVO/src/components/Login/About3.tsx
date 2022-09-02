import { View,  Image,  StyleSheet, Text, Dimensions } from "react-native";
import aboutImg1 from "../../img/about3.png";

const About3 = () => {
    const title = "작심삼일은 안녕!\n꾸준히 채워나가는\n내 등산 기록";
    const sub = "플로보는 환경 뿐 아니라\n당신의 삶 까지-\n건강을 채워드려요.";

    return(
        <View style={styles.container}>
            <View  style={styles.logoArea}>
                <Image source={aboutImg1} style={{width: 305, height:305}} />
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
        backgroundColor: 'red',
    },
    title: {
        
    },
    sub:{

    },
});

export default About3;