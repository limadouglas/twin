import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Button, Layout, Modal } from '@ui-kitten/components';
import WebView from 'react-native-webview';

export const VideoModal=():React.ReactElement=> {

  const [visible, setVisible] = React.useState(false);

  return (
    <Layout style={styles.container}>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
          <WebView
            style={ {  width:300,  flex:1, marginTop: (Platform.OS == 'ios') ? 20 : 0,} }
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: 'https://www.youtube.com/embed/Z43Ji7H2Xnw'}}//+this.state.pictureData.idVideo }}
          />
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
    flex:1,
  },
  backdrop: {
    flex:1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
