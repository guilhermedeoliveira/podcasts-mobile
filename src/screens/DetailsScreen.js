import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { shape, func } from 'prop-types';

import { ViewContainer } from '../components/shared';
import AntIcon from '../components/Icon/AntIcon';
import Ionicon from '../components/Icon/Ionicon';
import EntypoIcon from '../components/Icon/EntypoIcon';

import {
  ControlsContainer,
  goBackButtonStyle,
  mainButtonControlStyle
} from '../modules/details/styles';
import globalStyles, { em } from '../styles';

class DetailsScreen extends PureComponent {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: shape({
      goBack: func.isRequired
    }).isRequired
  };

  state = { isPaused: false };

  goBack = () => {
    const { navigation: { goBack } } = this.props;
    goBack();
  };

  render() {
    const { isPaused } = this.state;

    return (
      <ViewContainer
        backgroundColor={globalStyles.colors.white}
        paddingTop={em(1)}
      >
        <Ionicon
          name="md-arrow-back"
          size={em(2)}
          color={globalStyles.colors.black}
          onPress={this.goBack}
          containerStyle={goBackButtonStyle}
        />

        <View>
          <View style={styles.progressWrapper}>
            <View style={styles.progress} />
          </View>

          <ControlsContainer>
            <EntypoIcon
              name="shuffle"
              size={em(1)}
              color={globalStyles.colors.gray}
            />
            <EntypoIcon
              name="controller-fast-backward"
              size={em(1.8)}
            />
            <AntIcon
              name={isPaused ? 'pause' : 'play'}
              size={em(3.5)}
              color={globalStyles.colors.white}
              containerStyle={mainButtonControlStyle}
            />
            <EntypoIcon
              name="controller-fast-forward"
              size={em(1.8)}
            />
            <Ionicon
              name="ios-repeat"
              size={em(1.5)}
              color={globalStyles.colors.gray}
            />
          </ControlsContainer>
        </View>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});


export default DetailsScreen;
