import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import {
  bool,
  arrayOf,
  object,
  number,
  func
} from 'prop-types';

import { ViewContainer } from '../shared';
import Loader from '../Loader';
import Text from '../Text';
import Book from '../Book';
import { GridItemContainer } from '../Book/Book.styles';

import { listScreenPodcaststyle } from '../../styles/general';
import { formatGridData } from '../../helpers/array';

class Grid extends PureComponent {
  static propTypes = {
    isLoading: bool.isRequired,
    isFetchingWithButton: bool.isRequired,
    data: arrayOf(object).isRequired,
    onRefresh: func.isRequired,
    onEndReached: func.isRequired,
    grid: number.isRequired,
    onPressGridItem: func
  };

  static defaultProps = {
    onPressGridItem: () => {}
  };

  _renderItem = ({ item }) => {
    const { onPressGridItem } = this.props;

    if (item.empty) {
      return <GridItemContainer />;
    }

    return (
      <Book
        item={item}
        onPressItem={() => onPressGridItem('Details', item)}
        containerStyle={listScreenPodcaststyle}
      />
    );
  };

  render() {
    const {
      isLoading,
      isFetchingWithButton,
      data,
      onRefresh,
      onEndReached,
      grid
    } = this.props;

    if (isFetchingWithButton && !data.length) {
      return (
        <ViewContainer centralized>
          <Loader />
        </ViewContainer>
      );
    }

    if (data.length < 1) {
      return (
        <ViewContainer centralized>
          <Text large>Search for Podcasts!</Text>
        </ViewContainer>
      );
    }

    return (
      <FlatList
        data={formatGridData(data, grid)}
        keyExtractor={item => item.id}
        onRefresh={onRefresh}
        refreshing={isLoading}
        numColumns={grid}
        renderItem={this._renderItem}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.01}
      />
    );
  }
}

export default Grid;
