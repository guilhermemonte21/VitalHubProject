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
import { useEffect, useState } from "react";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { ListComponent } from "../../components/List/Style";
import { AppointmentModal } from "../../components/AppointmentModal/AppointmentModal";
import { CancellationModal } from "../../components/CancellationModal/CancellationModal";
import api from "../../services/service";
import { responsiveArray } from "antd/es/_util/responsiveObserver";
import { userDecodeToken } from "../../utils/Auth";




export const DoctorHomeScreen = () => {

  async function profileLoad() {
    const token = await userDecodeToken()

    if (token) {

        // console.log(token)
        setProfile(token)
        console.log(token);
    }


  // async function profileLoad() {
  //   const token = await userDecodeToken()
    

  //   if (token =! null) {

  //   console.log('1');
  //     console.log(token)
  //     console.log(token)
  //     setProfile(token)
  // }

  }

  async function getConsultas() {
    const url = profile.role == 'Medico' ? 'Medicos' : 'Pacientes'
    await api.get(`/${url}/BuscarPorData?=data=${dataConsulta}&id=${profile.id}`).then(response => {
      setConsulta(response.data)
    }).catch(error => console.log(error))
  }




  const [statusLista, setStatusLista] = useState("pendente");
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);
  const [consulta, setConsulta] = useState([])
  const [dataConsulta, setDataConsulta] = useState([])
  const [profile, setProfile] = useState({})


  // async function getConsulta() {
  //   api.get("/Consultas").then(response => { setConsulta(response.data) }).catch(error => console.log(error))
  // }

  useEffect(() => {
    profileLoad()
    console.log("passo1");
    getConsultas()

    console.log(getConsultas())
  }, [])
  useEffect(() => {
    console.log(dataConsulta);
    setProfile()


  }, [dataConsulta])
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
        <CalendarHome
          setDataConsulta={setDataConsulta}
        />

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
          data={consulta}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            statusLista == item.situacao && (
              <AppointmentCard
                name={item.medicoClinica.medico.idNavigation.nome}
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
