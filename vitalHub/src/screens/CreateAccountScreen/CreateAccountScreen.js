import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { Button } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { Link } from "../../components/Link/Style";

export const CreateAccountScreen = () => {
  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

      <Title>Criar conta</Title>
      <Subtitle color={"4E4B59"}>
        Insira seu endereço de e-mail e senha para realizar seu cadastro.
      </Subtitle>

      <Input placeholder="Usuário ou E-mail" />
      <Input placeholder="Senha" />
      <Input placeholder="Confirmar senha" />

      <Button>
        <ButtonTitle color={"white"}>Cadastrar</ButtonTitle>
      </Button>
      <Link color={"#344F8F"}>Cancelar</Link>
    </Container>
  );
};
