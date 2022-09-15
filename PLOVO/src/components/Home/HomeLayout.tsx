import { ScrollView } from "react-native-gesture-handler";
import Header from "../Header/Header";
import PlogMountain from "./PlogMountain";
import Tutorial from "./Tutorial";
import { Dimensions, StyleSheet, View } from 'react-native';
import UpdatePlog from "./UpdatePlog";

const win = Dimensions.get('window');
const HomeLayout = () => {
    return(
        <View style={{backgroundColor:'#fff'}}>
            <Header title="HOME" color={false} />
            <ScrollView style={styles.container} horizontal={false}>
                <Tutorial />
                <PlogMountain />
                <UpdatePlog />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height : win.height,
    },
});

export default HomeLayout;