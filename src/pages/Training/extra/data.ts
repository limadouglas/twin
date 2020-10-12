import { ImageSourcePropType } from 'react-native';

export class Training {

  constructor(readonly title: string,
              readonly image: ImageSourcePropType,
              readonly navigation: any) {
  }

  static myTraining(navigation): Training {
    return new Training(
      'Meu Treino',
      require('../assets/image-training-1.jpg'),
      () => navigation && navigation.navigate('MyTraining')
    );
  }

  static exerciseVideos(navigation): Training {
    return new Training(
      'Videos dos Exercícios',
      require('../assets/image-training-2.jpg'),
      () => navigation && navigation.navigate('ExerciseVideos')
    );
  }

  static emergencyExchanges(navigation): Training {
    return new Training(
      'Trocas Emergenciais',
      require('../assets/image-training-3.jpg'),
      () => navigation && navigation.navigate('EmergencyExchanges')
    );
  }
}
