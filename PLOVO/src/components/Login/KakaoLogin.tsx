import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";

// other import settings...
const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const KakaoLogin = ({ navigation }: any) => {
  const id = "d8cd211c019638de5f91044292868dd1";
  const url = "http://52.78.4.217:8080/oauth/token";

  function LogInProgress(data: any) {
    // access code는 url에 붙어 장황하게 날아온다.
    // substringd으로 url에서 code=뒤를 substring하면 된다.
    const exp = "code=";

    var condition = data.indexOf(exp);

    if (condition != -1) {
      var request_code = data.substring(condition + exp.length);
      console.log("access code :: " + request_code);
      // requestToken(request_code);
    }
    // console.log("제발", data);
  }

  const requestToken = async (request_code: string) => {
    // var returnValue = "none";
    // var request_token_url = "https://kauth.kakao.com/oauth/token";
    // axios({
    //   method: "post",
    //   url: request_token_url,
    //   params: {
    //     grant_type: "authorization_code",
    //     client_id: "d8cd211c019638de5f91044292868dd1",
    //     redirect_uri: `http://52.78.4.217:8080/oauth/token`,
    //     code: request_code,
    //   },
    // })
    //   .then(function (response) {
    //     // returnValue = response.data.access_token;
    //     console.log("통신 성공", response);
    //   })
    //   .catch(function (error) {
    //     console.log("통신 실패", error);
    //   });
    // console.log("뭘까", data);
    // axios
    //   .get(url, {
    //     params: {
    //       code: request_code,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={["*"]}
        scalesPageToFit={false}
        style={{ marginTop: 30 }}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${id}&redirect_uri=${url}`,
        }}
        injectedJavaScript={runFirst}
        javaScriptEnabled={true}
        onMessage={(event) => {
          LogInProgress(event.nativeEvent["url"]);
        }}
      />
    </View>
  );
};

export default KakaoLogin;
