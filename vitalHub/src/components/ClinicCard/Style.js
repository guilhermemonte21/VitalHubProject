import styled from "styled-components";

export const CardContainer = styled.TouchableOpacity`
  align-self: center;
  width: 90%;
  height: 84px;
  background-color: #fff;
  margin: 10px;
  
  elevation: 1;
  shadow-color: "#000";
  shadow-offset: {
    width: 0;
    height: 0;
  }
  shadow-opacity: 0.08;
  shadow-radius: 5px;

  border: ${(props) =>
    props.selected == true ? "2px solid #496BBA" : "0"};


  border-radius: 5px;
  padding: 18px;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
`;

export const CardColumn = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;
export const CardColumnLeft = styled.View`
  flex-direction: column;
  align-items: flex-end;
`;

export const CardRow = styled.View`
  flex-direction: row;
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
  font-family: "Quicksand_600SemiBold";
  color: #4e4b59;
  text-align: left;
  width: fit-content;
`;

export const DateBox = styled.View`
  height: 26px;
  width: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #e8fcfd;
  border-radius: 5px;
`;

export const StarText = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_600SemiBold";
  color: #f9a620;
  text-align: right;
  width: fit-content;
`;

export const DateText = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_600SemiBold";
  color: #49b3ba;
  text-align: right;
  width: fit-content;
`;
