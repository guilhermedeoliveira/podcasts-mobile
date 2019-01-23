import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import { shape, func } from 'prop-types';

import { ViewContainer, ScrollViewContainer } from '../components/shared';
import SearchInput from '../components/SearchInput';
import Carousel from '../components/Carousel';
import Item from '../modules/home/Item';
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

  state = { search: '' };

  onChangeText = (name, text) => {
    this.setState({ [name]: text });
  };

  onPressItem = () => {
    const { navigation: { navigate } } = this.props;
    navigate('Details');
  };

  _renderItem = ({ item }) => (
    <Item onPressItem={this.onPressItem} item={item} />
  );

  render() {
    const { search } = this.state;

    return (
      <ViewContainer
        paddingTop={em(1)}
        backgroundColor={styles.colors.white}
      >
        <SearchInput
          name="search"
          placeholder="Search"
          value={search}
          onChangeText={this.onChangeText}
        />

        <ScrollViewContainer>
          <ViewContainer>
            <Carousel
              name="FAVORITES"
              entries={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
              onPressItem={this.onPressItem}
            />
          </ViewContainer>

          <ViewContainer>
            <ViewContainer
              marginVertical={em(1)}
              paddingVertical={em(1)}
              paddingHorizontal={em(1)}
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
              data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }]}
              renderItem={this._renderItem}
            />
          </ViewContainer>
        </ScrollViewContainer>
      </ViewContainer>
    );
  }
}

export default HomeScreen;
