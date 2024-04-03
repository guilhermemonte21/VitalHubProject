import { ColumnContainer, LinkButton } from "../../components/DoctorModal/Style";
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
import { useEffect } from "react";
export const LocationScreen = ({ navigation, route }) => {
  useEffect(() => { console.log(route); }, [route.params])
  return (
    <Container>
      <GpsView />
      <FormContainer>
        <ColumnContainer>
          <Title>Clínica Natureh</Title>
          <Subtitle>São Paulo, SP</Subtitle>
        </ColumnContainer>
        <FieldContent>
          <InputLabel>Endereço</InputLabel>
          <InputLightWide placeholder={"Rua Vicenso Silva, 987"}></InputLightWide>
        </FieldContent>
        <Row>
          <FieldContentShort>
            <InputLabel>Número</InputLabel>
            <InputLightSmall placeholder={"578"}></InputLightSmall>
          </FieldContentShort>
          <FieldContentShort>
            <InputLabel>Bairro</InputLabel>
            <InputLightSmall placeholder={"Moema-SP"}></InputLightSmall>
          </FieldContentShort>
        </Row>
        <ButtonSecondary onPress={() => navigation.navigate("Home")}>
          <Link color={"#344F8F"}>Cancelar</Link>
        </ButtonSecondary>
      </FormContainer>
    </Container>
  );
};
