import styled from "styled-components";

export const ButtonCamera = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  z-index: 99;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #fbfbfb;
  background-color: #496bba;

  position: absolute;
  bottom: -20px;
  right: 15px;
`;
