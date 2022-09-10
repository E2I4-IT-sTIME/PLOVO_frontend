import React from "react";
import { View,  Image,  StyleSheet, Text, Dimensions, CheckBox } from "react-native";
import SignUpButton from "./SignUpButton";
import TermsButton from "./TermsButton";

const TermsScreen = (props:any) => {
    const title = "이용약관에\n동의해주세요";
    const { changeIndex } = props;

    return(
        <View style={styles.container}>
            <View  style={styles.logoArea}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.textbox}>
                    <Text style={styles.sub2}>전체동의</Text>
                    <View>
                        <TermsButton text="[필수] 개인정보 처리방침" onPress={()=>{}} />
                        <TermsButton text="[필수] 위치 기반 서비스 이용약관" onPress={()=>{}} />
                        <TermsButton text="[필수] 플로보 이용약관" onPress={()=>{}} />
                        <TermsButton text="[선택] 앱 푸시 알림 수신" onPress={()=>{}} />
                    </View>
                </View>
                <SignUpButton 
                    text="NEXT"
                    onPress= {() => { changeIndex(3); }}             
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
    textbox: {
        width:'100%', 
        marginTop: 20       
    },
    title: {
        width: '100%',
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 30,
        color:'black',
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
        fontWeight: '600',
        fontSize: 20,
        color:'black',
        marginBottom: 20
    },
});

export default TermsScreen;