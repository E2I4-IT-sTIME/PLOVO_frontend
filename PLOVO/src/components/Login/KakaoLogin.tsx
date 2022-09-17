import React from "react";
import { Alert, View } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../Res/RootStackParamList";

export type HomeScreenProps = StackScreenProps<
  RootStackParamList,
  "KakaoLogin"
>;

// other import settings...
const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const KakaoLogin = ({ navigation, route }: HomeScreenProps) => {
  const id = "b9f6eaeb47ed2f08476461345671880c";
  const url = "http://52.78.4.217:8080/api/code";

  const storeData = async (jwt: string) => {
    try {
      await AsyncStorage.setItem("token", JSON.stringify(jwt));
    } catch (e) {}
  };

  const LogInProgress = (data: any) => {
    const exp = "code=";

    var condition = data.indexOf(exp);
    console.log(condition);

    if (condition != -1) {
      var request_code = data.substring(condition + exp.length);
      requestToken(request_code);
    }
  };

  const requestToken = async (request_code: string) => {
    console.log("실행시행");
    var returnValue = "none";
    var request_token_url = "https://kauth.kakao.com/oauth/token";
    axios({
      method: "post",
      url: request_token_url,
      params: {
        grant_type: "authorization_code",
        client_id: id,
        redirect_uri: url,
        code: request_code,
      },
    })
      .then(function (response) {
        returnValue = response.data.access_token;
        sendTokenToServer(returnValue);
      })
      .catch(function (error) {
        console.log("통신 실패 처음", error);
      });
  };

  const sendTokenToServer = (token: string) => {
    axios({
      method: "get",
      url: `http://52.78.4.217:8080/api/access_token`,
      params: {
        token: token,
      },
    })
      .then((response) => {
        const check = response.data.isExist;
        const jwt = response.data.jwtToken;
        if (check) {
          navigation.reset({ routes: [{ name: "SignUp" }] });
          storeData(jwt);
        } else {
          navigation.reset({ routes: [{ name: "Main" }] });
          storeData(jwt);
        }
      })
      .catch((error) => {
        console.log("통신 실패 센드토큰투서버", error);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={["*"]}
        scalesPageToFit={false}
        style={{ marginTop: 30 }}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?client_id=${id}&redirect_uri=${url}&response_type=code`,
        }}
        injectedJavaScript={runFirst}
        javaScriptEnabled={true}
        onMessage={(event) => {
          LogInProgress(event.nativeEvent.url);
        }}
      />
    </View>
  );
};

export default KakaoLogin;
