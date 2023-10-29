import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Welcome from "./screens/welcome";
import Speedtest from "./screens/Speedtest";
import Inspector from "./screens/Inspector";
import Heatmap from "./screens/Heatmap";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen 
        name="Speedtest"
        component={Speedtest} 
        options={{ title: "Speedtest" ,
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="speedometer" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="Inspector"
        component={Inspector} 
        options={{ title: "Inspector" ,
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          )
        }}
      />

      <Tab.Screen 
        name="Heatmap"
        component={Heatmap} 
        options={{ title: "Heatmap" ,
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-map-marker" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

function Nav(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;