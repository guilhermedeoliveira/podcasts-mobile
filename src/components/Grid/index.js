import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import {
  arrayOf,
  shape,
  string,
  number,
  func
} from 'prop-types';

import {
  GridItemContainer,
  GridImageContainer,
  GridImage,
  gridStyle
} from './styles';

import { formatGridData } from '../../helpers/array';

class TitleGridList extends PureComponent {
  static propTypes = {
    data: arrayOf(shape({
      id: string.isRequired,
      name: string.isRequired,
      thumbnail: string,
      authors: string
    })),
    grid: number.isRequired,
    onPressItem: func.isRequired
  };

  static defaultProps = {
    data: []
  };

  _renderItem = ({ item }) => {
    const { onPressItem } = this.props;

    if (item.empty) {
      return <GridItemContainer />;
    }

    return (
      <GridImageContainer onPress={onPressItem}>
        <GridImage source={item.thumbnail} />
      </GridImageContainer>
    );
  };

  render() {
    const { data, grid } = this.props;

    return (
      <FlatList
        data={formatGridData(data, grid)}
        keyExtractor={item => item.id}
        numColumns={grid}
        renderItem={this._renderItem}
        style={gridStyle}
      />
    );
  }
}

export default TitleGridList;
