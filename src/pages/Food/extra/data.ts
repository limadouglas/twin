import { ImageSourcePropType } from 'react-native';

export class Food {

  constructor(readonly title: string,
              readonly image: ImageSourcePropType) {
  }

  static AnabolicRecipes(): Food {
    return new Food(
      'Receitas Anabolicas',
      require('../assets/anabolic_recipes-background.jpg'),
    );
  }

  static EquivalentFoods(): Food {
    return new Food(
      'Alimentos Equivalentes',
      require('../assets/equivalent_foods-background.jpg'),
    );
  }

}
