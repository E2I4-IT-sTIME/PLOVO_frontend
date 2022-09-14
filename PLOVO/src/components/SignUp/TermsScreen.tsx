import React, { useState } from "react";
import { View,  Image,  StyleSheet, Text, Dimensions, CheckBox, Alert } from "react-native";
import { color } from "react-native-reanimated";
import SignUpButton from "./SignUpButton";
import TermsButton from "./TermsButton";

const TermsScreen = (props:any) => {
    const title = "이용약관에\n동의해주세요";
    const { changeIndex } = props;

    // const [agreeTerms, setAgreeTerms] = useState({
    //     "term1" : false,
    //     "term2" : false,
    //     "term3" : false,
    //     "term4" : false
    // });

    const [agreeTerm1, setAgreeTerm1] = useState(false);
    const [agreeTerm2, setAgreeTerm2] = useState(false);
    const [agreeTerm3, setAgreeTerm3] = useState(false);
    const [agreeTerm4, setAgreeTerm4] = useState(false);

    
    let isAgree = agreeTerm1 && agreeTerm2 && agreeTerm3;

    return(
        <View style={styles.container}>
            <View  style={styles.logoArea}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.textbox}>
                    <Text style={styles.sub2}>전체동의</Text>
                    <View>
                        <TermsButton text="[필수] 개인정보 처리방침" onPress={() => setAgreeTerm1(!agreeTerm1)} />
                        <TermsButton text="[필수] 위치 기반 서비스 이용약관" onPress={() => setAgreeTerm2(!agreeTerm2)} />
                        <TermsButton text="[필수] 플로보 이용약관" onPress={() => setAgreeTerm3(!agreeTerm3)} />
                        <TermsButton text="[선택] 앱 푸시 알림 수신" onPress={() =>setAgreeTerm4(!agreeTerm4)} />
                    </View>
                </View>
                {!isAgree ? <Text style={{color:'#F94C66'}}>필수 약관에 모두 동의해야 합니다!</Text> : <Text></Text> }
                <SignUpButton 
                    disable={!isAgree} 
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