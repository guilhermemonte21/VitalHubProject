import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { Button } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { Link } from "../../components/Link/Style";

export const ForgotPasswordScreen = ({ navigation }) => {
  async function Continue(){
    navigation.navigate("EmailVerification")
  }
  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

      <Title>Recuperar senha</Title>
      <Subtitle color={"5F5C6B"}>
        Digite abaixo seu email cadastrado que enviaremos um link para
        recuperação de senha
      </Subtitle>

      <Input placeholder="Usuário ou E-mail" />

      <Button onPress={(e) => Continue()}>
        <ButtonTitle color={"white"}>Continuar</ButtonTitle>
      </Button>
      <Link onPress={navigation.navigate("Login")} color={"#344F8F"}>Cancelar</Link>
    </Container>
  );
};
