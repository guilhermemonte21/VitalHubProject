import { Modal } from "react-native";
import {
  ModalContent,
  PatientModal,
  ModalFieldContent,
  PatientImage,
  RowContainer,
  ButtonSmall,
} from "./Style";
import { Title } from "../Title/Style";
import { UserText } from "../Text/Style";
import { ButtonTitle } from "../ButtonTitle/Style";
import { Button, ButtonSecondary } from "../Button/Style";
import { Link } from "../Link/Style";
import { InputBox } from "../Input/InputBox";
import { InputLabel } from "../Label/Style";
import { ContainerRow, FieldContent } from "../Container/Style";
import { InputLight } from "../Input/Style";
import { BtnListAppointment } from "../BtnListAppointment/BtnListAppointment";
import { useEffect, useState } from "react";
import { BtnAppointmentType } from "../BtnAppointmentType/BtnAppointmentType";
import { ColumnContainer } from "../DoctorModal/Style";

export const PatientAppointmentModal = ({
  visible,
  setConsultaOriginal,
  setShowModalAppointment,
  nav,
  ...rest
}) => {
  const [consultaEmCadastro, setConsultaEmCadastro] = useState({});
  const [appointmentType, setAppointmentType] = useState(0);
  const [preferredLocation, setPreferredLocation] = useState("");

  useEffect(() => {
    setConsultaEmCadastro({
      propriedade: appointmentType,
      preferredLocation: preferredLoc,
    });
    setConsultaOriginal(consultaEmCadastro)
    console.log(consultaEmCadastro);
  }, [preferredLoc]);

  useEffect(() => {
    setConsultaEmCadastro({
      propriedade: appointmentType,
      preferredLocation: preferredLoc,
    });
    setConsultaOriginal(consultaEmCadastro)
    console.log(consultaEmCadastro);
  }, [appointmentType]);

  async function set() {
    setShowModalAppointment(false);
    nav();
  }
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <ModalFieldContent>
            <Title>Agendar Consulta</Title>

            <InputLabel>Qual o nível da consulta</InputLabel>
            <ContainerRow>
              <BtnAppointmentType
                textButton={"Rotina"}
                clickButton={appointmentType === 0}
                onPress={() => setAppointmentType(0)}
              />
              <BtnAppointmentType
                textButton={"Exame"}
                clickButton={appointmentType === 1}
                onPress={() => setAppointmentType(1)}
              />
              <BtnAppointmentType
                textButton={"Urgência"}
                clickButton={appointmentType === 2}
                onPress={() => setAppointmentType(2)}
              />
            </ContainerRow>

            <InputBox
              labelText={"Informe a localização desejada"}
              placeholder={"Informe a localização"}
              height={53}
              onChange={(txt) => setPreferredLocation(txt)}
            />
          </ModalFieldContent>
          <ColumnContainer>
            <Button onPress={() => set()}>
              <ButtonTitle color={"#FFF"}>CONTINUAR</ButtonTitle>
            </Button>
            <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
              <Link color={"#344F8F"}>Cancelar</Link>
            </ButtonSecondary>
          </ColumnContainer>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
