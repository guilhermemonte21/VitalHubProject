import { Modal } from "react-native";
import {
  ModalContent,
  PatientModal,
  PatientImage,
  RowContainer,
  ModalText,
  ModalSubtitle,
  ColumnContainer,
  ConfirmButton,
  ModalTextSmall,
  LinkButton,
} from "./Style";
import { Title } from "../Title/Style";
import { UserText } from "../Text/Style";
import { ButtonTitle } from "../ButtonTitle/Style";
import { Button, ButtonSecondary } from "../Button/Style";
import { Link } from "../Link/Style";
import { Subtitle } from "../Subtitle/Style";
import moment from "moment";
import api from "../../services/service";
import { useEffect, useState } from "react";
import { userDecodeToken } from "../../utils/Auth";

export const AppointmentConfirmModal = ({
  agendamento,
  visible,
  setShowModal,
  date,
  doctor = [],
  location,
  type,
  navigation,

  ...rest
}) => {
  const [profile, setProfile] = useState();
  async function profileLoad() {
    const token = await userDecodeToken();
    if (token) {
      setProfile(token);
    }
  }
  useEffect(() => {
    profileLoad();
  }, [visible]);

  async function handleConfirm() {
    await api
      .post("/Consultas/Cadastrar", {
        ...agendamento,
        pacienteId: profile.id,
        situacaoId: "2ECDE952-5409-4F28-9C04-3F7FD47C8C47",
      })
      .then(async () => {
        await setShowModal(false);
        agendamento = null;
        navigation.replace("Main");
      });
  }
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        {agendamento ? (
          <ModalContent>
            <ColumnContainer>
              <Title>Agendar Consulta</Title>
              <Subtitle>
                Consulte os dados selectionados para a sua consulta
              </Subtitle>
            </ColumnContainer>
            <ColumnContainer>
              <ModalText>Data da consulta</ModalText>
              <ModalTextSmall>
                {" "}
                {moment(agendamento.dataConsulta).format("DD/MM/YY HH:mm")}
              </ModalTextSmall>
            </ColumnContainer>
            <ColumnContainer>
              <ModalText>Médico(a) da consulta</ModalText>
              <ModalTextSmall>{agendamento.doctorLabel}</ModalTextSmall>
              <ModalTextSmall>
                {agendamento.doctorSpecialtyLabel}
              </ModalTextSmall>
            </ColumnContainer>
            <ColumnContainer>
              <ModalText>Local da consulta</ModalText>
              <ModalTextSmall>{agendamento.localizacao}</ModalTextSmall>
            </ColumnContainer>
            <ColumnContainer>
              <ModalText>Tipo da consulta</ModalText>
              <ModalTextSmall>{agendamento.prioridadeLabel}</ModalTextSmall>
            </ColumnContainer>
            <ColumnContainer>
              <ConfirmButton onPress={() => handleConfirm()}>
                <ButtonTitle color={"#FFF"}>CONFIRMAR</ButtonTitle>
              </ConfirmButton>
              <LinkButton onPress={() => setShowModal(false)}>
                <Link color={"#344F8F"}>Cancelar</Link>
              </LinkButton>
            </ColumnContainer>
          </ModalContent>
        ) : null}
      </PatientModal>
    </Modal>
  );
};
