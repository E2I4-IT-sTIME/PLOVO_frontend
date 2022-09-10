import React from "react";
import { View,  Image,  StyleSheet, Text, Dimensions, TextInput } from "react-native";
import SignUpButton from "./SignUpButton";

const NameScreen = (props:any) => {
    const title = "플로보에서 사용할\n이름을 알려주세요.";
    const { changeIndex } = props;

    return(
        <View style={styles.container}>
            <View  style={styles.logoArea}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.inputView}><TextInput style={styles.input} placeholder="이름을 입력해주세요"/></View>
                <SignUpButton 
                    text="NEXT"
                    onPress= {() => { changeIndex(4); }}             
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
    inputView:{
        flex: 1,
        width:'100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    input: {
        width:'100%',
        height: 50,
        borderBottomWidth: 1,
        padding: 10,  
        fontSize: 20  
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

export default NameScreen;