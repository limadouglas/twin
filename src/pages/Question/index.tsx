import React, { useCallback } from 'react';
import { Icon, Menu, MenuGroup, MenuItem } from '@ui-kitten/components';
import QuestionsList from './data';
import { Alert, Linking} from "react-native";
// const QuestionIcon = (props) => (
//   <Icon {...props} name='radio-button-off-outline'/> //radio-button-on-outline
// );

const StarIcon = (props) => (
  <Icon {...props} name='star'/>
);

export const Question = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handlePress = useCallback(async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {

      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  return (
    <React.Fragment>

      <Menu
        // selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
          {QuestionsList.map(question=>(
            <MenuGroup key={question.title} title={question.title} >
              <MenuItem onPress={()=>handlePress(question.link)} key={question.title} title={question.link} accessoryLeft={StarIcon}/>
            </MenuGroup>
          ))}

      </Menu>

    </React.Fragment>
  );
};

export default Question;
