import { View, Text, StyleSheet, Dimensions, ViewStyle } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import CertificationCarousel from "../Social/CertificationCarousel";
import CertificationItem from "../Social/CertificationItem";

const data = {
    name: "북한산",
    items: [
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://news.imaeil.com/photos/2020/07/28/2020072818340699789_l.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://i.pinimg.com/564x/63/38/9d/63389d248b1e23103da2290d5ca048a8.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://i.pinimg.com/736x/d3/f4/d9/d3f4d93e1909e8b29d000fa9c546ffe2.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://i.pinimg.com/564x/57/01/52/5701523b2d63af47d8a20e1bc982b692.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
    ],
  }

  interface cardProps {
    time: string;
    date: string;
    distance: number;
    weight: number;
    name: string;
    img: string;
    profile: string;
  }
  
  interface IPage {
    item: cardProps;
    style: ViewStyle;
  }

const win = Dimensions.get('window');
const UpdatePlog = (props:any) => {
    const RecentPlovos = props.data;
    let id = 0;
    return(
        <View style={styles.container}>
            <Text style={styles.title}>최근 업데이트한<Text style={{fontWeight:'bold', color:'#277BC0'}}> 플로거</Text></Text>
            <Swiper
            horizontal={true}
            dot={
                <View
                  style={{
                    backgroundColor: "rgba(255,255,255,.3)",
                    width: 13,
                    height: 13,
                    borderRadius: 7,
                    marginLeft: 5,
                    marginRight: 5,
                  }}
                />
              }
              activeDot={
                <View
                  style={{
                    backgroundColor: "#fff",
                    width: 13,
                    height: 13,
                    borderRadius: 7,
                    marginLeft: 7,
                    marginRight: 7,
                  }}
                />
              }
              paginationStyle={{
                bottom: 30,
              }}
            loop={false}>
                {data.items.map((ele) => { id++; return (<CertificationItem item={ele}  style={{ width: win.width-70, marginHorizontal: 15 }} key={id} /> )}) }   
            </Swiper>            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: win.height/1.8,
        padding: 20
    },
    title: {
        textAlign: 'left',
        fontSize: 20,
        marginBottom: 10
    },
});

export default UpdatePlog;