import styled from "styled-components";

export const ButtonTitle = styled.Text`
  color: ${(props) => `${props.color}`};
  font-size: 16px;
  text-transform: uppercase;
  font-family: MontserratAlternates_700Bold;
  text-align: center;
`;

export const ButtonTitleSmall = styled(ButtonTitle)`
  font-size: 12px;
  font-family: MontserratAlternates_600SemiBold;
  text-transform: none;
`;