import styled from "styled-components";

export const Subtitle = styled.Text.attrs({
  placeholderTextColor: "#5F5C6B",
})`
  font-size: 16px;
  font-family: "Quicksand_500Medium";
  color: ${(props) => `#${props.color}`};
  text-align: center;
  width: 75%;
`;

export const SubtitleDual = styled(Subtitle)`
  width: fit-content;
`;

export const SubtitleHighlighted = styled(Subtitle)`
  font-family: MontserratAlternates_600SemiBold;
  color: ${(props) => `#${props.color}`};
`;
