/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import {
  oneOfType,
  string,
  number,
  func
} from 'prop-types';
import Video from 'react-native-video';

import Text from '../Text';
import AntIcon from '../Icon/AntIcon';
import Ionicon from '../Icon/Ionicon';
import EntypoIcon from '../Icon/EntypoIcon';
import {
  PlayerContainer,
  ProgressContainer,
  ProgressSlider,
  DurationContainer,
  ControlsContainer,
  mainButtonControlStyle
} from './styles';

import globalStyles, { em } from '../../styles';

class Player extends PureComponent {
  static propTypes = {
    source: oneOfType([string, number]).isRequired,
  };

  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    paused: false
  };

  onLoad = (data) => {
    this.setState({ duration: data.duration });
  };

  /*
  onBuffer = (event) => {
    this.setState({ isBuffering: event.isBuffering });
  };
  */

  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
  };

  onEnd = () => {
    this.setState(
      { paused: true, currentTime: 0.0 },
      this.video.seek(0.0)
    );
  };

  onAudioBecomingNoisy = () => {
    this.setState({ paused: true });
  };

  onBackwardVideo = () => {
    const { currentTime } = this.state;

    this.setState(
      { currentTime: currentTime - 10 },
      this.video.seek(currentTime - 10)
    );
  };

  onForwardVideo = () => {
    const { currentTime } = this.state;

    this.setState(
      { currentTime: currentTime + 10 },
      this.video.seek(currentTime + 10)
    );
  };

  onChangeSliderValue = (currentTime) => {
    this.setState({
      currentTime
    }, this.video.seek(currentTime));
  };

  getCurrentTimePercentage = () => {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }

    return 0;
  };

  onPlayVideo = () => {
    this.setState(() => ({ paused: false }));
  };

  onPauseVideo = () => {
    this.setState(() => ({ paused: true }));
  };

  onRefreshVideo = () => {
    this.setState(() => ({ currentTime: 0.0 }));

    this.video.seek(0.0);
    this.onPlayVideo();
  };

  render() {
    const { source } = this.props;
    const { paused, duration } = this.state;

    return (
      <PlayerContainer>
        <Video
          ref={(ref) => { this.video = ref; }}
          /* For ExoPlayer */
          source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' }}
          // source={{ uri: source }}
          // source={source}
          onBuffer={this.onBuffer}
          rate={this.state.rate}
          paused={this.state.paused}
          volume={this.state.volume}
          muted={this.state.muted}
          resizeMode={this.state.resizeMode}
          onLoad={this.onLoad}
          onProgress={this.onProgress}
          onEnd={this.onEnd}
          onAudioBecomingNoisy={this.onAudioBecomingNoisy}
          onAudioFocusChanged={this.onAudioFocusChanged}
          repeat={false}
          playWhenInactive={false}
          playInBackground={false}
        />

        <ProgressContainer onPress={this.handleProgressPress}>
          <ProgressSlider
            minimumValue={0}
            maximumValue={this.state.duration}
            value={this.state.currentTime}
            onValueChange={currentTime => this.onChangeSliderValue(currentTime)}
          />
        </ProgressContainer>

        <DurationContainer>
          <Text small color={globalStyles.colors.gray}>
            {duration ? '00.00' : '--.--'}
          </Text>
          <Text small color={globalStyles.colors.gray}>
            {duration ? duration.toFixed(2) : '--.--'}
          </Text>
        </DurationContainer>

        <ControlsContainer>
          <EntypoIcon
            name="shuffle"
            size={em(1)}
            color={globalStyles.colors.gray}
          />
          <EntypoIcon
            name="controller-fast-backward"
            size={em(1.8)}
            onPress={this.onBackwardVideo}
          />
          <AntIcon
            name={paused ? 'play' : 'pause'}
            size={em(3.5)}
            color={globalStyles.colors.white}
            onPress={paused ? this.onPlayVideo : this.onPauseVideo}
            containerStyle={mainButtonControlStyle}
          />
          <EntypoIcon
            name="controller-fast-forward"
            size={em(1.8)}
            onPress={this.onForwardVideo}
          />
          <Ionicon
            name="ios-repeat"
            size={em(1.5)}
            color={globalStyles.colors.gray}
          />
        </ControlsContainer>
      </PlayerContainer>
    );
  }
}

export default Player;
