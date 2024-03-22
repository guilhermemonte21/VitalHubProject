import { Modal } from "react-native";
import { ModalContent, PatientModal, PatientImage, RowContainer } from "./Style";
import { Title } from "../Title/Style";
import { UserText } from "../Text/Style";
import { ButtonTitle } from "../ButtonTitle/Style";
import { Button, ButtonSecondary } from "../Button/Style";
import { Link } from "../Link/Style";

export const AppointmentModal = ({ visible, setShowModalAppointment, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <PatientImage source={require("../../assets/ProfileImgPlaceholder.png")}/>
          <Title>Richard Kosta</Title>
          <RowContainer>
            <UserText>22 Anos</UserText>
            <UserText>richard.kosta     </UserText>
          </RowContainer>
          <Button>
            <ButtonTitle color={"#FFF"}>INSERIR PRONTUÁRIO</ButtonTitle>
          </Button>
          <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
            <Link color={"#344F8F"}>Cancelar</Link>
          </ButtonSecondary>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
