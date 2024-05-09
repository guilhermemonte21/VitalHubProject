import styled from "styled-components";

export const Link = styled.Text.attrs({
  placeholderTextColor: "#344F8F",
})`
  font-size: 14px;
  color: ${(props) => `${props.color}`};
  font-family: MontserratAlternates_600SemiBold;

  text-decoration: underline;
  text-align: center;

  width: 90%;
  margin-top: 18px;
`;
