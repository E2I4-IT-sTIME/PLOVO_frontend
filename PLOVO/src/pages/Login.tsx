import { ScrollView } from "react-native";
import About1 from "../components/Login/About1";
import About2 from "../components/Login/About2";
import About3 from "../components/Login/About3";
import LoginScreen from "../components/Login/LoginScreen";

const Login = () => {
    return(
        <ScrollView horizontal={true}>
            <About1 />
            <About2 />
            <About3 />
            <LoginScreen />
        </ScrollView>
    );
}

export default Login;