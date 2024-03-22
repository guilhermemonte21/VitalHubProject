import {
  CardContainer,
  CardColumn,
  CardTitle,
  CardText,
  DoctorImg,
} from "./Style";
export const DoctorCard = ({
  name,
  specialty,
  selected,
  onPress,
}) => {
  return (
    <CardContainer selected={selected} onPress={onPress}>
      <DoctorImg source={require("../../assets/DoctorImage.png")} />
      <CardColumn>
        <CardTitle>{name}</CardTitle>
        <CardText>{specialty}</CardText>
      </CardColumn>
    </CardContainer>
  );
};
