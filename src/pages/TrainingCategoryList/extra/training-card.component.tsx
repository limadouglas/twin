import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, CardElement, CardProps, Text } from '@ui-kitten/components';
import { ImageOverlay } from './image-overlay.component';
import { ClockIcon } from './icons';
import { Training } from './data';

export interface TrainingCardProps extends Omit<CardProps, 'children'> {
  training: Training;
}

export type TrainingCardElement = React.ReactElement<TrainingCardProps>;

export const TrainingCard = (props: TrainingCardProps): CardElement => {

  const { style, training, ...cardProps } = props;

  return (
    <Card
      {...cardProps}
      style={[styles.container, style]}>
      <ImageOverlay
        style={styles.image}
        source={training.image}>
        {/* <Text
          style={styles.level}
          category='s1'
          status='control'>
          {"Teste 123"}
        </Text> */}
        <Text
          style={styles.title}
          category='h2'
          status='control'>
          {training.title}
        </Text>
      </ImageOverlay>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: 200,
    paddingVertical: 24,
    paddingHorizontal: 16,
    justifyContent:'center'

  },
  level: {
    zIndex: 1,
  },
  title: {
    zIndex: 1,
    textAlign:'center',
    textAlignVertical:'center'
  },
});
