import React from 'react'
import styled from 'styled-components/native';
import { FlatList, RectButton } from 'react-native-gesture-handler';

export interface WeekProps{
  name: string;
  id: number;
}
interface WeekContainerProps{
  selected: boolean;
}
interface WeekNameProps{
  selected: boolean;
}

export const WeekListContainer = styled.View`
  height: 112px;
`;

export const WeekList = styled(FlatList as new()=> FlatList<WeekProps>)`
  padding: 32px 10px;
`;


export const WeekContainer = styled(RectButton)<WeekContainerProps>`
  background: ${props=> props.selected ? '#ff9000': '#3e3b47'};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 10px;
  width: 95px;
`;

export const WeekName = styled.Text<WeekNameProps>`
  font-size: 16px;
  color: ${props=> props.selected ? '#232129': '#f4ede8'};
`;


export const Container = styled.View`
  padding: 10px;
`;


export const CardTrainingContainer = styled(RectButton)`
  flex:1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #DAD8DA;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;

`;

export const CardTrainingName = styled.Text`
  font-size:16px;
  width: 200px;
`;

export const CardTrainingDetails = styled.View`
  align-items: center;
`;

export const CardTrainingDetailsQtde = styled.Text`
  font-size:16px;
`;

export const CardTrainingDetailsName = styled.Text`
  font-size:16px;
`;


