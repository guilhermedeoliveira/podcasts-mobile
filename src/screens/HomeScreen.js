import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import { shape, func } from 'prop-types';

import { ViewContainer, ScrollViewContainer } from '../components/shared';
import SearchInput from '../components/SearchInput';
import Carousel from '../components/Carousel';
import Item from '../modules/Item';
import Grid from '../components/Grid';
import Text from '../components/Text';

import styles, { em } from '../styles';

class HomeScreen extends PureComponent {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: shape({
      navigate: func.isRequired
    }).isRequired
  };

  state = { username: '' };

  _renderItem = ({ item }) => (
    <Item />
  );

  render() {
    return (
      <ViewContainer>
        {/* <SearchInput /> */}
        <Text huge light color={styles.colors.black}>Center</Text>

        <ScrollViewContainer>
          <ViewContainer>
            <Carousel name="FAVORITES" entries={[0, 1, 2, 3, 4, 5, 6, 7, 8]} />
          </ViewContainer>

          <ViewContainer>
            <ViewContainer paddingVertical={em(1)} paddingHorizontal={em(1)}>
              <Text
                extraLarge
                light
                color={styles.colors.black}
              >
                THE HOT
              </Text>
            </ViewContainer>

            <FlatList
              data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }]}
              renderItem={this._renderItem}
              // style={{ borderWidth: 1, borderColor: 'black' }}
            />
          </ViewContainer>
        </ScrollViewContainer>
      </ViewContainer>
    );
  }
}

export default HomeScreen;
