import { HeaderHome } from "../../components/Header/Style";
import {
  Container,
  DoctorContainer,
  InfoContainer,
} from "../../components/Container/Style";
import { NotificationBell, UserDoctor } from "../../components/Logo/Style";

import { MontSerratWhite, UserText } from "../../components/Text/Style";
import { CalendarHome } from "../../components/CalendarList/CalendarHome";

import { ContainerButton } from "./Style";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { useState } from "react";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { ListComponent } from "../../components/List/Style";
import { AppointmentModal } from "../../components/AppointmentModal/AppointmentModal";
import { CancellationModal } from "../../components/CancellationModal/CancellationModal";

const Consultas = [
  { id: 1, nome: "Richard", situacao: "pendente" },
  { id: 2, nome: "Richard", situacao: "realizado" },
  { id: 3, nome: "Richard", situacao: "cancelado" },
  { id: 4, nome: "Richard", situacao: "cancelado" },
];

export const DoctorHomeScreen = () => {
  const [statusLista, setStatusLista] = useState("pendente");
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);
  return (
    <Container>
      <HeaderHome>
        <UserDoctor source={require("../../assets/DoctorImage.png")} />
        <InfoContainer>
          <UserText>Bem-vindo</UserText>
          <MontSerratWhite>Dr. Claudio </MontSerratWhite>
        </InfoContainer>

        <NotificationBell source={require("../../assets/Notification.png")} />
      </HeaderHome>

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
                situacao={item.situacao}
                onPressCancel={() => setShowModalCancel(true)}
                onPressAppointment={() => setShowModalAppointment(true)}
                showsVerticalScrollIndicator={false}
              />
            )
          }
        />
      </DoctorContainer>

      {/* Modal de cancelamento */}

      <CancellationModal
        visible={showModalCancel}
        setShowModalCancel={setShowModalCancel}
      />
      <AppointmentModal
        visible={showModalAppointment}
        setShowModalAppointment={setShowModalAppointment}
      />
    </Container>
  );
};
