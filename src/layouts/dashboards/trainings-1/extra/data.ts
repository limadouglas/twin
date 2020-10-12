import { ImageSourcePropType } from 'react-native';

export enum TrainingLevel {
  EASY = 'Easy',
  MIDDLE = 'Middle',
  HARD = 'Hard',
}

export class Training {

  constructor(readonly title: string,
              readonly image: ImageSourcePropType) {
  }

  static myTraining(): Training {
    return new Training(
      'Meu Treino',
      require('../assets/image-training-1.jpg'),
    );
  }

  static ExerciseVideos(): Training {
    return new Training(
      'Videos dos Exercícios',
      require('../assets/image-training-2.jpg'),
    );
  }

  static EmergencyExchanges(): Training {
    return new Training(
      'Trocas Emergenciais',
      require('../assets/image-training-3.jpg'),
    );
  }
}
