import {
  Container,
  ContainerRow,
  FieldContent,
  FieldContentSmall
} from "../../components/Container/Style";
import { Image } from "react-native";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input, InputLight } from "../../components/Input/Style";
import { Button } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Subtitle, SubtitleHighlighted } from "../../components/Subtitle/Style";
import { ProfileImg } from "../../components/ProfileImage/ProfileImage";
import { ProfileImgPlaceholder } from "../../assets/ProfileImgPlaceholder.png";
import { BoxInput } from "../../components/BoxInput/Index";
import { InputLabel } from "../../components/Label/Style";
import { useEffect, useState } from "react";
import api from "../../services/service";
import { userDecodeToken } from "../../utils/Auth";

export const ProfileScreen = () => {
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  
  async function profileLoad() {
      const token = await userDecodeToken()

      if (token) {

          console.log(token)
          setNome(token.name)
          setEmail(token.email)
      }
  }

  useEffect(() => {
      profileLoad()
  }, [])
  return (
    <>
      <ProfileImg source={require("../../assets/ProfileImgPlaceholder.png")} />
      <Container color={"#FBFBFB"}>
        <Title>{nome}</Title>
        <Subtitle color={"4E4B59"}>{email}</Subtitle>

        <FieldContent>
          <InputLabel>Data de nascimento</InputLabel>
          <InputLight color={"white"} placeholder={"DD/MM/YYYY"} maxLength={10}>04/05/1999</InputLight>
        </FieldContent>
        <FieldContent>
          <InputLabel>CPF</InputLabel>
          <InputLight color={"white"} placeholder={"*********-**"} maxLength={13}>859********</InputLight>
        </FieldContent>
        <FieldContent>
          <InputLabel>Endereço</InputLabel>
          <InputLight color={"white"}>Rua Vicenso Silva, 987</InputLight>
        </FieldContent>
        <ContainerRow>
          <FieldContentSmall>
            <InputLabel>CEP</InputLabel>
            <InputLight color={"white"} placeholder={"*****-***"} maxLength={11}>06548-909</InputLight>
          </FieldContentSmall>
          <FieldContentSmall>
            <InputLabel>Cidade</InputLabel>
            <InputLight color={"white"} placeholder={"*****-***"}>Moema-SP</InputLight>
          </FieldContentSmall>
        </ContainerRow>
      </Container>
    </>
  );
};
