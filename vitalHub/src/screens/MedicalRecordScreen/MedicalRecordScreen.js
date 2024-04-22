import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Container, FieldContent } from "../../components/Container/Style";
import { InputBox } from "../../components/Input/InputBox";
import { Button, ButtonSecondary } from "../../components/Button/Style";
import { Link } from "../../components/Link/Style";
import { ProfileImg } from "../../components/ProfileImage/ProfileImage";
import {
  CameraButton,
  CancelCard,
  CancelText,
  ImgView,
  RecordContainer,
  PictureImg,
  PicturePlaceholder,
  PlaceholderText,
} from "./Style";
import { ContainerRow } from "../../components/Container/Style";
import { Title } from "../../components/Title/Style";
import { SubtitleDual } from "../../components/Subtitle/Style";
import { Image, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Row } from "antd";
import { ButtonTextRed } from "../../components/AppointmentCard/Style";
import { useEffect, useState } from "react";
import { CameraModal } from "../../components/CameraModal/CameraModal";
import { AntDesign } from "@expo/vector-icons";
import { userDecodeToken } from "../../utils/Auth.js";
import api from "../../services/service.js";

export const MedicalRecordScreen = ({ route, navigation }) => {
  const { consulta } = route.params;
  const [showModal, setShowModal] = useState(false);
  const [uriCameraCapture, setUriCameraCapture] = useState(null);
  const [userInfo, setUserInfo] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("")
  useEffect(() => {
    (async () => {
      console.log(uriCameraCapture);
    })();
  }, [uriCameraCapture]);

  async function profileLoad() {
    const token = await userDecodeToken();
    if (token) {
      setUserInfo(token);
      setName(token.name);
      setEmail(token.email);
      calculateAge(token.id);
    }
  }

  async function calculateAge(id) {
    console.log("1");
    await api.get(`/Pacientes/BuscarPorId?id=${id}`).then((response) => {
      const bDate = response.data.dataNascimento;
      const birthDate = new Date(bDate);
      const difference = Date.now() - birthDate.getTime();
      const age = new Date(difference);
      setAge(age.getUTCFullYear() - 1970)
    });
  }

  useEffect(() => {
    profileLoad();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <RecordContainer>
          <ProfileImg
            source={require("../../assets/ProfileImgPlaceholder.png")}
          />
          <FieldContent>
            <Title>{name}</Title>
            <ContainerRow>
              <SubtitleDual color={"4E4B59"}>{age} anos</SubtitleDual>
              <SubtitleDual color={"4E4B59"}>{email}</SubtitleDual>
            </ContainerRow>
          </FieldContent>

          <InputBox
            height={121}
            lineCount={4}
            labelText={"Descrição da consulta"}
            placeholder={"Descrição"}
            editable={false}
            value={consulta.descricao}
          />
          <InputBox
            labelText={"Diagnóstico do paciente"}
            placeholder={"Diagnóstico"}
            height={53}
            editable={false}
            value={consulta.receita.observacoes}
          />
          <InputBox
            height={121}
            lineCount={4}
            labelText={"Prescrição médica"}
            placeholder={"Prescrição médica"}
            editable={false}
            value={consulta.receita.medicamento}
          />
          {uriCameraCapture === null ? (
            <PicturePlaceholder>
              <AntDesign name="closecircleo" size={24} color="#4E4B59" />
              <PlaceholderText>Nenhuma foto informada</PlaceholderText>
            </PicturePlaceholder>
          ) : (
            <PictureImg
              source={{
                uri: uriCameraCapture,
              }}
            />
          )}

          <ContainerRow>
            <CameraButton onPress={() => setShowModal(true)}>
              <Feather name="camera" size={24} color="white" />
              <ButtonTitle color={"#fff"}>Enviar</ButtonTitle>
            </CameraButton>
            <CancelCard>
              <CancelText>Cancelar</CancelText>
            </CancelCard>
          </ContainerRow>

          <InputBox
            height={121}
            lineCount={4}
            labelText={""}
            placeholder={"Descrição da consulta"}
          />

          <Button>
            <ButtonTitle color={"#fff"}>SALVAR</ButtonTitle>
          </Button>
          <Button>
            <ButtonTitle color={"#fff"}>EDITAR</ButtonTitle>
          </Button>
          <ButtonSecondary onPress={() => navigation.navigate("Home")}>
            <Link color={"#344F8F"}>Cancelar</Link>
          </ButtonSecondary>
        </RecordContainer>
        <CameraModal
          visible={showModal}
          setUriCameraCapture={setUriCameraCapture}
          setShowCamera={setShowModal}
        />
      </Container>
    </ScrollView>
  );
};
