import styled from "styled-components";

export const PatientModal = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.View`
  width: 90%;
  border-radius: 10px;

  padding: 30px 30px 10px;
  background-color: #fff;
  align-items: center;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  color: #5f5c6b;

  width: 270px;
  line-height: 22px;

  text-align: center;
  margin-top: 10px;
`;
