import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import { List } from '@ui-kitten/components';
import { ItemMenuCard } from '../../components/item-menu-card.component';
import { ExerciseCategoryList } from './extra/data';



export const TrainingCategoryList = ({ route, navigation }): React.ReactElement => {
  const exercises: ExerciseCategoryList[] = [
    ExerciseCategoryList.Peitoral(navigation),
    ExerciseCategoryList.Dorsais(navigation),
    ExerciseCategoryList.Deltoides(navigation),
    ExerciseCategoryList.Trapezio(navigation),
    ExerciseCategoryList.Triceps(navigation),
    ExerciseCategoryList.Biceps(navigation),
    ExerciseCategoryList.Coxas(navigation),
    ExerciseCategoryList.Gluteos(navigation),
    ExerciseCategoryList.Panturrilhas(navigation),
    ExerciseCategoryList.ACL(navigation),
  ];

  const displayTrainings: ExerciseCategoryList[] = exercises;

  const renderVerticalTrainingItem = (info: ListRenderItemInfo<ExerciseCategoryList>): React.ReactElement => (
    <ItemMenuCard
      style={styles.verticalItem}
      item={info.item}
      onCardPress={info.item.navigation}
    />
  );

  return (
    <List
      contentContainerStyle={styles.list}
      data={displayTrainings}
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

export default TrainingCategoryList;
