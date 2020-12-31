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
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: ${props=> props.selected ? '#232129': '#f4ede8'};
`;
