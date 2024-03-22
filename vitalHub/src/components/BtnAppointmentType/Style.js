import styled, { css } from "styled-components";

export const ButtonTabsStyle = styled.TouchableHighlight`
  padding: 6px 6px;
  border-radius: 5px;

  ${(props) =>
    props.clickButton
      ? css`
          background-color: #49b3ba;
        `
      : css`
          background-color: #fbfbfb;
          border: 2px solid #49b3ba;
        `}
  width: 30%;
  height: 53px;
  margin-top: 5px;

  align-items: center;
  justify-content: center;

  color: #4e4b59;
  font-size: 14px;
  color: #33303e;
  font-family: MontserratAlternates_500Medium;
  text-align: left;
`;

export const ButtonTextStyle = styled.Text`
  font-size: 14px;
  font-family: "MontserratAlternates_600SemiBold";
  text-align: center;
  vertical-text-align: center;

  ${(props) =>
    props.clickButton
      ? css`  
          color: #fbfbfb;
        `
      : css`
          color: #34898F;
        `}
`;
