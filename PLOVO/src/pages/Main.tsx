import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Plog from "../pages/Plog";
import Social from "../pages/Social";
import Record from "../pages/Record";
import "react-native-gesture-handler";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";

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
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              style={{ color: focused ? "#277BC0" : "#404040" }}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Plog"
        component={Plog}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="play"
              style={{ color: focused ? "#277BC0" : "#404040" }}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Social"
        component={Social}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="profile"
              style={{ color: focused ? "#277BC0" : "#404040" }}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Record"
        component={Record}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              style={{ color: focused ? "#277BC0" : "#404040" }}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
