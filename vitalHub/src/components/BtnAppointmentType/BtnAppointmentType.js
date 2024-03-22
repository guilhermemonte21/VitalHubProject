import { BtnListAppointment } from "../BtnListAppointment/BtnListAppointment";
import { InputLabel } from "../Label/Style";
import { ButtonTabsStyle, ButtonTextStyle } from "./Style";
import { useState } from "react";
import { ContainerRow } from "../Container/Style";

export const BtnAppointmentType = ({
  textButton,
  clickButton = false,
  onPress,
}) => {
  return (
    <>
      <ButtonTabsStyle clickButton={clickButton} onPress={onPress}>
        <ButtonTextStyle clickButton={clickButton}>
          {textButton}
        </ButtonTextStyle>
      </ButtonTabsStyle>
    </>
  );
};
