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
import { useRef, useState } from "react";
export const EmailVerificationScreen = ({ navigation, route }) => {
  const [load, setLoad] = useState(false);
  const [code, setCode] = useState(false);
  const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  async function ResetPassword() {
    navigation.navigate("ResetPassword");
  }

  async function ValidateCode(){
    await api.post(`/RecuperarSenha/ChecarCodigo?email=${route.params.email}&recoveryCode=${code}`)
  }

  async function focusNextInput(index) {
    if (index < inputs.length - 1) {
      inputs[index + 1].current.focus();
    }
  }

  async function focusPrevInput(index) {
    if (index > 0) {
      inpus[index - 1].current.focus();
    }
  }

  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

      <Title>Verifique seu e-mail</Title>
      <Subtitle color={"4E4B59"}>
        Digite o código de 4 dígitos enviado para
        <SubtitleHighlighted color={"#496BBA"}>
          {route.params.email}
        </SubtitleHighlighted>
      </Subtitle>

      <ContainerRow>
        {[0, 1, 2, 3].map((index) => (
          <InputSquare
            key={index}
            ref={inputs[index]}
            onChangeText={(txt) => {
              if (txt == "") {
                focusPrevInput(index);
              } else {
                const informedCode = [...codigo];
                informedCode[index] = txt;
                setCode(informedCode.join(""));

                focusNextInput(index);
              }
            }}
            placeholder="0"
          />
        ))}
      </ContainerRow>

      <Button onPress={(e) => ResetPassword()}>
        <ButtonTitle color={"white"}>Entrar</ButtonTitle>
      </Button>

      <Link color={"#344F8F"}>Reenviar Código</Link>
    </Container>
  );
};
