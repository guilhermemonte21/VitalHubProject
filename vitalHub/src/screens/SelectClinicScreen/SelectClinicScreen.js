import { ScreenTitle } from "../../components/Title/Style";
import { Container } from "../../components/Container/Style";
import { Button, ButtonSecondary } from "../../components/Button/Style";
import { useEffect, useState } from "react";
import { ListComponent } from "../../components/List/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Link } from "../../components/Link/Style";
import { ClinicCard } from "../../components/ClinicCard/ClinicCard";
import api from "../../services/service";
export const SelectClinicScreen = ({ navigation, setModal, route }) => {
  const { agendamento } = route.params;

  const [Clinic, setClinic] = useState([]);
  const [selectedClinic, setSelectedClinic] = useState({});

  async function handleReturn() {
    navigation.navigate("Main");
  }

  async function handleContinue() {
    navigation.replace("SelectDoctor", {
      agendamento: {
        ...route.params.agendamento,
        ...selectedClinic,
      },
    });
  }

  async function getClinic() {
    if (agendamento) {
      api
        .get(`/Clinica/BuscarPorCidade?cidade=${agendamento.localizacao}`)
        .then((response) => {
          setClinic(response.data);
        })
        .catch((error) => console.log(error));
    }
  }

  useEffect(() => {
    getClinic();
    console.log(route);
  }, [route]);

  return (
    <Container>
      <ScreenTitle>Selecionar Clínica</ScreenTitle>
      <ListComponent
        data={Clinic}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ClinicCard
            name={item.nomeFantasia}
            location={item.endereco.cidade}
            selected={
              selectedClinic
                ? selectedClinic.id === item.id
                  ? true
                  : false
                : false
            }
            onPress={() =>
              setSelectedClinic({
                clinicaId: item.id,
                clinicaLabel: item.nomeFantasia,
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
