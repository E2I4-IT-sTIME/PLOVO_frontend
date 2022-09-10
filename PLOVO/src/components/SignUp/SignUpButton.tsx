import {Image,  ImageSourcePropType,  StyleProp,  StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

interface source1 {
    text: string,
    onPress: () => void,
}

export default function SignUpButton(props: source1) {
    return(
        <TouchableOpacity
            style={styles.button}
            onPress={props.onPress}
            >
                <LinearGradient 
                    colors={['#277BC0', '#53BF9D', '#FFB200']} 
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }} 
                    style={styles.linearGradient}>
                <Text style={styles.btnText}>
                    {props.text}
                </Text>
                </LinearGradient>
        
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        width:'90%',
        height: 50,
        borderRadius: 15,      
    },
    btnText: {
        color: '#ffffff', 
        width: '75%',
        fontSize: 35, 
        fontWeight: '600',
        textAlign: 'center'
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




