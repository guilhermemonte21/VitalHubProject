import styled from "styled-components";
import { Button, ButtonSecondary } from "../Button/Style";
import { Subtitle } from "../Subtitle/Style";

export const PatientModal = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  height: 90%;
`;

export const ModalContent = styled.View`
  width: 90%;
  height: 80%;
  border-radius: 10px;

  padding: 20px 10px 10px;
  background-color: #fff;
  align-items: center;
  justify-content: space-evenly;
`;

export const ModalSubtitle = styled(Subtitle)`
  text-align: center;
  width: 100%;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: MontserratAlternates_600SemiBold;

  width: 100%;
  line-height: 22px;

  text-align: left;
  margin-top: 10px;
  margin-left: 20px;
`;

export const ModalTextSmall = styled.Text`
  font-size: 16px;
  color: #5f5c6b;
  font-family: Quicksand_500Medium;

  width: 100%;
  line-height: 22px;
  margin-left: 20px;

  text-align: left;
`;

export const ColumnContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ConfirmButton = styled(Button)`
  width: 100%;
`;

export const LinkButton = styled(ButtonSecondary)`
  margin: 0;
`;
