import React from 'react';
import { Icon } from '@ui-kitten/components';

export const IconTraining= (props) => (
  <Icon {...props} name='trending-up-outline'/>
);

export const IconFood = (props) => (
  <Icon {...props} name='flash-outline'/>
);

export const IconQuestion = (props) => (
  <Icon {...props} name='question-mark-circle-outline'/>
);

export const IconMore = (props) => (
  <Icon {...props} name='more-horizontal-outline'/>
);

export const IconOption:any = {
    Training: {icon: IconTraining, name:'Treinos'},
    Food: {icon: IconFood, name:'Alimentos'},
    Question: {icon: IconQuestion, name:'Perguntas'},
    More: {icon: IconMore, name:'Mais'},
};



// export const menuLayout = {
//   Training:{
//     icon:{
//       default: 'barbell-outline',
//       focused: 'barbell',
//     }
//   },
//   Food:{
//     icon:{
//       default: 'restaurant-outline',
//       focused: 'restaurant',
//     }
//   },
//   Question:{
//     icon:{
//       default: 'help-circle-outline',
//       focused: 'help-circle',
//     }
//   },
//   More:{
//     icon:{
//       default: 'ellipsis-horizontal-outline',
//       focused: 'ellipsis-horizontal',
//     }
//   },

// }
