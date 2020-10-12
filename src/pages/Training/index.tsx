import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import { List } from '@ui-kitten/components';
import { ItemMenuCard } from '../../components/item-menu-card.component';
import { Training } from './extra/data';



export const TrainingsListScreen = ({ route, navigation }): React.ReactElement => {
  const trainings: Training[] = [
    Training.myTraining(navigation),
    Training.exerciseVideos(navigation),
    Training.emergencyExchanges(navigation),
  ];

  const displayTrainings: Training[] = trainings;

  const renderVerticalTrainingItem = (info: ListRenderItemInfo<Training>): React.ReactElement => (
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

export default TrainingsListScreen;
