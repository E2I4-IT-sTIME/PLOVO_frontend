import { Dimensions, ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import About1 from "../components/Login/About1";
import About2 from "../components/Login/About2";
import About3 from "../components/Login/About3";
import LoginScreen from "../components/Login/LoginScreen";
import Swiper from 'react-native-swiper'

const Login = () => {
    return(
        <Swiper horizontal={true} style={styles.container} dot={
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,.3)',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 5,
                marginRight: 5
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#fff',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />            
          }
          paginationStyle={{
            bottom: 50
          }}
          loop={false}
          >
            
            <About1 />
            <About2 />
            <About3 />
            <LoginScreen />
        </Swiper>
    );
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
    },
});

export default Login;