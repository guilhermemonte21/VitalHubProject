import { Container, ContainerRow } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { InputSquare } from "../../components/Input/Style";
import { Button, ButtonGoogle } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Link, LinkSubtitle } from "../../components/Link/Style";
import { TextAccount } from "../../components/TextAccount/Style";
import { AntDesign } from "@expo/vector-icons";
import { Subtitle, SubtitleHighlighted } from "../../components/Subtitle/Style";
export const EmailVerificationScreen = ({ navigation }) => {
  async function ResetPassword() {
    navigation.navigate("ResetPassword");
  }
  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

      <Title>Verifique seu e-mail</Title>
      <Subtitle color={"4E4B59"}>
        Digite o código de 4 dígitos enviado para{" "}
        <SubtitleHighlighted color={"#496BBA"}>
          username@email.com
        </SubtitleHighlighted>
      </Subtitle>

      <ContainerRow>
        <InputSquare placeholder="0" />
        <InputSquare placeholder="0" />
        <InputSquare placeholder="0" />
        <InputSquare placeholder="0" />
      </ContainerRow>

      <Button onPress={(e) => ResetPassword()}>
        <ButtonTitle color={"white"}>Entrar</ButtonTitle>
      </Button>

      <Link color={"#344F8F"}>Reenviar Código</Link>
    </Container>
  );
};
