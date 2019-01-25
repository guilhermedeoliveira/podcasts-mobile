import React, { PureComponent } from 'react';
import { array, func } from 'prop-types';
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

class CarouselPlayer extends PureComponent {
  static propTypes = {
    entries: array.isRequired,
    setActiveItem: func.isRequired
  };

  renderItem = ({ item }) => (
    <ItemContainer
      width={itemWidth}
      paddingHorizontal={paddingHorizontal}
      activeOpacity={0.8}
      onPress={() => {}}
    >
      <ImageCarousel
        source={item.thumbnail}
        width={slideWidth}
      />

      <DescriptionContainer>
        <Text large color={styles.colors.black}>{item.band}</Text>
        <Text small color={styles.colors.gray}>{item.music}</Text>
      </DescriptionContainer>
    </ItemContainer>
  );

  render() {
    const { entries, setActiveItem } = this.props;

    return (
      <CarouselContainer>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={entries}
          inactiveSlideScale={1}
          renderItem={this.renderItem}
          onSnapToItem={index => setActiveItem(index)}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </CarouselContainer>
    );
  }
}

export default CarouselPlayer;
