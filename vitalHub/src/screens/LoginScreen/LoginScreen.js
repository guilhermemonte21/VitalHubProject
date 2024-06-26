import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import {
  Button,
  ButtonGoogle,
  ButtonSecondary,
} from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Link } from "../../components/Link/Style";
import { TextAccount } from "../../components/TextAccount/Style";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import api from "../../services/service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { userDecodeToken } from "../../utils/Auth";
import { BottomTextContainer } from "./Style";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [inProgress, setInProgress] = useState(false);

  async function Login() {
    await api
      .post("/Login", {
        email: email,
        senha: senha,
      })
      .then(async (response) => {
        await AsyncStorage.setItem("token", JSON.stringify(response.data));

        navigation.navigate("Main");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function profileLoad() {
    if (email !== null) {
      Login();
    }
  }

  useEffect(() => {
    profileLoad();
  }, []);

  return (
    <Container bgColor={"FAFAFA"}>
      <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

      <Title>Entrar ou criar conta</Title>
      <Input
        placeholder="Usuario ou email"
        value={email}
        onChangeText={(txt) => setEmail(txt)}
      />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={(txt) => setSenha(txt)}
      />
      <ButtonSecondary onPress={() => navigation.replace("ForgotPassword")}>
        <Link color={"#8c8a97"}>Esqueceu sua senha?</Link>
      </ButtonSecondary>

      <Button onPress={() => Login()}>
        <ButtonTitle color={"white"}>Entrar</ButtonTitle>
      </Button>
      <ButtonGoogle>
        <AntDesign name="google" size={22} color="#496BBA" />
        <ButtonTitle color={"#496BBA"}>Entrar com Google</ButtonTitle>
      </ButtonGoogle>

      <TextAccount color={"#4D659D"}>
        {"Não tem conta? "}
        <ButtonSecondary onPress={() => navigation.replace("CreateAccount")}>
          <Link color={"#4D659D"}>Crie uma conta agora!</Link>
        </ButtonSecondary>
      </TextAccount>
    </Container>
  );
};
