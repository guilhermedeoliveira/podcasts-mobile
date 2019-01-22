import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import vivaLaVida from '../../assets/images/viva-la-vida.jpeg';
import styles from '../../styles';

export default class MyCarousel extends PureComponent {
  _renderItem = ({ item, index }) => (
    <View style={{ height: '100%', width: '100%' }}>
      <ParallaxImage
        source={vivaLaVida}
        // containerStyle={{ height: '100%', width: '100%' }}
        // style={{ height: '100%', width: '100%' }}
        parallaxFactor={0.4}
      />
      <Text>
        { item.title }
      </Text>
    </View>
  );

  render() {
    return (
      <Carousel
        hasParallaxImages
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={this._renderItem}
        sliderWidth={styles.width}
        itemWidth={styles.width}
        windowSize={1}
        ref={(c) => { this._carousel = c; }}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        activeSlideAlignment="start"
      />
    );
  }
}
