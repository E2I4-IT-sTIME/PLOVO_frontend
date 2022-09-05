import { View,  Image,  StyleSheet, Text, Button, Dimensions, TouchableOpacity } from "react-native";
import logo from "../../img/logo.png";
import kakao from "../../img/kakao.png";
import google from "../../img/google.png";
import SocialButton from "./SocialButton";

const LoginScreen = () => {
    const title = "플로깅을 새롭게,\n나의 일상을 건강하게-";
    const sub = "이용약관\n개인정보 처리 방침"

    return(
        <View style={styles.container}>
            <View  style={styles.logoArea}>
                <View  style={styles.view1}>
                    <Image source={logo} style={styles.img} />
                    <Text style={styles.title}>{title}</Text>
                </View>                
                <View style={styles.view2}>
                     <SocialButton 
                        text = "Sign in with Google"
                        src = {google}
                        onPress={() => {}}
                        buttonStyle={styles.google}
                     />
                     <SocialButton 
                        text = "Login with Kakao"
                        src = {kakao}
                        onPress={() => {}}
                        buttonStyle={styles.kakao}
                     />
                    <View style={styles.textbox}>
                        <Text style={styles.sub}>{sub}</Text>
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
        width:'65%', 
    },
    img: {
        width: 200, 
        height:200,
        marginRight: 20
    },
    title: {
        width:'100%',
        textAlign: 'center',
        fontSize: 20,
        color:'white',
        marginLeft: 10
    },
    sub:{
        width:'100%',
        textAlign: 'center',
        fontSize: 14,
        color:'white',
        fontStyle: 'light'
    },
    google:{
        backgroundColor:'white',
    },
    kakao: {
        backgroundColor:'#FEE500',
    }
});

export default LoginScreen;