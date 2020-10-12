import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import { List, Text } from '@ui-kitten/components';
import { TrainingCard } from './extra/training-card.component';
import { Training } from './extra/data';

const trainings: Training[] = [
  Training.myTraining(),
  Training.ExerciseVideos(),
  Training.EmergencyExchanges(),
];

export const TrainingsListScreen = ({ route }): React.ReactElement => {

  const displayTrainings: Training[] = trainings;

  const renderVerticalTrainingItem = (info: ListRenderItemInfo<Training>): React.ReactElement => (
    <TrainingCard
      style={styles.verticalItem}
      training={info.item}
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
