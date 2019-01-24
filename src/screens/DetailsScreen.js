import React, { PureComponent } from 'react';
import { shape, func } from 'prop-types';

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
      goBack: func.isRequired
    }).isRequired
  };

  state = {
    activeItem: 0,
    currentSound: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    ]
  };

  goBack = () => {
    const { navigation: { goBack } } = this.props;
    goBack();
  };

  setActiveItem = (activeItem) => {
    this.setState({ activeItem });
  };

  render() {
    const { currentSound, activeItem } = this.state;

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
          entries={[0, 1, 2, 3, 4, 5, 6]}
          setActiveItem={this.setActiveItem}
        />

        <Player source={currentSound[activeItem]} />
      </ViewContainer>
    );
  }
}

export default DetailsScreen;
