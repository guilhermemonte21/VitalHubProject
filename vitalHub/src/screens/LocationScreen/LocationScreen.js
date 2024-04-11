import {
  ColumnContainer,
  LinkButton,
} from "../../components/DoctorModal/Style";
import { Title } from "../../components/Title/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { FormContainer, GPSimg, InputLightWide, Row } from "./Style";
import { InputLabel } from "../../components/Label/Style";
import {
  Container,
  FieldContent,
  FieldContentSmall,
} from "../../components/Container/Style";
import { InputLight } from "../../components/Input/Style";
import { InputLightSmall, FieldContentShort } from "./Style";
import GpsView from "../../components/GpsView/GpsView";
import { ButtonSecondary } from "../../components/Button/Style";
import { Link } from "../../components/Link/Style";
import { useEffect, useState } from "react";
import api from "../../services/service";
export const LocationScreen = ({ navigation, route }) => {
  const [clinica, setClinica] = useState({});
  const [endereco, setEndereco] = useState({});
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  async function BuscarClinica() {
    await api
      .get(`/Clinica/BuscarPorId?id=${route.params.clinicaId}`)
      .then((response) => {
        setClinica(response.data);
        setEndereco(response.data.endereco);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setLatitude(clinica.endereco.latitude);
    setLongitude(clinica.endereco.longitude);
  }

  useEffect(() => {
    BuscarClinica();
  }, []);

  return (
    <Container>
      <GpsView latFinal={latitude} longFinal={longitude} />
      {clinica ? (
        <FormContainer>
          <ColumnContainer>
            <Title>{clinica.nomeFantasia}</Title>
            <Subtitle>{endereco.cidade}, SP</Subtitle>
          </ColumnContainer>
          <FieldContent>
            <InputLabel>Endereço</InputLabel>
            <InputLightWide
              placeholder={"Endereco"}
              value={`${endereco.logradouro}, ${endereco.numero}`}
            ></InputLightWide>
          </FieldContent>
          <Row>
            <FieldContentShort>
              <InputLabel>Número</InputLabel>
              <InputLightSmall
                placeholder={"Número"}
                value={`${endereco.numero}`}
              ></InputLightSmall>
            </FieldContentShort>
            <FieldContentShort>
              <InputLabel>Bairro</InputLabel>
              <InputLightSmall
                placeholder={"Bairro"}
                value={""}
              ></InputLightSmall>
            </FieldContentShort>
          </Row>
          <ButtonSecondary onPress={() => navigation.navigate("Home")}>
            <Link color={"#344F8F"}>Cancelar</Link>
          </ButtonSecondary>
        </FormContainer>
      ) : (
        <></>
      )}
    </Container>
  );
};
