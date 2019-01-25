import React, { PureComponent } from 'react';
import {
  arrayOf,
  shape,
  string,
  func
} from 'prop-types';

import { ViewContainer } from '../components/shared';
import Ionicon from '../components/Icon/Ionicon';
import PlayerCarousel from '../components/Carousel/PlayerCarousel';
import Player from '../components/Player';

import { goBackButtonStyle } from '../modules/details/styles';
import globalStyles, { em } from '../styles';

class DetailsScreen extends PureComponent {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: shape({
      goBack: func.isRequired,
      state: shape({
        params: shape({
          podcasts: arrayOf(shape({
            band: string.isRequired,
            music: string.isRequired,
            thumbnail: string.isRequired,
            url: string.isRequired
          })).isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  };

  state = {
    activeItem: 0
  };

  goBack = () => {
    const { navigation: { goBack } } = this.props;
    goBack();
  };

  setActiveItem = (activeItem) => {
    this.setState({ activeItem });
  };

  render() {
    const { navigation: { state: { params: { podcasts } } } } = this.props;
    const { activeItem } = this.state;

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

        <PlayerCarousel
          entries={podcasts}
          setActiveItem={this.setActiveItem}
        />

        <Player source={podcasts[activeItem].url} />
      </ViewContainer>
    );
  }
}

export default DetailsScreen;
