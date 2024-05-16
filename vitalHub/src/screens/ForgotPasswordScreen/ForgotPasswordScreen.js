import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { Button } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { Link } from "../../components/Link/Style";
import { useState } from "react";
import api from "../../services/service.js";

export const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("guilhermemontefilho2112@gmail.com");

  async function EnviarEmail() {
    try {
      await api.post(`/RecuperarSenha?email=${email}`);
      navigation.replace("EmailVerification", {email: email})
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

      <Title>Recuperar senha</Title>
      <Subtitle color={"5F5C6B"}>
        Digite abaixo seu email cadastrado que enviaremos um link para
        recuperação de senha
      </Subtitle>

      <Input
        placeholder="Usuário ou E-mail"
        value={email}
        onChangeText={(txt) => setEmail(txt)}
      />

      <Button onPress={() => EnviarEmail()}>
        <ButtonTitle color={"white"}>Continuar</ButtonTitle>
      </Button>
      <Link onPress={() => navigation.navigate("Login")} color={"#344F8F"}>
        Cancelar
      </Link>
    </Container>
  );
};
