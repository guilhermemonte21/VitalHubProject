import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { Button } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { useState } from "react";
import { api } from "../../services/service";

export const NewPasswordScreen = ({ navigation, route }) => {
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");
  async function ChangePassword() {
    if (senha === senha2) {
      await api
        .post(`/Usuario/AlterarSenha?email=${route.params.email}`, {
          novaSenha: senha,
        })
        .then(() => {
          navigation.replace("Login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    else{
      alert("Senhas incompatíveis")
    }
  }
  //* :3
  //! :(
  //? :<
  /// :|
  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

      <Title>Redefinir senha</Title>
      <Subtitle color={"4E4B59"}>Insira e confirme a sua nova senha</Subtitle>

      <Input placeholder="Nova senha" onChangeText={(txt) => setSenha(txt)} />
      <Input
        placeholder="Confirmar nova senha"
        onChangeText={(txt) => setSenha2(txt)}
      />

      <Button onPress={(e) => ChangePassword()}>
        <ButtonTitle color={"white"}>Confirmar nova senha</ButtonTitle>
      </Button>
    </Container>
  );
};
