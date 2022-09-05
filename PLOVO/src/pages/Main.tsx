import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Plog from "../pages/Plog";
import Social from "../pages/Social";
import Record from "../pages/Record";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

//로그인 후 모든 화면의 기준이 되는 레이아웃 페이지
export default function Main() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Plog"
        component={Plog}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Social"
        component={Social}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Record"
        component={Record}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
