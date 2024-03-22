import RNPickerSelect from "react-native-picker-select";
import { DropdownLabel, DrowdownContainer, DropdownBorder, DropdownContainer } from "./Style";
import { Container } from "../Container/Style";
import { StyleSheet } from "react-native";
import { useState } from "react";

export const Dropdown = ({ labelText, content = [] }) => {
  const [phold, setPhold] = useState();
  return (
    <DropdownContainer>
      <DropdownLabel>{labelText}</DropdownLabel>
      <DropdownBorder>
        <RNPickerSelect
          style={{ ...pickerStyles }}
          onValueChange={(value) => setPhold(value)}
          items={content}
          placeholder={{ label: 'Selecione um horário', value: null }}
        />
      </DropdownBorder>
    </DropdownContainer>
  );
};
const pickerStyles = StyleSheet.create({
  inputAndroid: {
    borderWidth: 2,
    borderColor: "#60bfc5",
    borderRadius: 5,
    margin: 0,


    color: "#34898f",
    fontSize: 14,
    fontFamily: "MontserratAlternates_600SemiBold",
  },
});
