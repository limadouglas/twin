import React from 'react';
import { View } from 'react-native';
import YouTube from 'react-native-youtube';

interface VideoProps {
  showVideo: boolean;
  urlVideo: string;
}

export const VideoYoutube=({showVideo=false, urlVideo=''}: VideoProps): React.ReactElement => {

  return (
      showVideo && urlVideo
      ? <YouTube
          apiKey='AIzaSyAoZaj-hsrtgwl-h2PwFMnRTlA91Q-3RQg'
          resumePlayAndroid={false}
          videoId={urlVideo} // The YouTube video ID
          play// control playback of video with true/false
          loop // control whether the video should loop when ended
          onError={(e)=>{console.log(e)}}
          style={{ alignSelf: 'stretch', height: 300 }}
          />
      : <View></View>
  );
};
