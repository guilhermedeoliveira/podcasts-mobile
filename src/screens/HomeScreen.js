import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import { shape, func } from 'prop-types';

import { ViewContainer, ScrollViewContainer } from '../components/shared';
import SearchInput from '../components/SearchInput';
import MainCarousel from '../components/Carousel/MainCarousel';
import Item from '../modules/home/Item';
import Text from '../components/Text';

import podcasts from '../api/podcasts';
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
    navigate('Details', { podcasts });
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
            <MainCarousel
              name="FAVORITES"
              entries={podcasts}
              onPressItem={this.onPressItem}
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
              renderItem={this._renderItem}
            />
          </ViewContainer>
        </ScrollViewContainer>
      </ViewContainer>
    );
  }
}

export default HomeScreen;
