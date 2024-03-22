import { Button, View } from "react-native";

export const Navigation = ({ navigation }) => {
  return (
    <View>
      <Button
        title="login"
        onPress={() => navigation.navigate("LoginScreen")}
      />
      <Button
        title="splash"
        onPress={() => navigation.navigate("SplashScreen")}
      />
      <Button
        title="forgot password"
        onPress={() => navigation.navigate("ForgotPassword")}
      />
      <Button
        title="email verification"
        onPress={() => navigation.navigate("EmailVerificationScreen")}
      />
      <Button
        title="new password"
        onPress={() => navigation.navigate("NewPasswordScreen")}
      />
      <Button
        title="create account"
        onPress={() => navigation.navigate("CreateAccountScreen")}
      />
      <Button
        title="profile"
        onPress={() => navigation.navigate("ProfileScreen")}
      />
      <Button
        title="doctor home"
        onPress={() => navigation.navigate("DoctorHomeScreen")}
      />
      <Button
        title="patient home"
        onPress={() => navigation.navigate("PatientHomeScreen")}
      />
      <Button
        title="medical record"
        onPress={() => navigation.navigate("MedicalRecordScreen")}
      />
      <Button
        title="select clinic"
        onPress={() => navigation.navigate("SelectClinicScreen")}
      />
      <Button
        title="select doctor"
        onPress={() => navigation.navigate("SelectDoctorScreen")}
      />
      <Button
        title="select date"
        onPress={() => navigation.navigate("SelectDateScreen")}
      />
      <Button
        title="location"
        onPress={() => navigation.navigate("LocationScreen")}
      />
    </View>
  );
};
