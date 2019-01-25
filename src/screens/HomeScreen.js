import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { shape, func } from 'prop-types';

import { ViewContainer, ScrollViewContainer } from '../components/shared';
import Ionicon from '../components/Icon/Ionicon';
import SearchInput from '../components/SearchInput';
import HomeContent from '../modules/home/HomeContent';
import Item from '../modules/home/Item';
import Grid from '../components/Grid';

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

  state = {
    isSearching: false,
    search: ''
  };

  onChangeText = (name, text) => {
    this.setState({ [name]: text });
  };

  onPressItem = () => {
    const { navigation: { navigate } } = this.props;
    navigate('Details', { podcasts });
  };

  onFocusSearchInput = () => {
    this.setState({ isSearching: true });
  };

  onEndSearching = () => {
    this.setState({ isSearching: false });
  };

  renderItem = ({ item }) => (
    <Item onPressItem={this.onPressItem} item={item} />
  );

  renderBody = () => {
    const { isSearching } = this.state;

    if (!isSearching) {
      return (
        <HomeContent
          podcasts={podcasts}
          renderItem={this.renderItem}
          onPressItem={this.onPressItem}
        />
      );
    }

    return (
      <Grid
        data={podcasts}
        grid={3}
        onPressItem={this.onPressItem}
      />
    );
  }

  render() {
    const { isSearching, search } = this.state;

    return (
      <ViewContainer
        paddingTop={em(1)}
        backgroundColor={styles.colors.white}
      >
        <SearchInput
          name="search"
          placeholder="Search"
          value={search}
          onFocus={this.onFocusSearchInput}
          onEndSearching={this.onEndSearching}
          onChangeText={this.onChangeText}
        />

        {isSearching && (
          <View style={{ alignItems: 'center' }}>
            <Ionicon
              name="ios-close"
              color={styles.colors.gray}
              size={em(3.5)}
              onPress={this.onEndSearching}
            />
          </View>
        )}

        <ScrollViewContainer>
          {this.renderBody()}
        </ScrollViewContainer>
      </ViewContainer>
    );
  }
}

export default HomeScreen;
