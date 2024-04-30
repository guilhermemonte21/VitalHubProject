import { Container } from "../../components/Container/Style";
import { Button, ButtonSecondary } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Link } from "../../components/Link/Style";
import { CalendarComponent } from "../../components/CalendarComponent/CalendarComponent";
import { SelectDateTitle } from "./Style";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { DateContainer } from "./Style";
import { AppointmentConfirmModal } from "../../components/AppointmentConfirmModal/AppointmentConfirmModal";
import { useEffect, useState } from "react";

export const SelectDateScreen = ({ navigation, route }) => {
  const [agendamento, setAgendamento] = useState();
  const [dataSelecionada, setDataSelecionada] = useState();
  const [horaSelecionada, setHoraSelecionada] = useState();
  const [showModal, setShowModal] = useState(false);



  async function handleContinue() {
    await setAgendamento({
      ...route.params.agendamento,
      dataConsulta: `${dataSelecionada} ${horaSelecionada}`,
    });
    setShowModal(true);
  }
  useEffect(() => {
    console.log(route);
  }, [route]);

  return (
    <DateContainer>
      <SelectDateTitle>Selecionar Data</SelectDateTitle>
      <CalendarComponent
        setDataSelecionada={setDataSelecionada}
        dataSelecionada={dataSelecionada}
      />
      <Dropdown
        setHoraSelecionada={setHoraSelecionada}
        horaSelecionada={horaSelecionada}
        labelText={"Selecione um horário disponível"}
      />
      <Button onPress={() => handleContinue()}>
        <ButtonTitle color={"#FFF"}>CONTINUAR</ButtonTitle>
      </Button>
      <ButtonSecondary onPress={() => navigation.replace("SelectDoctor")}>
        <Link color={"#344F8F"}>Cancelar</Link>
      </ButtonSecondary>
      <AppointmentConfirmModal
        agendamento={agendamento}
        visible={showModal}
        setShowModal={() => setShowModal(false)}
        navigation={navigation}
      />
    </DateContainer>
  );
};
