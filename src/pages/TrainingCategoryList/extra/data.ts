import { ImageSourcePropType } from 'react-native';

export class ExerciseCategoryList {

  constructor(readonly title: string,
              readonly image: ImageSourcePropType,
              readonly navigation: any) {
  }

  static Peitoral(navigation): ExerciseCategoryList {
    return new ExerciseCategoryList(
      'Peitoral',
      require('../assets/image-training-1.jpg'),
      () => navigation && navigation.navigate('ExerciseVideos', {categoryName: 'Peitoral'})
    );
  }

  static Dorsais(navigation): ExerciseCategoryList {
    return new ExerciseCategoryList(
      'Dorsais',
      require('../assets/image-training-1.jpg'),
      () => navigation && navigation.navigate('ExerciseVideos', {categoryName: 'Dorsais'})
    );
  }

  static Deltoides(navigation): ExerciseCategoryList {
    return new ExerciseCategoryList(
      'Deltóides',
      require('../assets/image-training-1.jpg'),
      () => navigation && navigation.navigate('ExerciseVideos', {categoryName: 'Deltóides'})
    );
  }

  static Trapezio(navigation): ExerciseCategoryList {
    return new ExerciseCategoryList(
      'Trapézio',
      require('../assets/image-training-1.jpg'),
      () => navigation && navigation.navigate('ExerciseVideos', {categoryName: 'Trapézio'})
    );
  }

  static Triceps(navigation): ExerciseCategoryList {
    return new ExerciseCategoryList(
      'Tríceps',
      require('../assets/image-training-1.jpg'),
      () => navigation && navigation.navigate('ExerciseVideos', {categoryName: 'Triceps'})
    );
  }

  static Biceps(navigation): ExerciseCategoryList {
    return new ExerciseCategoryList(
      'Bíceps',
      require('../assets/image-training-1.jpg'),
      () => navigation && navigation.navigate('ExerciseVideos', {categoryName: 'Bíceps'})
    );
  }

  static Antebraco(navigation): ExerciseCategoryList {
    return new ExerciseCategoryList(
      'Antebraço',
      require('../assets/image-training-1.jpg'),
      () => navigation && navigation.navigate('ExerciseVideos', {categoryName: 'Antebraco'})
    );
  }

  static Coxas(navigation): ExerciseCategoryList {
    return new ExerciseCategoryList(
      'Coxas',
      require('../assets/image-training-1.jpg'),
      () => navigation && navigation.navigate('ExerciseVideos', {categoryName: 'Coxas'})
    );
  }

  static Gluteos(navigation): ExerciseCategoryList {
    return new ExerciseCategoryList(
      'Glúteos',
      require('../assets/image-training-1.jpg'),
      () => navigation && navigation.navigate('ExerciseVideos', {categoryName: 'Glúteos'})
    );
  }

  static Panturrilhas(navigation): ExerciseCategoryList {
    return new ExerciseCategoryList(
      'Panturrilhas',
      require('../assets/image-training-1.jpg'),
      () => navigation && navigation.navigate('ExerciseVideos', {categoryName: 'Panturrilhas'})
    );
  }
  static ACL(navigation): ExerciseCategoryList {
    return new ExerciseCategoryList(
      'Abdômen / Core / Lombar',
      require('../assets/image-training-1.jpg'),
      () => navigation && navigation.navigate('ExerciseVideos', {categoryName: 'Abdômen / Core / Lombar'})
    );
  }
}
