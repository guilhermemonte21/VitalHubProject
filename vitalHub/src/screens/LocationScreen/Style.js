import styled from "styled-components";
import { RowContainer } from "../../components/DoctorModal/Style";
import { InputLight } from "../../components/Input/Style";
import { FieldContent } from "../../components/Container/Style";

export const GPSimg = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Row = styled(RowContainer)`
  width: 50%;
  margin-left: 30px;
`;

export const InputLightWide = styled(InputLight)`
  width: 100%;
`;

export const InputLightSmall = styled(InputLight)`
  width: 80%;
`;

export const FieldContentShort = styled(FieldContent)`
  width: 100%;
`;

export const FormContainer = styled.View`
  height: 350px;
  width: 100%;

  background-color: white;
  border-radius: 10px;
  align-self: flex-start;
  
  padding: 25px;
  gap: 10px;
  align-items: center;
  z-index: 99;
`;
