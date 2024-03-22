import styled from "styled-components";

export const CardContainer = styled.View`
  flex-shrink: 1;
  width: 100%;
  align-items: center;
`;

export const PatientContainer = styled.View`
  width: 95%;
  elevation: 10;
  background-color: white;

  border-radius: 5px;
  margin-top: 30px;
  flex-direction: row;

  align-items: center;
  padding: 10px;
`;

export const CardConsulta = styled.View`
  align-items: center;
`;

export const PatientPhoto = styled.Image`
  width: 77px;
  height: 80px;
  border-radius: 5px;
`;

export const InfoConsulta = styled.View`
  width: 40%;
  margin-left: 10px;
`;

export const InfoPaciente = styled.View`
  width: 100%;
  height: 30px;
  align-items: center;

  justify-content: center;
  flex-direction: row;
`;

export const Age = styled.Text`
  font-family: "Quicksand_400Regular";
  font-size: 14px;
  color: #8c8a97;
  margin-right: 10px;
`;

export const Type = styled.Text`
  font-family: Quicksand_600SemiBold;
  font-size: 14px;
  color: #8c8a97;
`;

export const HourButton = styled.TouchableOpacity`
  border: 1px solid #e8fcfd;
  background-color: #e8fcfd;
  width: 80%;

  height: 30px;
  border-radius: 5px;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  gap: 7px;
`;

export const Hour = styled.Text`
  color: #49b3ba;
  text-align: center;
  font-family: "Quicksand_600SemiBold";
`;
