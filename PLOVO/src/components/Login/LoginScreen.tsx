import { View,  Image,  StyleSheet, Text, Button, Dimensions } from "react-native";
import logo from "../../img/logo.png";

const LoginScreen = () => {
    const title = "플로깅을 새롭게,\n나의 일상을 건강하게-";

    return(
        <View style={styles.container}>
            <View  style={styles.logoArea}>
                <Image source={logo} style={{width: 150, height:150}} />
                <Text style={styles.title}>{title}</Text>

                <Button title="구글 로그인" />
                <Button title="카카오 로그인" />
                <Text>이용약관</Text>
                <Text>개인정보 처리 방침</Text>
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
        width:'100%',
        textAlign: 'right'
    },
    sub:{

    },
});

export default LoginScreen;