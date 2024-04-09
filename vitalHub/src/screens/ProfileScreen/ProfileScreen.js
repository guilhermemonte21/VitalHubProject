import {
  Container,
  ContainerRow,
  FieldContent,
  FieldContentSmall,
} from "../../components/Container/Style";
import { Image, ScrollView } from "react-native";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import {
  Input,
  InputLight,
  InputLightEditable,
} from "../../components/Input/Style";
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
import { ProfileTitle } from "./Style";

export const ProfileScreen = () => {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [birth, setBirth] = useState();
  const [cpf, setCpf] = useState();
  const [endereco, setEndereco] = useState();
  async function profileLoad() {
    const token = await userDecodeToken();

    if (token) {
      console.log(token);
      setNome(token.name);
      setEmail(token.email);
      await api
        .get(`/Pacientes/BuscarPorId?id=${token.id}`)
        .then((response) => {
          setCpf(response.data.cpf);
          setBirth(response.data.dataNascimento);
          setEndereco(response.data.endereco);
        });
    }
  }

  useEffect(() => {
    profileLoad();
  }, []);
  return (
    <>
      <ProfileImg source={require("../../assets/ProfileImgPlaceholder.png")} />
      <ScrollView>
        <Container color={"#FBFBFB"}>
          <ProfileTitle>{nome}</ProfileTitle>
          <Subtitle color={"4E4B59"}>{email}</Subtitle>

          <FieldContent>
            <InputLabel>Data de nascimento</InputLabel>
            <InputLightEditable
              editable={false}
              color={"white"}
              placeholder={"DD/MM/YYYY"}
              maxLength={10}
            >
              {birth ? birth : null}
            </InputLightEditable>
          </FieldContent>
          <FieldContent>
            <InputLabel>CPF</InputLabel>
            <InputLightEditable
              editable={false}
              color={"white"}
              placeholder={"*********-**"}
              maxLength={13}
            >
              {cpf ? cpf : null}
            </InputLightEditable>
          </FieldContent>
          <FieldContent>
            <InputLabel>Endereço</InputLabel>
            <InputLightEditable editable={false} color={"white"}>
              {endereco ? `${endereco.logradouro}, ${endereco.numero}` : null}
            </InputLightEditable>
          </FieldContent>
          <ContainerRow>
            <FieldContentSmall>
              <InputLabel>CEP</InputLabel>
              <InputLightEditable
                editable={false}
                color={"white"}
                placeholder={"*****-***"}
                maxLength={11}
              >
                {endereco ? endereco.cep : null}
              </InputLightEditable>
            </FieldContentSmall>
            <FieldContentSmall>
              <InputLabel>Cidade</InputLabel>
              <InputLightEditable
                color={"white"}
                editable={false}
                placeholder={"*****-***"}
              >
                {endereco ? `${endereco.cidade}-SP` : null}
              </InputLightEditable>
            </FieldContentSmall>
          </ContainerRow>
          <Button>
            <ButtonTitle color={"#FFFFFF"}>SALVAR</ButtonTitle>
          </Button>
          <Button>
            <ButtonTitle color={"#FFFFFF"}>EDITAR</ButtonTitle>
          </Button>
        </Container>
      </ScrollView>
    </>
  );
};
