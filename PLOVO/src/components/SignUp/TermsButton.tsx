import {Image,  ImageSourcePropType,  StyleProp,  StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from "react";

interface source1 {
    text: string,
    onPress: any,
}

export default function TermsButton(props: source1) {
    const [isPressed, setIsPressed] = useState(false);
    const changeIsPressed = (state:any) => {
        setIsPressed(!state);
    }

    return(
        <TouchableOpacity
            style={[styles.button, {backgroundColor: isPressed ? '#277BC0' : '#EDEDED'}]}
            onPress={() => {
                props.onPress();
                changeIsPressed(isPressed);
            }}
            >
                <Text style={[styles.btnText, {color: isPressed ? '#fff' : 'black'}]}>
                    {props.text}
                </Text>     
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        width:'100%',
        height: 55,
        borderRadius: 15,   
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        marginBottom: 15
    },
    btnText: {
        width: '90%',
        marginLeft: 25,
        fontSize: 17, 
        textAlign: 'left'
    },
    linearGradient: {
        flex: 1,
        height: 50,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});
