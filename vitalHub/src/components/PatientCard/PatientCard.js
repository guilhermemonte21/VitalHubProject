import { Image } from "react-native";
import { TitleUser } from "../Title/Style";
import {
  Age,
  CardContainer,
  Hour,
  HourButton,
  InfoConsulta,
  InfoPaciente,
  PatientContainer,
  PatientPhoto,
  Type,
} from "./Style";
import { Clock } from "../Logo/Style";

export const CardPaciente = ({
  imagePatient,
  patientName,
  patientAge,
  appointmentHour,
  appointmentType,
}) => {
  return (
    <CardContainer>
      <PatientContainer>
        <PatientPhoto source={{ uri: imagePatient }} />

        <InfoConsulta>
          <TitleUser style={{ marginLeft: 5, marginBottom: 0 }}>
            {patientName}
          </TitleUser>

          <InfoPaciente>
            <Age>{patientAge}</Age>
            <Type>{appointmentType}</Type>
          </InfoPaciente>

          <HourButton>
            <Clock source={require("../../assets/Clock.png")} />
            <Hour>{appointmentHour}</Hour>
          </HourButton>
        </InfoConsulta>
      </PatientContainer>
    </CardContainer>
  );
};
