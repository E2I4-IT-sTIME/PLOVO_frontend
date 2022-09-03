import { View,  Image,  StyleSheet, Text, Button, Dimensions } from "react-native";
import logo from "../../img/logo.png";

const LoginScreen = () => {
    const title = "플로깅을 새롭게,\n나의 일상을 건강하게-";

    return(
        <View style={styles.container}>
            <View  style={styles.logoArea}>
                <View  style={styles.view1}>
                    <Image source={logo} style={styles.img} />
                    <Text style={styles.title}>{title}</Text>
                </View>                
                <View style={styles.view2}>
                    <Button title="구글 로그인" />
                    <Button title="카카오 로그인" />
                    <View style={styles.textbox}>
                        <Text style={styles.sub}>이용약관</Text>
                        <Text style={styles.sub}>개인정보 처리 방침</Text>
                    </View>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    view1: {
        flex:1,
        justifyContent: 'center',
        height:'50%',  
    },
    view2: {
        flex:1,
        justifyContent: 'center',
        width:'50%', 
    },
    img: {
        width: 200, 
        height:200,
    },
    textbox: {
        marginTop:20
    },
    title: {
        width:'100%',
        textAlign: 'center',
        fontSize: 24,
        color:'white',
    },
    sub:{
        width:'100%',
        textAlign: 'center',
        fontSize: 14,
        color:'white',
        fontStyle: 'light'
    },
});

export default LoginScreen;