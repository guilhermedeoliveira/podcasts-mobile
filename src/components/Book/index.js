import React from 'react';
import { Image } from 'react-native';
import { func, object } from 'prop-types';

import { GridItemContainer, GridItemTouchableContainer } from './Book.styles';
import Text from '../Text';

import { borderedStyle } from '../../styles/general';

const Book = ({ item, onPressItem, containerStyle }) => {
  if (!item.volumeInfo.imageLinks) {
    return (
      <GridItemContainer centralized style={[containerStyle, borderedStyle]}>
        <Text>No image</Text>
      </GridItemContainer>
    );
  }

  return (
    <GridItemTouchableContainer onPress={onPressItem} style={containerStyle}>
      <Image source={{ uri: item.volumeInfo.imageLinks.smallThumbnail }} style={{ flex: 1 }} />
    </GridItemTouchableContainer>
  );
};

Book.propTypes = {
  item: object.isRequired,
  containerStyle: object,
  onPressItem: func
};

Book.defaultProps = {
  onPressItem: () => {},
  containerStyle: {}
};

export default Book;
