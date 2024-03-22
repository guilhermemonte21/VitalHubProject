import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//* Telas
import { PatientHomeScreen } from "../PatientHomeScreen/PatientHomeScreen";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";

//* Chamando os elementos de estilização
import { ContentIcon, TextIcon } from "./Style";

//*
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export const Main = () => {
  return (
    <BottomTab.Navigator
      headerShown={false}
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#FFFFFF", height: 80, paddingTop: 10 },
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,

        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ECF2FF" : "transparent"
                }
              >
                <FontAwesome name="calendar" size={18} color={"#4E4B59"} />
                {focused && <TextIcon>Agenda</TextIcon>}
              </ContentIcon>
            );
          } else {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ECF2FF" : "transparent"
                }
              >
                <FontAwesome5 name="user-circle" size={18} color={"#4E4B59"} />
                {focused && <TextIcon>Perfil</TextIcon>}
              </ContentIcon>
            );
          }
        },
      })}
    >
      <BottomTab.Screen
        headerShown={false}
        name="Home"
        component={PatientHomeScreen}
      />
      <BottomTab.Screen
        headerShown={false}
        name="Profile"
        component={ProfileScreen}
      />
    </BottomTab.Navigator>
  );
};
