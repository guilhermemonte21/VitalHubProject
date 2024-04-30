import { ScreenTitle } from "../../components/Title/Style";
import { Container } from "../../components/Container/Style";
import { Button, ButtonSecondary } from "../../components/Button/Style";
import { useEffect, useState } from "react";
import { ListComponent } from "../../components/List/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Link } from "../../components/Link/Style";
import { DoctorCard } from "../../components/DoctorCard/DoctorCard";
import api from "../../services/service";
import axios from "axios";

export const SelectDoctorScreen = ({ navigation, route }) => {
  const { agendamento } = route.params;
  //* Criar o state para receber a lista dos medicos(Array)
  const [Doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState({});

  async function handleReturn() {
    navigation.navigate("Main");
  }

  async function handleContinue() {
    navigation.replace("SelectDate", {
      agendamento: {
        ...route.params.agendamento,
        ...selectedDoctor,
      },
    });
  }

  async function getDoctors() {
    if (agendamento) {
      api
        .get(`/Medicos/BuscarPorIdClinica?id=${agendamento.clinicaId}`)
        .then((response) => {
          setDoctors(response.data);
        })
        .catch((error) => console.log(error));
    }
  }

  //* Criar um effect para chamada da funcao
  useEffect(() => {
    getDoctors();
  }, []);
  useEffect(() => {
    console.log(route);
  }, [route]);

  //* Passar os dados do state(Array) para o flatlist
  //* Passar o médico como prop no DoctorCard

  return (
    <Container>
      <ScreenTitle>Selecionar médico</ScreenTitle>
      <ListComponent
        data={Doctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DoctorCard
            doctor={item}
            onPress={() =>
              setSelectedDoctor({
                medicoClinicaId: item.id,
                doctorLabel: item.idNavigation.nome,
                doctorSpecialtyId: item.especialidade.id,
                doctorSpecialtyLabel: item.especialidade.especialidade1,
              })
            }
          />
        )}
      />

      <Button onPress={() => handleContinue()}>
        <ButtonTitle color={"#FFF"}>CONTINUAR</ButtonTitle>
      </Button>
      <ButtonSecondary onPress={() => handleReturn()}>
        <Link color={"#344F8F"}>Cancelar</Link>
      </ButtonSecondary>
    </Container>
  );
};
