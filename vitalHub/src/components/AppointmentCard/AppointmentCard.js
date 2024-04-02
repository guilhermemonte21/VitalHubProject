import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import {
  ContainerCardsList,
  ProfileImage,
  ContentCard,
  DataProfileCard,
  ProfileName,
  ProfileData,
  TextAge,
  TextBold,
  ViewRow,
  ClockCard,
  ButtonCard,
  ButtonText,
  ClockBox,
  ButtonTextRed,
} from "./Style";
import { ButtonSecondary } from "../Button/Style";

export const AppointmentCard = ({
  profile = "Paciente", // :3
  situacao = "pendente",
  onPressCancel,
  onPressAppointment,
  onPressDoctor,
  navigation,
}) => {
  return (
    <ContainerCardsList>
      <ButtonSecondary onPress={() => onPressDoctor(true)}>
        <ProfileImage
          source={require("../../assets/ProfileImgPlaceholder.png")}
        />
      </ButtonSecondary>
      <ContentCard>
        <DataProfileCard>
          <ProfileName>Gustavo Magalhães</ProfileName>
          <ProfileData>
            <TextAge>19 anos</TextAge>
            <Entypo name="dot-single" size={3} color="#D9D9D9" />
            <TextBold>Rotina</TextBold>
          </ProfileData>

          <ViewRow>
            <ClockCard>
              <ClockBox situacao={situacao}>
                <AntDesign
                  name="clockcircle"
                  size={14}
                  color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
                />
                <TextBold situacao={situacao}>14:00</TextBold>
              </ClockBox>
              {situacao == "cancelado" ? (
                <></>
              ) : situacao == "pendente" ? (
                <ButtonCard onPress={() => onPressCancel(true)}>
                  <ButtonTextRed>Cancelar</ButtonTextRed>
                </ButtonCard>
              ) : (
                <ButtonCard
                  onPress={
                    profile !== "Paciente"
                      ? () => onPressAppointment(true)
                      : () => navigation.navigate("MedicalRecord")
                  }
                >
                  <ButtonText>Ver prontuário</ButtonText>
                </ButtonCard>
              )}
            </ClockCard>
          </ViewRow>
        </DataProfileCard>
      </ContentCard>
    </ContainerCardsList>
  );
};
