import { ScreenTitle } from "../../components/Title/Style";
import { Container } from "../../components/Container/Style";
import { Button, ButtonSecondary } from "../../components/Button/Style";
import { useState } from "react";
import { ListComponent } from "../../components/List/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Link } from "../../components/Link/Style";
import { ClinicCard } from "../../components/ClinicCard/ClinicCard";
export const SelectClinicScreen = ({ navigation, setModal }) => {
  async function HandleReturn() {
    await setModal(true);
    navigation.navigate("Home");
  }
  const Consultas = [
    {
      id: 1,
      name: "Clínica Natureh",
      location: "São Paulo, SP",
      starRating: 4.5,
      openDays: "Seg-Sex",
    },
    {
      id: 2,
      name: "Diamond Pró-Mulher",
      location: "São Paulo, SP",
      starRating: 4.8,
      openDays: "Seg-Sex",
    },
    {
      id: 3,
      name: "Clinica Villa Lobos",
      location: "Taboão, SP",
      starRating: 4.2,
      openDays: "Seg-Sab",
    },
    {
      id: 4,
      name: "SP Oncologia Clínica",
      location: "Taboão, SP",
      starRating: 4.2,
      openDays: "Seg-Sab",
    },
  ];
  const [selectedClinic, setSelectedClinic] = useState(0);
  return (
    <Container>
      <ScreenTitle>Selecionar Clínica</ScreenTitle>
      <ListComponent
        data={Consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ClinicCard
            name={item.name}
            location={item.location}
            starRating={item.starRating}
            openDays={item.openDays}
            selected={selectedClinic == item.id ? true : false}
            onPress={() => setSelectedClinic(item.id)}
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
