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

export const SelectDoctorScreen = ({ navigation }) => {
  //* Criar o state para receber a lista dos medicos(Array)
  const [Doctors, setDoctors] = useState([]);

  async function getDoctors() {
    api
      .get("/Medicos")
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => console.log(error));
  }
  //* Criar um effect para chamada da funcao
  useEffect(() => {
    getDoctors();
  }, []);

  const [selectedDoctor, setSelectedDoctor] = useState(1);

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
          // selected={selectedDoctor === item.id ? true : false}
          // onPress={() => setSelectedDoctor(item.id)}
          />
        )}
      />

      <Button onPress={() => navigation.navigate("SelectDate")}>
        <ButtonTitle color={"#FFF"}>CONTINUAR</ButtonTitle>
      </Button>
      <ButtonSecondary onPress={() => navigation.navigate("SelectClinic")}>
        <Link color={"#344F8F"}>Cancelar</Link>
      </ButtonSecondary>
    </Container>
  );
};
