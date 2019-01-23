import React from 'react';
import { func } from 'prop-types';

import {
  TouchableItemContainer,
  ImageContainer,
  ImageAlbum,
  DescriptionContainer,
  NumberContainer
} from './styles';
import Text from '../../components/Text';

import styles from '../../styles';
import vivaLaVida from '../../assets/images/viva-la-vida.jpeg';

const Item = ({ onPressItem }) => (
  <TouchableItemContainer onPress={onPressItem}>
    <ImageContainer>
      <ImageAlbum source={vivaLaVida} />
    </ImageContainer>

    <DescriptionContainer>
      <Text large>Black Album</Text>
      <Text small color={styles.colors.gray}>This is a description</Text>
    </DescriptionContainer>

    <NumberContainer>
      <Text huge>10</Text>
    </NumberContainer>
  </TouchableItemContainer>
);

Item.propTypes = {
  onPressItem: func.isRequired
};

export default Item;
