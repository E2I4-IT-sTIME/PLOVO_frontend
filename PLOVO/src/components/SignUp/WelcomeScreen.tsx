import { View,  Image,  StyleSheet, Text, Dimensions } from "react-native";
import SignUpButton from "./SignUpButton";

const WelecomeScreen = () => {
    const title = "환경을 위한,\n 그리고 나를 위한\n 등산 플로깅";
    const sub = "간단한 정보 입력 후,\n플로보를 자유롭게 이용할 수 있어요.";

    return(
        <View style={styles.container}>
            <View  style={styles.logoArea}>
                <View style={styles.textbox}>
                    <Text style={styles.title}>WELCOME</Text>
                    <Text style={styles.sub}>플로보가 처음이시네요!</Text>
                    <Text style={styles.sub}>{sub}</Text>
                </View>
                <SignUpButton 
                    text="GO"
                    onPress={()=>{}}
                />
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
    },
    logoArea: {
        flex: 0.7,
        width: '80%',
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
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 30,
        color:'#277BC0',
        marginBottom: 15
    },
    sub:{
        width: '100%',
        textAlign: 'left',
        fontWeight: '400',
        fontSize: 20,
        color:'black'
    },
});

export default WelecomeScreen;