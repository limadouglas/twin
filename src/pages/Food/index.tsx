import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import { List } from '@ui-kitten/components';
import { ItemMenuCard } from '../../components/item-menu-card.component';
import { Food } from './extra/data';

const foods: Food[] = [
  Food.AnabolicRecipes(),
  Food.EquivalentFoods(),
];

export const FoodListScreen = ({ route }): React.ReactElement => {

  const displayFood: Food[] = foods;

  const renderVerticalTrainingItem = (info: ListRenderItemInfo<Food>): React.ReactElement => (
    <ItemMenuCard
      style={styles.verticalItem}
      item={info.item}
    />
  );

  return (
    <List
      contentContainerStyle={styles.list}
      data={displayFood}
      renderItem={renderVerticalTrainingItem}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 24,
  },
  headerTitle: {
    marginHorizontal: 16,
  },
  horizontalList: {
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  verticalItem: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  horizontalItem: {
    width: 256,
    marginHorizontal: 8,
  },
});

export default FoodListScreen;
