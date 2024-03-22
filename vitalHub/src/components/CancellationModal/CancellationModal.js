import { Modal } from "react-native";
import { Title } from "../Title/Style";
import { Button, ButtonSecondary } from "../Button/Style";
import { PatientModal, ModalContent, ModalText, nav, cancel } from "./Style";
import { ButtonTitle } from "../ButtonTitle/Style";
import { Link } from "../Link/Style";
import * as Notifications from "expo-notifications";

export const CancellationModal = ({ visible, setShowModal, ...rest }) => {
  const handleConfirm = async () => {
    // Obtem o status da permissão
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Permissões necessárias não concedidas");
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Consulta cancelada com sucesso",
        sound: "metal-pipe.mp3",
        body: ":3",
      },
      trigger: null,
      vibrate: false,
      channelId: "teste",
    });
    setShowModal(false);
  };
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <Title>Cancelar consulta</Title>
          <ModalText>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </ModalText>
          <Button onPress={() => handleConfirm()}>
            <ButtonTitle color={"#FFF"}>CONFIRMAR</ButtonTitle>
          </Button>
          <ButtonSecondary onPress={() => setShowModal(false)}>
            <Link color={"#344F8F"}>Cancelar</Link>
          </ButtonSecondary>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
