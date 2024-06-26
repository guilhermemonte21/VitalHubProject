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
  doctor
}) => {
  return (
    <CardContainer selected={selected} onPress={onPress}>
      <DoctorImg source={require("../../assets/DoctorImage.png")} />
      <CardColumn>
        <CardTitle>{doctor.idNavigation.nome}</CardTitle>
        <CardText>{doctor.especialidade.especialidade1}</CardText>
      </CardColumn>
    </CardContainer>
  );
};
