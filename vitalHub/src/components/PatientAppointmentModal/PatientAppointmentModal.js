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
  navigation,
  ...rest
}) => {
  const [agendamento, setAgendamento] = useState(null);

  async function handleContinue() {
    agendamento
      ? agendamento.prioridadeId && agendamento.localizacao
        ? handleNavigation()
        : alert("Campo obrigatório não preenchido")
      : alert("Campo obrigatório não preenchido");
  }

  async function handleCancel() {
    setAgendamento(null);
    setShowModalAppointment(false);
  }

  async function handleNavigation() {
    setShowModalAppointment(false);
    navigation.replace("SelectClinic", { agendamento: agendamento });
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
                clickButton={
                  agendamento
                    ? agendamento.prioridadeId ===
                      "8983DA22-E4E0-41F3-BF2B-C28137EBD41A"
                    : null
                }
                onPress={() =>
                  setAgendamento({
                    ...agendamento,
                    prioridadeId: "8983DA22-E4E0-41F3-BF2B-C28137EBD41A",
                    prioridadeLabel: "Rotina",
                  })
                }
              />
              <BtnAppointmentType
                textButton={"Exame"}
                clickButton={
                  agendamento
                    ? agendamento.prioridadeId ===
                      "DDA6658E-1510-440D-A1D8-2DCFBBAC758F"
                    : null
                }
                onPress={() =>
                  setAgendamento({
                    ...agendamento,
                    prioridadeId: "DDA6658E-1510-440D-A1D8-2DCFBBAC758F",
                    prioridadeLabel: "Exame",
                  })
                }
              />
              <BtnAppointmentType
                textButton={"Urgência"}
                clickButton={
                  agendamento
                    ? agendamento.prioridadeId ===
                      "8E5522B5-2BF1-4B3F-8CB4-B8DBDAB3FE04"
                    : null
                }
                onPress={() =>
                  setAgendamento({
                    ...agendamento,
                    prioridadeId: "8E5522B5-2BF1-4B3F-8CB4-B8DBDAB3FE04",
                    prioridadeLabel: "Urgência",
                  })
                }
              />
            </ContainerRow>

            <InputBox
              labelText={"Informe a localização desejada"}
              placeholder={"Informe a localização"}
              height={53}
              value={agendamento ? agendamento.localizacao : null}
              onChange={(txt) =>
                setAgendamento({ ...agendamento, localizacao: txt })
              }
            />
          </ModalFieldContent>
          <ColumnContainer>
            <Button onPress={() => handleContinue()}>
              <ButtonTitle color={"#FFF"}>CONTINUAR</ButtonTitle>
            </Button>
            <ButtonSecondary onPress={() => handleCancel()}>
              <Link color={"#344F8F"}>Cancelar</Link>
            </ButtonSecondary>
          </ColumnContainer>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
