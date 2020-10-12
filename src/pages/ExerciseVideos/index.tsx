import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Alert, ListRenderItemInfo, Modal, Platform, ScrollView, View } from 'react-native';
import { Button, Icon, Input, Layout, Menu, MenuGroup, MenuItem, StyleService, useStyleSheet } from '@ui-kitten/components';
import { ItemComponent } from './extra/item.component';
import { SearchIcon } from './extra/icons';
import ExerciseVideoList, {ExerciseVideoListProps} from '../../constants/ExerciseVideosList';
import { Linking } from 'react-native';
import WebView from 'react-native-webview';
//import { VideoModal } from 'src/components/video-modal.component';
import YouTube from 'react-native-youtube';
import { ItemList } from '../../components/Item-list.component';

export default ({ route, navigation }): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  const [search, setSearch] = useState('');
  const [categoryName, setCategoryName] = useState<string>(route.params.categoryName);
  const [exerciseList, setExerciseList] = useState<any>();
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [urlVideo, setUrlVideo] = useState<string>('');

  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const scrollRef = useRef();

  useEffect(() => {
    console.log('olaa', categoryName);
    const categoryVideos:ExerciseVideoListProps = ExerciseVideoList.filter(category => category.categoryName === categoryName)
    console.log('categoryVideos', categoryVideos)
    setExerciseList(categoryVideos[0].exerciseList)
    setFilteredDataSource(categoryVideos[0].exerciseList)
  }, [ExerciseVideoList])

  const handlePress = useCallback(async (url) => {
    // const supported = await Linking.canOpenURL(url);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
    setUrlVideo(url)
    setShowVideo(true)
    // if (supported) {
    //   await Linking.openURL(url);
    // } else {
    //   Alert.alert(`Don't know how to open this URL: ${url}`);
    // }
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource and update FilteredDataSource
        const newData = exerciseList.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
    } else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        setFilteredDataSource(exerciseList);
        setSearch(text);
    }
  };

  const CloseIcon = (props) => (
    <Icon {...props} name='close-circle-outline'/>
  );
  const StarIcon = (props) => (
    <Icon {...props} name='star'/>
  );

  const renderItem =  (info: ListRenderItemInfo<Item>) => (
    <ItemComponent
      style={styles.item}
      item={info.item}
    />
  );

  const renderVideo = () => (
    <YouTube
      apiKey='AIzaSyAoZaj-hsrtgwl-h2PwFMnRTlA91Q-3RQg'
      videoId={urlVideo} // The YouTube video ID
      play // control playback of video with true/false
      //fullscreen // control whether the video should play in fullscreen or inline
      loop // control whether the video should loop when ended
      onError={(e)=>{console.log(e)}}
      style={{ alignSelf: 'stretch', height: 300 }}
    />
  )

  const renderHeader = (): React.ReactElement => (
    <Layout
      style={styles.header}
      level='1'>
      <Input
        placeholder='Search'
        value={search}
        onChangeText={(text) => searchFilterFunction(text)}
        // accessoryRight={SearchIcon}
      />
    </Layout>
  );

  return (
    <>
      { renderHeader() }
      <ScrollView ref={scrollRef}>

          { showVideo && renderVideo() }
          {

            !!filteredDataSource &&
              (filteredDataSource.map(exercise=>(
                <ItemList
                  key={exercise.name}
                  style={styles.itemList}
                  hint={exercise.name}
                  onPress={ () => handlePress(exercise.link)}
                />
              )))
              // (<MenuGroup
              //   key={exerciseList.categoryName}
              //   title={exerciseList.categoryName}>
              //   {
              //     exerciseList.exerciseList.map((exercise, index) => (
              //       <MenuItem key={'exercise'+index} onPress={ () => handlePress(exercise.link)} title={exercise.name} accessoryLeft={StarIcon} />
              //     ))
              //   }
              // </MenuGroup>)
          }
      </ScrollView>
    </>
  );
};

const themedStyles = StyleService.create({
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  itemList:{
    padding: 16,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  item: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'background-basic-color-3',
  },
});
