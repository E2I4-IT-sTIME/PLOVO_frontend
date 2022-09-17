import React, { useState } from "react";
import { View,  Image,  StyleSheet, Text, Dimensions, TextInput, Button } from "react-native";
import SignUpButton from "./SignUpButton";
import * as ImagePicker from 'expo-image-picker';
import loadImg from  "../../img/imageButton.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";

const ProfileScreen = (props:any) => {
    const title = "프로필 사진을\n등록해주세요.";
    const sub = "등록을 원하지 않는다면,\n그냥 넘어가주세요!";
    const imgMsg = "프로필 사진은,\n플로보 커뮤니티에서만 사용됩니다.";
    const { changeIndex } = props;
    const userId = 11;

    const [image, setImage] = useState("");


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const onSubmitHandler = () => {
        if(image == "") return;
        axios
          .post(
            "http://52.78.4.217:8080/join/" + {userId} + "/image",
            {
              id: userId,
              image: image,
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log("이미지 전송 선공");
          })
          .catch((res) => {
            console.log("Error!");
          });
      };

    return(
        <View style={styles.container}>
            <View  style={styles.logoArea}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.sub1}>{sub}</Text>
                <View style={styles.inputView} >
                    <TouchableOpacity
                        onPress={pickImage}
                    >
                       {image=="" ? <Image style={styles.img} source={loadImg} /> : <Image source={{ uri: image }} style={styles.img} />   }
                    </TouchableOpacity>   
                    <Text style={{textAlign:'center'}}>{imgMsg}</Text>                 
                </View>
                
                <SignUpButton 
                    disable={false}
                    text="NEXT"
                    onPress= {() => { changeIndex(5);  onSubmitHandler()}}             
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
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img:{
        width: 200, height: 200,
        borderRadius: 20,
        marginBottom: 5
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
        marginBottom: 15
    },
    sub1:{
        width: '100%',
        textAlign: 'left',
        fontSize: 18,
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

export default ProfileScreen;

