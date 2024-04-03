import { ScreenTitle } from "../../components/Title/Style";
import { Container } from "../../components/Container/Style";
import { Button, ButtonSecondary } from "../../components/Button/Style";
import { useEffect, useState } from "react";
import { ListComponent } from "../../components/List/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Link } from "../../components/Link/Style";
import { ClinicCard } from "../../components/ClinicCard/ClinicCard";
import api from "../../services/service";
export const SelectClinicScreen = ({ navigation, setModal }) => {
const [Clinic, setClinic] = useState([]);

  async function HandleReturn() {
    await setModal(true);
    navigation.navigate("Home");
  }
  async function getClinic() {
    api.get("/Clinica/ListarTodas").then(response => { setClinic(response.data) }).catch(error => console.log(error))
  }


  useEffect(() => {
    getClinic()
  }, [])

  const [selectedClinic, setSelectedClinic] = useState(0);
  
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
            
            // selected={selectedClinic == item.id ? true : false}
            // onPress={() => setSelectedClinic(item.id)}
          />
        )}
      />
      <Button onPress={() => navigation.navigate("SelectDoctor")}>
        <ButtonTitle color={"#FFF"}>CONTINUAR</ButtonTitle>
      </Button>
      <ButtonSecondary onPress={() => HandleReturn()}>
        <Link color={"#344F8F"}>Cancelar</Link>
      </ButtonSecondary>
    </Container>
  );
};
