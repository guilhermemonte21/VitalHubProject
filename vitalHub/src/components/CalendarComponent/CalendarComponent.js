import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
export const CalendarComponent = ({setDataSelecionada, dataSelecionada}) => {
  LocaleConfig.locales.br = {
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthNamesShort: [
      "Jan.",
      "Fev.",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul.",
      "Ago",
      "Set.",
      "Out.",
      "Nov.",
      "Dez.",
    ],
    dayNames: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
    dayNamesShort: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb."],
    today: "Hoje",
  };

  LocaleConfig.defaultLocale = "br";

  return (
    <Calendar
      style={{
        borderColor: "gray",
        height: 350,
        width: "100%",
        fontFamily: "Quicksand_600SemiBold",
        margin: 15
      }}
      theme={{
        backgroundColor: "transparent",
        calendarBackground: "#transparent",
        textSectionTitleColor: "#5f5c6b",
        selectedDayBackgroundColor: "#60BFC5",
        selectedDayTextColor: "#FBFBFB",
        todayTextColor: "#60BFC5",
        dayTextColor: "#5F5C6B",
        textDisabledColor: "#ACABB7",
      }}
      // Mark specific dates as marked
      onDayPress={(day) => {
        setDataSelecionada(day.dateString);
      }}
      markedDates={{
        [dataSelecionada]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: "orange",
        },
      }}
    />
  );
};
