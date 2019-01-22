import React from 'react';
import { View, Image } from 'react-native';

import Text from '../components/Text';

import styles, { em } from '../styles';
import vivaLaVida from '../assets/images/viva-la-vida.jpeg';

const Item = () => (
  <View style={{
    flexDirection: 'row',
    height: em(4),
    width: '100%',
    marginVertical: em(0.5)
  }}
  >
    <View style={{
      flex: 1,
      height: '100%',
      paddingLeft: em(1)
    }}
    >
      <Image
        source={vivaLaVida}
        style={{ width: '100%', height: '100%' }}
      />
    </View>

    <View style={{
      flex: 4,
      justifyContent: 'center',
      height: '100%',
      paddingLeft: em(0.5)
    }}
    >
      <Text large>Black Album</Text>
      <Text small color={styles.colors.gray}>This is a description</Text>
    </View>

    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      paddingRight: em(1)
    }}
    >
      <Text huge>10</Text>
    </View>
  </View>
);

export default Item;
