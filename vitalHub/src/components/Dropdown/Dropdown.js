import RNPickerSelect from "react-native-picker-select";
import { DropdownLabel, DropdownBorder, DropdownContainer } from "./Style";
import { Container } from "../Container/Style";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import moment from "moment";

export const Dropdown = ({ labelText, content = [], setHoraSelecionada }) => {
  const dataAtual = moment().format("YYYY-MM-DD");
  const [arrayOptions, setArrayOptions] = useState(null);

  async function loadOptions() {
    //Capturar a quantidade que faltam para 24h

    const horasRestantes = moment(dataAtual)
      .add(24, "hours")
      .diff(moment(), "hours");

    console.log(horasRestantes);

    //Criar um laço que rode a quantidade de horas

    const options = Array.from({ length: horasRestantes }, (_, index) => {
      let valor = new Date().getHours() + (index + 1);

      //Pra cada hora será uma nova option

      return {
        label: `${valor}:00`,
        value: `${valor}:00`,
      };
    });

    setArrayOptions(options);
  }

  useEffect(() => {
    loadOptions();
  }, []);

  const [phold, setPhold] = useState();
  return (
    <DropdownContainer>
      <DropdownLabel>{labelText}</DropdownLabel>
      <DropdownBorder>
        {arrayOptions ? (
          <RNPickerSelect
            style={{ ...pickerStyles }}
            onValueChange={(value) => setHoraSelecionada(value)}
            items={arrayOptions}
            placeholder={{ label: "Selecione um horário", value: null }}
          />
        ) : null}
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
