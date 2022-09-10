import { View,  Image,  StyleSheet, Text, Dimensions } from "react-native";
import SignUpButton from "./SignUpButton";

const WelecomeScreen = (props:any) => {
    const sub = "간단한 정보 입력 후,\n플로보를 자유롭게 이용할 수 있어요.";

    const { changeIndex } = props;

    return(
        <View style={styles.container}>
            <View  style={styles.logoArea}>
                <View style={styles.textbox}>
                    <Text style={styles.title}>WELCOME</Text>
                    <Text style={styles.sub1}><Text style={styles.blueText}>플로보</Text>가 처음이시네요!</Text>
                    <Text style={styles.sub2}>{sub}</Text>
                </View>
                <SignUpButton 
                    text="GO"
                    onPress= {
                        () => {
                            changeIndex(2);
                        }
                    }             
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
        flex: 0.8,
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    img: {
        width: 320, 
        height: 260,
    },
    textbox: {
        width:'100%', 
        marginTop: 20       
    },
    title: {
        width: '100%',
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 40,
        color:'#277BC0',
        marginBottom: 20
    },
    sub1:{
        width: '100%',
        textAlign: 'left',
        fontWeight: '600',
        fontSize: 25,
        color:'black',
        marginBottom: 12
    },
    blueText: {
        color:'#277BC0'
    },
    sub2:{
        width: '100%',
        textAlign: 'left',
        fontWeight: '400',
        fontSize: 17,
        color:'black'
    },
});

export default WelecomeScreen;