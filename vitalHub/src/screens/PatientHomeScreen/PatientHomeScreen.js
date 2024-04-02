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
import api from "../../services/service";
import { userDecodeToken } from "../../utils/Auth";




export const PatientHomeScreen = ({ route, navigation }) => {
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
    console.log((`/${url}/BuscarPorData?=data=${dataConsulta}&id=${profile.id}`));
    await api.get(`/${url}/BuscarPorData?=data=${dataConsulta}&id=${profile.id}`).then(response => {

      setConsulta(response.data)
      console.log(consulta);
    }).catch(error => console.log(error))
  }




  
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
            clickButton={statusLista === "Pendentes"}
            onPress={() => setStatusLista("Pendentes")}
          />

          <BtnListAppointment
            textButton={"Realizadas"}
            clickButton={statusLista === "Realizados"}
            onPress={() => setStatusLista("Realizados")}
          />

          <BtnListAppointment
            textButton={"Canceladas"}
            clickButton={statusLista === "Cancelados"}
            onPress={() => setStatusLista("Cancelados")}
          />
        </ContainerButton>
        <ListComponent
          data={consulta}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            statusLista == item.situacao && (
              // <AppointmentCard
              //   navigation={navigation}
              //   situacao={item.situacao}
              //   onPressCancel={setShowModalCancel}
              //   onPressAppointment={setShowModalDoctor}
              //   showsVerticalScrollIndicator={false}
              // />
              <AppointmentCard
              situacao={item.situacao}
              navigation={navigation}
              roleUsuario={profile.role}
              dataConsulta={item.dataConsulta}
              prioridade={item.prioridade.prioridade}
              usuarioConsulta={profile.role == "Medico" ? item.paciente : item.medicoClinica.medico}
              onPressCancel={setShowModalCancel}
              onPressAppointment={setShowModalDoctor}>
                
              </AppointmentCard>
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
