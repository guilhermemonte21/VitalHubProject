import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { Button } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { Link } from "../../components/Link/Style";
import { useState } from "react";
import api from "../../services/service";

export const CreateAccountScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [id, setId] = useState("8A95FC3C-47BF-4CCD-BB3E-649A8F0D12D6");

  const Cadastro = async () => {
    try {
      if (senha === confirmarSenha) {
        const form = new FormData();

        form.append("email", `${email}`);
        form.append("senha", `${senha}`);
        form.append("idTipoUsuario", `8A95FC3C-47BF-4CCD-BB3E-649A8F0D12D6`);

        const response = await api.post("/Pacientes", form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response);
        if (response.data.success) {
          console.log("eeee");
        }

        //Após o cadastro, vai redirecionar para a tela de Login ( Se Deus quiser )

        navigation.replace("Profile");
      } else {
        alert("As senhas não coincidem");
      }
    } catch (error) {
      if (error.response) {
        console.error("Erro ao cadastrar:", error.response.data);
      } else if (error.request) {
        console.error("Erro de requisição:", error.request);
      } else {
        console.error("Erro ao configurar:", error.message);
      }
    }
  };

  async function HandleCancel() {
    navigation.replace("Login");
  }

  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

      <Title>Criar conta</Title>
      <Subtitle color={"4E4B59"}>
        Insira seu endereço de e-mail e senha para realizar seu cadastro.
      </Subtitle>

      <Input
        value={email}
        placeholder="Usuário ou E-mail"
        onChangeText={(txt) => setEmail(txt)}
      />
      <Input
        value={senha}
        placeholder="Senha"
        onChangeText={(txt) => setSenha(txt)}
      />
      <Input
        value={confirmarSenha}
        placeholder="Confirmar senha"
        onChangeText={(txt) => setConfirmarSenha(txt)}
      />

      <Button onPress={() => Cadastro()}>
        <ButtonTitle color={"white"}>Cadastrar</ButtonTitle>
      </Button>
      <Link color={"#344F8F"} onPress={() => HandleCancel()}>
        Cancelar
      </Link>
    </Container>
  );
};
