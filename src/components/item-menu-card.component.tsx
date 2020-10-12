import React from 'react';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Card, CardElement, CardProps, Text } from '@ui-kitten/components';
import { ImageOverlay } from './image-overlay.component';
import { Training } from './data';

export interface ItemMenuCardProps extends Omit<CardProps, 'children'> {
  item: {
    title: string;
    image: ImageSourcePropType;
  },
  onCardPress:any;

}

export type ItemMenuCardElement = React.ReactElement<ItemMenuCardProps>;

export const ItemMenuCard = (props: ItemMenuCardProps): CardElement => {

  const { style, item, onCardPress, ...cardProps } = props;

  return (
    <Card
      {...cardProps}
      style={[styles.container, style]}
      onPress={onCardPress}
      >
      <ImageOverlay
        style={styles.image}
        source={item.image}>
        <Text
          style={styles.title}
          category='h2'
          status='control'>
          {item.title}
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
  title: {
    zIndex: 1,
    textAlign:'center',
    textAlignVertical:'center'
  },
});
