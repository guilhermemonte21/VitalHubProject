import { Modal } from "react-native";
import {
  ModalContent,
  PatientModal,
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
import { useState } from "react";
import { BtnAppointmentType } from "../BtnAppointmentType/BtnAppointmentType";

export const PatientAppointmentModal = ({
  visible,
  setShowModalAppointment,
  nav,
  ...rest
}) => {
  const [appointmentType, setAppointmentType] = useState("rotina");
  async function set() {
    setShowModalAppointment(false)
    nav()
  }
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <Title>Agendar Consulta</Title>
          <InputBox
            labelText={"Informe o tipo de consulta"}
            placeholder={"Tipo de consulta"}
            height={53}
          />

          <FieldContent>
            <InputLabel>Qual o nível da consulta</InputLabel>
            <ContainerRow>
              <BtnAppointmentType
                textButton={"Rotina"}
                clickButton={appointmentType === "rotina"}
                onPress={() => setAppointmentType("rotina")}
              />
              <BtnAppointmentType
                textButton={"Exame"}
                clickButton={appointmentType === "exame"}
                onPress={() => setAppointmentType("exame")}
              />
              <BtnAppointmentType
                textButton={"Urgência"}
                clickButton={appointmentType === "urgencia"}
                onPress={() => setAppointmentType("urgencia")}
              />
            </ContainerRow>
          </FieldContent>

          <InputBox
            labelText={"Informe a localização desejada"}
            placeholder={"Informe a localização"}
            height={53}
          />
          <Button onPress={() => set()}>
            <ButtonTitle color={"#FFF"}>CONTINUAR</ButtonTitle>
          </Button>
          <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
            <Link color={"#344F8F"}>Cancelar</Link>
          </ButtonSecondary>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
