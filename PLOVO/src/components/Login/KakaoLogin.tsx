import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";

// other import settings...
const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const KakaoLogin = ({ navigation }: any) => {
  const id = "b9f6eaeb47ed2f08476461345671880c";
  const url = "http://52.78.4.217:8080/api/code";

  const LogInProgress = (data: any) => {
    // access code는 url에 붙어 장황하게 날아온다.
    // substringd으로 url에서 code=뒤를 substring하면 된다.

    const exp = "code=";

    var condition = data.indexOf(exp);

    if (condition != -1) {
      var request_code = data.substring(condition + exp.length);
      // console.log("access code :: " + request_code);
      // console.log("제발", data);
      requestToken(request_code);
      // tmpFetch();
    }
  };

  const requestToken = async (request_code: string) => {
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
        // console.log("통신 성공", returnValue);
        // sendTokenToServer(returnValue);
        sessionTest(returnValue);
      })
      .catch(function (error) {
        console.log("통신 실패 처음", error);
      });

    // axios({
    //   method: "get",
    //   url: request_code,
    // })
    //   .then((response) => {
    //     console.log("통신 성공", response);
    //   })
    //   .catch((error) => {
    //     console.log("통신 실패", error);
    //   });
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
        const jwt = response.data;
        console.log("통신 성공 찐", jwt);
      })
      .catch((error) => {
        console.log("통신 실패 센드토큰투서버", error);
      });
  };

  const sessionTest = (token: string) => {
    axios({
      method: "get",
      url: `http://52.78.4.217:8080/auth/test`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("통신 성공 테스트", response);
      })
      .catch((error) => {
        console.log("통신 실패 테스트", error);
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
          LogInProgress(event.nativeEvent["url"]);
        }}
      />
    </View>
  );
};

export default KakaoLogin;
