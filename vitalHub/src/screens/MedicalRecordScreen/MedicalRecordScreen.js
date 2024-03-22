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

export const MedicalRecordScreen = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [uriCameraCapture, setUriCameraCapture] = useState(null);
  useEffect(() => {
    (async () => {
      console.log(uriCameraCapture);
    })();
  }, [uriCameraCapture]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <RecordContainer>
          <ProfileImg
            source={require("../../assets/ProfileImgPlaceholder.png")}
          />
          <FieldContent>
            <Title>Richard Kosta</Title>
            <ContainerRow>
              <SubtitleDual color={"4E4B59"}>22 anos</SubtitleDual>
              <SubtitleDual color={"4E4B59"}>
                richard.kosta@gmail.com
              </SubtitleDual>
            </ContainerRow>
          </FieldContent>

          <InputBox
            height={121}
            lineCount={4}
            labelText={"Descrição da consulta"}
            placeholder={"Descrição"}
          />
          <InputBox
            labelText={"Diagnóstico do paciente"}
            placeholder={"Diagnóstico"}
            height={53}
          />
          <InputBox
            height={121}
            lineCount={4}
            labelText={"Prescrição médica"}
            placeholder={"Prescrição médica"}
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
