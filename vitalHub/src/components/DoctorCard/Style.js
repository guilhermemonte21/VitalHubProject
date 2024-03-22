import styled from "styled-components";

export const DoctorImg = styled.Image`
  width: 80px;
  height: 80px;
`;

export const CardContainer = styled.TouchableOpacity`
  align-self: center;
  width: 90%;
  height: 100px;
  background-color: #fff;

  elevation: 1;
  shadow-color: "#000";
  shadow-offset: {
    width: 0;
    height: 0;
  }
  shadow-opacity: 0.08;
  shadow-radius: 5px;

  border: ${(props) => (props.selected == true ? "2px solid #496BBA" : "0")};

  border-radius: 5px;
  padding: 18px;
  margin: 10px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-family: "MontserratAlternates_600SemiBold";
  color: #33303e;
  text-align: left;
  width: fit-content;
`;
export const CardText = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_500Medium";
  color: #8c8a97;
  text-align: left;
  width: fit-content;
`;

export const CardColumn = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;
