import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  background-color: #FBFBFB;
`;

export const ContainerRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const FieldContent = styled.SafeAreaView`
  margin-bottom: 15px;
  width: 90%;
`;

export const FieldContentSmall = styled(FieldContent)`
  width: 40%;
`;

export const InfoContainer = styled.View`
  padding: 0px;
  justify-content: center;
  padding: 5px;

  width: 30%;
  height: 30%;
  margin-left: 10px;
  margin-top: 50px;
`;

export const DoctorContainer = styled.View`
  flex: 1;
  width: 100%;
`;
