import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View,  Image,  StyleSheet, Text, Dimensions } from "react-native";
import { RootStackParamList } from "../Res/RootStackParamList";
import SignUpButton from "./SignUpButton";


export type HomeScreenProps = StackScreenProps<RootStackParamList, "Login">;

const CompleteScreen = (props:any) => {
    const title = "회원가입이\n완료 되었어요!";
    const sub1 = "\n건강한 등산 플로깅을-.";
    const sub2 = "플로보만의 다양한 기능을\n자유롭게 이용해보세요!";
    const { tmpLocate } = props;

    return(
        <View style={styles.container}>
            <View  style={styles.logoArea}>
                <View style={styles.textbox}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.sub1}>이제 <Text style={styles.blueText}>플로보</Text>에서{sub1}</Text>
                    <Text style={styles.sub2}>{sub2}</Text>
                </View>
                <SignUpButton 
                    disable={false}
                    text="START"
                    onPress= {() => tmpLocate()}             
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
        marginTop: '20%',
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

export default CompleteScreen;

