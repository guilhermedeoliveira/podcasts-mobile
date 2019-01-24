import React, { Component } from 'react';
import { array, func } from 'prop-types';
import Carousel from 'react-native-snap-carousel';

import {
  ContainerCarousel,
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
    entries: array.isRequired,
    navigate: func
  };

  static defaultProps = {
    navigate: () => { }
  };

  state = { activeSlide: 0 };

  renderGalleryItem = ({ item }) => (
    <ContainerCarousel
      width={itemWidth}
      paddingHorizontal={paddingHorizontal}
      activeOpacity={1}
      onPress={() => this.props.navigate(item)}
    >
      <ImageCarousel
        // image={this.getContentImageByCategory(item.content.habit.category.slug)}
        width={slideWidth}
      />

      <DescriptionContainer>
        <Text large color={styles.colors.black}>Black Album</Text>
        <Text small color={styles.colors.gray}>This is a description</Text>
      </DescriptionContainer>
    </ContainerCarousel>
  );

  render() {
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.props.entries}
        inactiveSlideScale={1}
        renderItem={this.renderGalleryItem}
        onSnapToItem={(index) => this.setState({ activeSlide: index })}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    );
  }
}

export default CarouselPlayer;
