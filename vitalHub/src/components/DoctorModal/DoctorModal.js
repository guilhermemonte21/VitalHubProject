import { Modal } from "react-native";
import {
  ModalContent,
  RowContainer,
  ModalContainer,
  DoctorImg,
  ConfirmButton,
  ModalTextSmall,
  LinkButton,
} from "./Style";
import { Title } from "../Title/Style";
import { ButtonTitle } from "../ButtonTitle/Style";
import { Link } from "../Link/Style";
import { useEffect } from "react";

export const DoctorModal = ({
  visible,
  setShowModal,
  navigation,
  consulta,
}) => {
  useEffect(() => {
    console.log(consulta);
  }, []);

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <ModalContainer>
        {consulta ? (
          <ModalContent>
            <DoctorImg source={require("../../assets/DoctorImage.png")} />
            <Title>{consulta.medicoClinica.medico.idNavigation.nome}</Title>
            <RowContainer>
              <ModalTextSmall>
                {consulta.medicoClinica.medico.especialidade.especialidade1}
              </ModalTextSmall>
              <ModalTextSmall>
                CRM-{consulta.medicoClinica.medico.crm}
              </ModalTextSmall>
            </RowContainer>
            <ConfirmButton
              onPress={() =>
                navigation.replace("LocationScreen", {
                  clinicaId: consulta.medicoClinica.clinicaId,
                })
              }
            >
              <ButtonTitle color={"#FFF"}>VER LOCAL DA CONSULTA</ButtonTitle>
            </ConfirmButton>
            <LinkButton onPress={() => setShowModal(false)}>
              <Link color={"#344F8F"}>Cancelar</Link>
            </LinkButton>
          </ModalContent>
        ) : (
          <></>
        )}
      </ModalContainer>
    </Modal>
  );
};
