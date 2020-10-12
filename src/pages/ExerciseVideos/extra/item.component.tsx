import React, { useCallback } from 'react';
import { Alert, Linking } from 'react-native';
import { Icon, ListItemProps, Menu, MenuGroup, MenuItem } from '@ui-kitten/components';

//import {ExerciseVideoListProps} from '../../../constants/ExerciseVideosList';

const StarIcon = (props) => (
  <Icon {...props} name='star'/>
);

export type ItemProps = ListItemProps & {
  item: any;
};

export const ItemComponent = (props: ItemProps): React.ReactElement => {

  const { item, ...listItemProps } = props;


  const handlePress = useCallback(async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {

      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  return (
      <Menu
        // selectedIndex={selectedIndex}
        //onSelect={index => setSelectedIndex(index)}
        >
        <MenuGroup key={item.categoryName} title={item.categoryName}>
          {item.exerciseList.map(exercise => (<MenuItem onPress={()=>handlePress(exercise.link)} key={exercise.name} title={exercise.name} accessoryLeft={StarIcon}/>))}
        </MenuGroup>
      </Menu>
  );
};

