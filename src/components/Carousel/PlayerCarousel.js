import React, { Component } from 'react';
import { array } from 'prop-types';
import Carousel from 'react-native-snap-carousel';

import {
  CarouselContainer,
  ItemContainer,
  ImageCarousel,
  DescriptionContainer
} from './styles';
import Text from '../Text';

import styles, { em } from '../../styles';

const sliderWidth = styles.width;
const slideWidth = em(19);
const paddingHorizontal = em(0.5);
const itemWidth = (slideWidth + (paddingHorizontal * 2));

class CarouselPlayer extends Component {
  static propTypes = {
    entries: array.isRequired
  };

  state = { activeSlide: 0 };

  renderItem = ({ item }) => (
    <ItemContainer
      width={itemWidth}
      paddingHorizontal={paddingHorizontal}
      activeOpacity={0.8}
      onPress={() => {}}
    >
      <ImageCarousel
        width={slideWidth}
      />

      <DescriptionContainer>
        <Text large color={styles.colors.black}>Black Album</Text>
        <Text small color={styles.colors.gray}>This is a description</Text>
      </DescriptionContainer>
    </ItemContainer>
  );

  render() {
    const { entries } = this.props;

    return (
      <CarouselContainer>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={entries}
          inactiveSlideScale={1}
          renderItem={this.renderItem}
          onSnapToItem={index => this.setState({ activeSlide: index })}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </CarouselContainer>
    );
  }
}

export default CarouselPlayer;
