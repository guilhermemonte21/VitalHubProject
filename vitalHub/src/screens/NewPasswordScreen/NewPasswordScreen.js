import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { Button } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Subtitle } from "../../components/Subtitle/Style";

export const NewPasswordScreen = ({navigation}) => {
  async function ReturnToLogin(){
    navigation.navigate("Login")
  }
  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

      <Title>Redefinir senha</Title>
      <Subtitle color={"4E4B59"}>
        Insira e confirme a sua nova senha
      </Subtitle>

      <Input placeholder="Nova senha" />
      <Input placeholder="Confirmar nova senha" />

      <Button onPress={(e) => ReturnToLogin()}>
        <ButtonTitle color={"white"}>Confirmar nova senha</ButtonTitle>
      </Button>
    </Container>
  );
};
