/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import {
  array,
  string,
  bool,
  func
} from 'prop-types';
import Carousel from 'react-native-snap-carousel';

import Loader from '../Loader';
import {
  CarouselContainer,
  CarouselNameContainer,
  CarouselName,
  CarouselItemContainer,
  CarouselTouchableContainer
} from './styles';

import styles, { em } from '../../styles';

const sliderWidth = styles.width;
const slideWidth = em(10);
const paddingHorizontal = em(1);
const itemWidth = slideWidth + paddingHorizontal;

class StyledCarousel extends PureComponent {
  static propTypes = {
    name: string.isRequired,
    entries: array,
    isLoading: bool.isRequired,
    onPressItem: func.isRequired
  };

  static defaultProps = {
    entries: []
  };

  renderGalleryItem = ({ item }) => {
    const { onPressItem } = this.props;

    return (
      <CarouselItemContainer
        width={itemWidth}
        paddingHorizontal={paddingHorizontal}
      >
        <CarouselTouchableContainer width={slideWidth}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
          />
        </CarouselTouchableContainer>
      </CarouselItemContainer>
    );
  };

  render() {
    const { entries, name, isLoading } = this.props;

    if (isLoading) return <Loader />;

    return (
      <CarouselContainer>
        <CarouselNameContainer>
          <CarouselName extraLarge light>{name}</CarouselName>
        </CarouselNameContainer>

        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={entries}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          renderItem={this.renderGalleryItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          activeSlideAlignment="start"
          // onSnapToItem={index => this.setState({ activeSlide: index })}
        />
      </CarouselContainer>
    );
  }
}

export default StyledCarousel;
