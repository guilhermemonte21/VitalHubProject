import styled from "styled-components";
import { Title } from "../Title/Style";

export const ClockBox = styled.View`
  height: 26px;
  width: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.situacao == "pendente" ? "#E8fcfd" : "f1f0f5"};
  border-radius: 5px;
`;

export const ContainerCardsList = styled.View`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 12px;
  padding: 5px;
  border-radius: 5px;
  background-color: #fff;
  flex-direction: row;
  gap: 10px;

  background-color: #fefefe;
  elevation: 2;
  shadow-color: "#000";
  shadow-offset: {
    width: 0;
    height: 0;
  }
  shadow-opacity: 0.08;
  shadow-radius: 5px;
`;

export const ProfileImage = styled.Image`
  width: 77px;
  height: 80px;
  border-radius: 5px;
`;

export const ContentCard = styled.View`
  width: 70%;
  gap: 6px;
  background-color: #fff;
  justify-content: center;
`;

export const DataProfileCard = styled.View`
  gap: 6px;
`;

export const ProfileName = styled(Title)`
  font-size: 16px;
  text-align: left;
`;

export const ProfileData = styled.View`
  flex-direction: row;
`;

export const TextAge = styled.Text`
  font-family: Quicksand_400Regular;
  font-size: 14px;
`;

export const TextBold = styled.Text`
  font-family: Quicksand_600SemiBold;
  color: ${(props) => (props.situacao == "pendente" ? "#49B3BA" : "#8C8A97")};
  margin: 0 0 5px 5px;
`;

export const ViewRow = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ClockCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const ButtonCard = styled.TouchableOpacity`
  background-color: transparent;
  border: none;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-family: MontserratAlternates_500Medium;
  color: ${(props) => (props.situacao == "pendente" ? "#c81d25" : "#344f8f")};
`;

export const ButtonTextRed = styled(ButtonText)`
  color: #c81d25;
`;
