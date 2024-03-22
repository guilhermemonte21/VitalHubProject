import { Container } from "../../components/Container/Style";
import { Button, ButtonSecondary } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Link } from "../../components/Link/Style";
import { CalendarComponent } from "../../components/CalendarComponent/CalendarComponent";
import { SelectDateTitle } from "./Style";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { DateContainer } from "./Style";
import { AppointmentConfirmModal } from "../../components/AppointmentConfirmModal/AppointmentConfirmModal";
import { useState } from "react";

export const SelectDateScreen = ({navigation}) => {
  const Horarios = [
    { id: 0, value: "10:00", label: "10:00" },
    { id: 1, value: "11:00", label: "11:00" },
    { id: 2, value: "12:00", label: "12:00" },
    { id: 3, value: "13:00", label: "13:00" },
  ];
  const [showModal, setShowModal] = useState(false);
  return (
    <DateContainer>
      <SelectDateTitle>Selecionar Data</SelectDateTitle>
      <CalendarComponent />
      <Dropdown
        content={Horarios}
        labelText={"Selecione um horário disponível"}
      />
      <Button onPress={() => setShowModal(true)}>
        <ButtonTitle color={"#FFF"}>CONTINUAR</ButtonTitle>
      </Button>
      <ButtonSecondary onPress={() => navigation.navigate("Home")}>
        <Link color={"#344F8F"}>Cancelar</Link>
      </ButtonSecondary>
      <AppointmentConfirmModal
        visible={showModal}
        date={"1 de Novembro de 2023"}
        doctor={{id: 0, name: "Dra Alessandra", specialty: "Dermatologa, Esteticista"}}
        location={"São Paulo, SP"}
        type={"Rotina"}
        setShowModal={() => setShowModal(false)}
        nav={() => navigation.navigate("SelectDoctor")}
      />
    </DateContainer>
  );
};
