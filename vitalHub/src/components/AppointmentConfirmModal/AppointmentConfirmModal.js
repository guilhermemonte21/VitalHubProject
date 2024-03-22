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

export const AppointmentConfirmModal = ({
  visible,
  setShowModal,
  date,
  doctor = [],
  location,
  type,
  nav,
  ...rest
}) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <ColumnContainer>
            <Title>Agendar Consulta</Title>
            <Subtitle>
              Consulte os dados selectionados para a sua consulta
            </Subtitle>
          </ColumnContainer>

          <ColumnContainer>
            <ModalText>Data da consulta</ModalText>
            <ModalTextSmall>{date}</ModalTextSmall>
          </ColumnContainer>
          <ColumnContainer>
            <ModalText>Médico(a) da consulta</ModalText>
            <ModalTextSmall>{doctor.name}</ModalTextSmall>
            <ModalTextSmall>{doctor.specialty}</ModalTextSmall>
          </ColumnContainer>
          <ColumnContainer>
            <ModalText>Local da consulta</ModalText>
            <ModalTextSmall>{location}</ModalTextSmall>
          </ColumnContainer>
          <ColumnContainer>
            <ModalText>Tipo da consulta</ModalText>
            <ModalTextSmall>{type}</ModalTextSmall>
          </ColumnContainer>
          <ColumnContainer>
            <ConfirmButton onPress={nav}>
              <ButtonTitle color={"#FFF"}>CONFIRMAR</ButtonTitle>
            </ConfirmButton>
            <LinkButton onPress={() => setShowModal(false)}>
              <Link color={"#344F8F"}>Cancelar</Link>
            </LinkButton>
          </ColumnContainer>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
