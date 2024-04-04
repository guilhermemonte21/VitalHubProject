import { Modal } from "react-native";
import {
  ModalContent,
  PatientModal,
  PatientImage,
  RowContainer,
  ModalContainer,
  ModalText,
  DoctorImg,
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

export const DoctorModal = ({
  medico,
  visible,
  setShowModal,
  date,
  doctor = [],
  location,
  type,
  navigation,
  consulta,
  ...rest
}) => {
  function handlePress(route) {
    navigation.replace(route, { clinicaId: consulta.medicoClinica.clinicaId });
  }
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <ModalContainer>
        <ModalContent>
          <DoctorImg source={require("../../assets/DoctorImage.png")} />
          <Title>{consulta.medicoClinica.medico.idNavigation.nome}</Title>
          <RowContainer>
            <ModalTextSmall>{usuarioConsulta.especialidade.especialidade1}</ModalTextSmall>
            <ModalTextSmall>CRM-{usuarioConsulta.crm}</ModalTextSmall>
          </RowContainer>
          <ConfirmButton onPress={() => handlePress("LocationScreen")}>
            <ButtonTitle color={"#FFF"}>VER LOCAL DA CONSULTA</ButtonTitle>
          </ConfirmButton>
          <LinkButton onPress={() => setShowModal(false)}>
            <Link color={"#344F8F"}>Cancelar</Link>
          </LinkButton>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};
