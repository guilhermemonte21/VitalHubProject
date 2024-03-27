import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const HeaderHome = styled(LinearGradient).attrs({
  colors: ['#60BFC5', '#496BBA'],
  start: {x: -0.03, y: 1.5},
  end: {x: 1, y:0}
 })`
  width: 100%;
  height: 144px;
  background-color: #60bfc5;
  border-radius: 0 0 15px 15px;
  padding: 20px;


  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DefaultText = styled.Text`
  font-size: 16px;
  font-family: "Quicksand_500Medium";
  color: #4e4b59;
  text-align: left;
  width: 50%;
  margin-left: 15px;
`;

export const UserName = styled.Text`
  font-size: 20px;
  font-family: "MontserratAlternates_600SemiBold";
  color: #fbfbfb;
  margin-bottom: 5px;
  margin-left: 15px;
  text-align: left;
  width: 50%;
  
  justify-content: column;
`;

export const BellIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

export const FieldContent = styled.View`
  width:75%;
  justify-content: space-between; 
`;

export const UserImageHeader = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

export const WelcomeView = styled.View`
flex-direction: row;
align-items: center;
gap: 20px;
`