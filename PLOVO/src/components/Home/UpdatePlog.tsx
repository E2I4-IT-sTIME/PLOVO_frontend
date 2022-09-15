import { View, Text, StyleSheet, Dimensions } from "react-native";
import CertificationLayout from "../Social/CertificationLayout";

const UpdatePlog = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>최근 업데이트한<Text style={{fontWeight:'bold', color:'#277BC0'}}> 플로거</Text></Text>
            <Text> 최근 업데이트한 플로거 ~~~~~</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        padding: 20
    },
    title: {
        textAlign: 'left',
        fontSize: 20,
        marginBottom: 10
    },
});

export default UpdatePlog;