import { HeaderHome } from "../../components/Header/Style";
import {
  Container,
  DoctorContainer,
  InfoContainer,
} from "../../components/Container/Style";
import { NotificationBell, UserDoctor } from "../../components/Logo/Style";

import { MontSerratWhite, UserText } from "../../components/Text/Style";
import { CalendarHome } from "../../components/CalendarList/CalendarHome";

import { ContainerButton, StethoscopeIcon } from "./Style";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { useEffect, useState } from "react";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { ListComponent } from "../../components/List/Style";
import { PatientAppointmentModal } from "../../components/PatientAppointmentModal/PatientAppointmentModal";
import { DoctorModal } from "../../components/DoctorModal/DoctorModal";
import { ButtonSecondary } from "../../components/Button/Style";
import { FontAwesome } from "@expo/vector-icons";
import { CancellationModal } from "../../components/CancellationModal/CancellationModal";
import { Header1 } from "../../components/Header/Index";


const Consultas = [
  { id: 1, nome: "Richard", situacao: "pendente" },
  { id: 2, nome: "Richard", situacao: "realizado" },
  { id: 3, nome: "Richard", situacao: "cancelado" },
];

export const PatientHomeScreen = ({ route, navigation }) => {

  async function GoToProfile() {
    navigation.navigate("Profile");
  }

  const [statusLista, setStatusLista] = useState("pendente");
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);
  const [showModalDoctor, setShowModalDoctor] = useState(false);
  return (
    
     <Container>
     <Header1/>

      <DoctorContainer>
        <CalendarHome />

        <ContainerButton>
          <BtnListAppointment
            textButton={"Agendadas"}
            clickButton={statusLista === "pendente"}
            onPress={() => setStatusLista("pendente")}
          />

          <BtnListAppointment
            textButton={"Realizadas"}
            clickButton={statusLista === "realizado"}
            onPress={() => setStatusLista("realizado")}
          />

          <BtnListAppointment
            textButton={"Canceladas"}
            clickButton={statusLista === "cancelado"}
            onPress={() => setStatusLista("cancelado")}
          />
        </ContainerButton>
        <ListComponent
          data={Consultas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            statusLista == item.situacao && (
              <AppointmentCard
                navigation={navigation}
                situacao={item.situacao}
                onPressCancel={setShowModalCancel}
                onPressAppointment={setShowModalDoctor}
                onPressDoctor={setShowModalDoctor}
                showsVerticalScrollIndicator={false}
              />
            )
          }
        />
      </DoctorContainer>

      <StethoscopeIcon>
        <ButtonSecondary onPress={() => setShowModalAppointment(true)}>
          <FontAwesome name="stethoscope" size={36} color="white" />
        </ButtonSecondary>
      </StethoscopeIcon>

      {/* Modal de cancelamento */}

      <PatientAppointmentModal
        visible={showModalAppointment}
        setShowModalAppointment={setShowModalAppointment}
        nav={() => navigation.navigate("SelectClinic")}
      />

      <DoctorModal
        visible={showModalDoctor}
        setShowModal={setShowModalDoctor}
        nav={() => navigation.navigate("LocationScreen")}
      />

      <CancellationModal
        visible={showModalCancel}
        setShowModal={setShowModalCancel}
      />
    </Container>
  );
};
