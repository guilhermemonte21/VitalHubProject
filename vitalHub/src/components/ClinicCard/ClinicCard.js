import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  CardContainer,
  CardRow,
  CardColumn,
  CardColumnLeft,
  CardTitle,
  CardText,
  StarText,
  DateBox,
  DateText
} from "./Style";
export const ClinicCard = ({ name, location, starRating, openDays, selected, onPress }) => {
  return (
    <CardContainer selected={selected} onPress={onPress}>
      <CardColumn>
        <CardTitle>{name}</CardTitle>
        <CardText>{location}</CardText>
      </CardColumn>
      <CardColumnLeft>
        <CardRow>
          <AntDesign name="star" size={20} color="#F9A620" />
          <StarText>{starRating}</StarText>
        </CardRow>
        <DateBox>
          <Entypo name="calendar" size={14} color="#49B3BA" />
          <DateText>{openDays}</DateText>
        </DateBox>
      </CardColumnLeft>
    </CardContainer>
  );
};
