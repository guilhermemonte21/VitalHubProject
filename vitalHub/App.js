import { StatusBar } from "expo-status-bar";
import SplashScreen from "./src/screens/SplashScreen/SplashScreen";
import React, { useEffect, useState } from "react";
import {
  requestForegroundPermissionAsync,
  getCurrentPositionAsync,
} from "expo-location";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/screens/Navigation/Navigation";
import { LoginScreen } from "./src/screens/LoginScreen/LoginScreen";
import { ForgotPasswordScreen } from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";
import { EmailVerificationScreen } from "./src/screens/EmailVerificationScreen/EmailVerificationScreen";
import { NewPasswordScreen } from "./src/screens/NewPasswordScreen/NewPasswordScreen";
import { CreateAccountScreen } from "./src/screens/CreateAccountScreen/CreateAccountScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen/ProfileScreen";
import { DoctorHomeScreen } from "./src/screens/DoctorHomeScreen/DoctorHomeScreen";
import { MedicalRecordScreen } from "./src/screens/MedicalRecordScreen/MedicalRecordScreen";
import { PatientHomeScreen } from "./src/screens/PatientHomeScreen/PatientHomeScreen";
import { SelectClinicScreen } from "./src/screens/SelectClinicScreen/SelectClinicScreen";
import { SelectDoctorScreen } from "./src/screens/SelectDoctorScreen/SelectDoctorScreen";
import { SelectDateScreen } from "./src/screens/SelectDateScreen/SelectDateScreen";
import { LocationScreen } from "./src/screens/LocationScreen/LocationScreen";
import { Main } from "./src/screens/Main/Main";
import MapViewDirections from "react-native-maps-directions";
import { StyleSheet } from "react-native";

import * as Notifications from "expo-notifications";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

import {
  useFonts,
  MontserratAlternates_500Medium,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";
import {
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
} from "@expo-google-fonts/quicksand";
// Importar os recursos do expo-notification


// Solicita permissões de notificação ao iniciar o app
Notifications.requestPermissionsAsync();

// Define como as notificações devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    // Mostrar o alerta quando a notificação for recebida
    shouldShowAlert: true,

    // Reproduz som ao receber a notificação
    shouldPlaySound: true,

    // Número de notificações no ícone do app
    shouldSetBadge: false,
  }),
});
import MapView, { Marker } from "react-native-maps";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  async function requestGaleria() {
    await MediaLibrary.requestPermissionsAsync();
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  }
  return (
    //container - envolve toda a estrutura de navegacao
    //navigator - componente de navegacao
    //screen - tela
    //name - nome da tela
    //component - componente que sera chamado
    //option(title) - titulo da tela
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailVerification"
          component={EmailVerificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={NewPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectClinic"
          component={SelectClinicScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectDoctor"
          component={SelectDoctorScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectDate"
          component={SelectDateScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LocationScreen"
          component={LocationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MedicalRecord"
          component={MedicalRecordScreen}
          options={{ headerShown: false }}
        />

        

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ title: "SplashScreen", headerShown: false }}
        />
        {/* <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ title: "ForgotPassword", headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="EmailVerificationScreen"
          component={EmailVerificationScreen}
          options={{ title: "EmailVerification", headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="NewPasswordScreen"
          component={NewPasswordScreen}
          options={{ title: "NewPassword", headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
          options={{ title: "CreateAccount", headerShown: false }}
        /> */}

        <Stack.Screen
          name="DoctorHomeScreen"
          component={DoctorHomeScreen}
          options={{ title: "DoctorHome", headerShown: false }}
        />
        <Stack.Screen
          name="PatientHomeScreen"
          component={PatientHomeScreen}
          options={{ title: "PatientHome", headerShown: false }}
        />
        {/* <Stack.Screen
          name="MedicalRecordScreen"
          component={MedicalRecordScreen}
          options={{ title: "MedicalRecord", headerShown: false }}
        /> */}

        {/* <Stack.Screen
          name="SelectDoctorScreen"
          component={SelectDoctorScreen}
          options={{ title: "SelectDoctor", headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="SelectDateScreen"
          component={SelectDateScreen}
          options={{ title: "SelectDate", headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="LocationScreen"
          component={LocationScreen}
          options={{ title: "Location", headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create({
  map: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
