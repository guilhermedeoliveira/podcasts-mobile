import React from 'react';
import {
  shape,
  string,
  number,
  func
} from 'prop-types';

import {
  TouchableItemContainer,
  ImageContainer,
  ImageAlbum,
  DescriptionContainer,
  NumberContainer
} from './styles';
import Text from '../../components/Text';

import styles from '../../styles';

const Item = ({
  item: {
    thumbnail,
    band,
    music,
    position
  },
  onPressItem
}) => (
  <TouchableItemContainer onPress={onPressItem}>
    <ImageContainer>
      <ImageAlbum source={thumbnail} />
    </ImageContainer>

    <DescriptionContainer>
      <Text large>{band}</Text>
      <Text small color={styles.colors.gray}>{music}</Text>
    </DescriptionContainer>

    <NumberContainer>
      <Text huge>{position}</Text>
    </NumberContainer>
  </TouchableItemContainer>
);

Item.propTypes = {
  item: shape({
    thumbnail: number.isRequired,
    band: string.isRequired,
    music: string.isRequired,
    position: number.isRequired
  }).isRequired,
  onPressItem: func.isRequired
};

export default Item;
