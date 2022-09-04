import {Image,  ImageSourcePropType,  StyleProp,  StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

interface source1 {
    text: string,
    onPress: () => void,
    src : ImageSourcePropType,
    buttonStyle? : StyleProp<ViewStyle>
}

export default function SocialButton(props: source1) {
    return(
        <TouchableOpacity
            style={[styles.button, props.buttonStyle]}
            onPress={props.onPress}
            >
            <Image source={props.src} style={{marginLeft: 10}} />
            <Text style={styles.btnText}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        width: '100%',
        height: 50,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    btnText: {
        color: '#391B1B', 
        width: '75%',
        fontSize: 16, 
        fontWeight: 'bold',
        textAlign: 'center'
    }
});




