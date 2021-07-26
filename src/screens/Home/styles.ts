import { FlatList } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { CarDTO } from "../../DTOS/CarDTO";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${(props) => props.theme.colors.header};
  justify-content: flex-end;
  padding: ${RFValue(32)}px ${RFValue(24)}px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${(props) => props.theme.fonts.primary_400};
  color: ${(props) => props.theme.colors.text};
`;

export const CarList = styled(FlatList as new () => FlatList<CarDTO> ).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false
})``;
