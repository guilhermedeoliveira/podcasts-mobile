import React from 'react';
import { StyleSheet, View } from 'react-native';

import CarouselParallax from '../components/Carousel/CarouselParallax';
import AntIcon from '../components/Icon/AntIcon';
import Ionicon from '../components/Icon/Ionicon';
import EntypoIcon from '../components/Icon/EntypoIcon';

import globalStyles, { em } from '../styles';
import Text from '../components/Text';

const DetailsScreen = () => (
  <React.Fragment>
    <CarouselParallax entries={[0, 1, 2, 3, 4, 5, 6, 7, 8]} />

    <View style={styles.player}>
      <View style={styles.progressWrapper}>
        <View style={styles.progress} />
      </View>

      <View style={styles.content}>
        <EntypoIcon name="shuffle" size={12} color="#FFF" />
        <EntypoIcon name="controller-fast-backward" size={24} color="#FFF" />
        <AntIcon name="pause" size={24} color="#FFF" />
        <EntypoIcon name="controller-fast-forward" size={24} color="#FFF" />
        <Ionicon name="ios-repeat" size={24} color="#FFF" />
      </View>
    </View>
  </React.Fragment>
);

const styles = StyleSheet.create({
  player: {
    alignSelf: 'stretch'
  },

  progressWrapper: {
    flexDirection: 'row',

    height: 2,
    backgroundColor: globalStyles.colors.yellowBorder,
    marginBottom: em(2)
  },


  progress: {
    flex: 0.5,

    height: 2,
    backgroundColor: globalStyles.colors.gray,
    marginBottom: em(2)
  },

  content: {
    height: 42,
    backgroundColor: globalStyles.colors.gray,
    borderColor: globalStyles.colors.black,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: em(1),
    justifyContent: 'space-between'
  },

  current: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  title: {
    // color: colors.text
    // fontSize: fonts.medium,
  },

  description: {
    // color: colors.textInactive,
    // fontSize: fonts.tiny,
  }
});


export default DetailsScreen;
