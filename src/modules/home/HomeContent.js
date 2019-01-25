import React from 'react';
import { FlatList } from 'react-native';
import { array, func } from 'prop-types';

import { ViewContainer } from '../../components/shared';
import MainCarousel from '../../components/Carousel/MainCarousel';
import Text from '../../components/Text';

import styles, { em } from '../../styles';

const HomeContent = ({
  podcasts,
  renderItem,
  onPressItem
}) => (
  <React.Fragment>
    <ViewContainer>
      <MainCarousel
        name="FAVORITES"
        entries={podcasts}
        onPressItem={onPressItem}
      />
    </ViewContainer>

    <ViewContainer>
      <ViewContainer
        paddingHorizontal={em(1)}
        paddingBottom={em(1)}
      >
        <Text
          extraLarge
          light
          color={styles.colors.black}
        >
          THE HOT
        </Text>
      </ViewContainer>

      <FlatList
        data={podcasts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </ViewContainer>
  </React.Fragment>
);

HomeContent.propTypes = {
  podcasts: array.isRequired,
  renderItem: func.isRequired,
  onPressItem: func.isRequired
};

export default HomeContent;
