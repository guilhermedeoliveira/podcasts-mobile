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

import { ViewContainer } from '../shared';
import Loader from '../Loader';
import {
  CarouselContainer,
  CarouselNameContainer,
  CarouselName,
  CarouselItemContainer,
  CarouselTouchableContainer
} from './styles';
import Text from '../Text';

import styles, { em } from '../../styles';

const sliderWidth = styles.width;
const slideWidth = em(10);
const paddingHorizontal = em(1);
const itemWidth = slideWidth + paddingHorizontal;

class MainCarousel extends PureComponent {
  static propTypes = {
    name: string.isRequired,
    entries: array,
    isLoading: bool,
    onPressItem: func.isRequired
  };

  static defaultProps = {
    entries: [],
    isLoading: false
  };

  renderGalleryItem = ({ item }) => {
    const { onPressItem } = this.props;

    return (
      <CarouselItemContainer
        width={itemWidth}
        paddingHorizontal={paddingHorizontal}
      >
        <CarouselTouchableContainer width={slideWidth} onPress={onPressItem}>
          <Image
            style={{ flex: 0.8, width: '100%' }}
            source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
          />

          <ViewContainer flex={0.2}>
            <Text large>Black Album</Text>
            <Text small color={styles.colors.gray}>This is a description</Text>
          </ViewContainer>
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

export default MainCarousel;
