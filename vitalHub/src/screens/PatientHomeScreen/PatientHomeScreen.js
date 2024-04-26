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
import moment from "moment";

export const PatientHomeScreen = ({ route, navigation }) => {
  const [consulta, setConsulta] = useState([]);
  const [dataConsulta, setDataConsulta] = useState("");
  const [profile, setProfile] = useState({});
  const [consultaSelecionada, setConsultaSelecionada] = useState();
  const [statusLista, setStatusLista] = useState("pendente");
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);
  const [showModalDoctor, setShowModalDoctor] = useState(false);
  const [consultaOriginal, setConsultaOriginal] = useState({});

  async function profileLoad() {
    const token = await userDecodeToken();

    if (token) {
      // console.log(token)
      await setProfile(token);

      setDataConsulta(moment().format("YYYY-MM-DD"));
    }
  }

  function MostrarModal(modal, consulta) {
    setConsultaSelecionada(consulta);

    if (modal == "cancelar") {
      setShowModalCancel(true);
    } else if (modal == "prontuario") {
      setShowModalAppointment(true);
    } else {
      setShowModalDoctor(true);
    }
  }

  async function getConsultas() {
    const url = profile.role == "Medico" ? "Medicos" : "Pacientes";
    await api
      .get(`/${url}/BuscarPorData?data=${dataConsulta}&id=${profile.id}`)
      .then((response) => {
        setConsulta(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    profileLoad();
  }, []);

  useEffect(() => {
    if (dataConsulta !== "") {
      getConsultas();
    }
  }, [dataConsulta]);

  return (
    <Container>
      <Header1 />

      <DoctorContainer>
        <CalendarHome setDataConsulta={setDataConsulta} />

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
            statusLista == item.situacao.situacao && (
              <AppointmentCard
                // descricao={item.descricao}
                // observacoes={item.receita}
                situacao={item.situacao.situacao}
                navigation={navigation}
                roleUsuario={profile.role}
                dataConsulta={item.dataConsulta}
                prioridade={item.prioridade.prioridade}
                usuarioConsulta={
                  profile.role == "Medico"
                    ? item.paciente
                    : item.medicoClinica.medico
                }
                onPressCancel={() => MostrarModal("cancelar", item)}
                onPressAppointment={() =>
                  navigation.replace("MedicalRecord", {
                    consultaId: item.id,
                    descricao: item.descricao,
                    diagnostico: item.diagnostico,
                    medicamento: item.descricao,
                  })
                }
                onPressDoctor={() => MostrarModal("", item)}
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
        consulta={consultaSelecionada}
        roleUsuario={profile.role}
        visible={showModalAppointment}
        setShowModalAppointment={setShowModalAppointment}
        setConsultaOriginal={setConsultaOriginal}
        route={route}
        nav={() => navigation.replace("SelectClinic", {consultaEmCadastro: consultaOriginal})}
      />

      <DoctorModal
        visible={showModalDoctor}
        setShowModal={setShowModalDoctor}
        consulta={consultaSelecionada}
        navigation={navigation}
      />

      <CancellationModal
        visible={showModalCancel}
        setShowModal={setShowModalCancel}
        consulta={consultaSelecionada}
      />
    </Container>
  );
};
