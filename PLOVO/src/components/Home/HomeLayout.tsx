import { ScrollView } from "react-native-gesture-handler";
import Header from "../Header/Header";
import PlogMountain from "./PlogMountain";
import Tutorial from "./Tutorial";
import { Dimensions, StyleSheet, View } from 'react-native';
import UpdatePlog from "./UpdatePlog";
import { useEffect, useState } from "react";
import axios from "axios";

const win = Dimensions.get('window');
const HomeLayout = () => {
    const [mountainResList, setMountainResList] = useState([]);
    const [recentPlovos, setRecentPlovos] = useState([]);

    useEffect(() =>{
        LookupHandler();
      }, []);

    const LookupHandler = async () => {
        try {
          let res = await axios({
            url: "http://52.78.4.217:8080/home",
            method: 'get',
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              withCredentials:true,
            }       
          })
          if(res.status == 200){
            console.log(res.data);
            setMountainResList(res.data.getMountainResList);
            setRecentPlovos(res.data.getRecentPlovos);
          }
        } catch(err){
          console.log(err);  
        }
      };

    return(
        <View style={{backgroundColor:'#fff'}}>
            <Header title="HOME" color={false} />
            <ScrollView style={styles.container} horizontal={false}>
                <Tutorial />
                <PlogMountain data = {mountainResList}/>
                <UpdatePlog data = {recentPlovos}/>
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