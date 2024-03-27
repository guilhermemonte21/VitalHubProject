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


//* Criar o state para receber a lista dos medicos(Array)
const [Doctors, setDoctors] = useState([])

//* Criar a funcao para obter a lista de medicos da api e setar no state
export const getAllDoctors = async () => {
  const getDoctors = {
    method: "get",
    url: `${baseURL}`
  }
  const response = await axios(getDoctors)
  console.log(response.data);
  setDoctors(response.data)
}

//* Criar um effect para chamada da funcao
useEffect(() => {
  getAllDoctors()
}, [])



export const SelectDoctorScreen = ({ navigation }) => {
  // const Doutores = [
  //   {
  //     id: 1,
  //     name: "Dra Alessandra",
  //     specialty: "Dermatologa, Esteticista",
  //     imgSource: "Alessandra.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Dr Kumushiro",
  //     specialty: "Cirurgião, Cardiologista",
  //     imgSource: "Kumushiro.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Dr Rodrigo Santos",
  //     specialty: "Clínico, Pediatra",
  //     imgSource: "Rodrigo.png",
  //   },
  // ];

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
            doctor={item.item}
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
