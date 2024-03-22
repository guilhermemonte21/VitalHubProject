import styled from "styled-components";
import { Button, ButtonSecondary } from "../../components/Button/Style";
export const RecordContainer = styled.View`
  align-items: center;
  gap: 10px;
  scroll-behavior: top;
  width: 100%;
`;

export const CameraButton = styled(Button)`
  width: 50%;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #49b3ba;
  border: 0;
`;

export const CancelCard = styled(CameraButton)`
  width: 30%;
  background-color: transparent;
`;

export const CancelText = styled.Text`
  font-size: 12px;
  font-family: MontserratAlternates_500Medium;
  color: #c81d25;
`;

export const PictureImg = styled.Image`
  height: 111px;
  border-radius: 5px;
  width: 90%;
`;

export const PicturePlaceholder = styled.View`
  height: 111px;
  border-radius: 5px;
  width: 90%;
  background-color: #f5f3f3;

  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-direction: row;
`;

export const PlaceholderText = styled.Text`
  font-family: "MontserratAlternates_500Medium";
  font-size: 16px;
  color: #4E4B59;
`;
