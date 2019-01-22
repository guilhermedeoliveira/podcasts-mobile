/* eslint-disable react/destructuring-assignment */

import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  shape,
  func,
  bool,
  arrayOf,
  object
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider } from 'react-native-elements';

import { ViewContainer, StyledMaterialIcon } from '../components/shared';
import SearchInput from '../components/SearchInput';
import Header from '../components/Header';
import Grid from '../components/Grid';

import { fetchPodcasts, paginatePodcasts } from '../store/books';

import styles, { em } from '../styles';
import { listScreendividerStyle } from '../styles/general';

class ListScreen extends PureComponent {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: shape({
      navigate: func.isRequired
    }).isRequired,
    fetchPodcasts: func.isRequired,
    paginatePodcasts: func.isRequired,
    loading: bool.isRequired,
    Podcasts: arrayOf(object).isRequired
  };

  state = {
    isShowingSearchInput: false,
    isFetchingWithButton: false,
    startIndex: 10
  };

  onNavigate = (route, params) => {
    const { navigation: { navigate } } = this.props;
    return navigate(route, params);
  };

  onPressSearchButton = async () => {
    await this._fetchPodcasts();

    return this.setState({
      isShowingSearchInput: false,
      isFetchingWithButton: true
    });
  };

  onChangeInput = (value, name) => this.setState({ [name]: value });

  _showSearchInput = () => this.setState({ search: '', isShowingSearchInput: true });

  _fetchPodcasts = () => {
    this.props.fetchPodcasts(this.state.search);
    this.setState({ startIndex: 10 });
  };

  _paginatePodcasts = () => {
    const { paginatePodcasts } = this.props;
    const { search, startIndex, isShowingSearchInput } = this.state;

    if (startIndex < 40 && !isShowingSearchInput) {
      paginatePodcasts(search, startIndex);
      this.setState({ startIndex: startIndex + 10 });
    }
  };

  render() {
    const { loading, Podcasts } = this.props;
    const { isShowingSearchInput, isFetchingWithButton, search } = this.state;

    return (
      <ViewContainer
        paddingTop={isShowingSearchInput ? 0 : em(1)}
        paddingHorizontal={em(0.3)}
        backgroundColor={styles.colors.mainColor}
      >
        {isShowingSearchInput
          ? (
            <SearchInput
              name="search"
              placeholder="Search book"
              value={search}
              onChangeText={this.onChangeInput}
              onPressSearchButton={this.onPressSearchButton}
            />
          )
          : (
            <Header
              left={<StyledMaterialIcon name="menu" />}
              title="Design Podcasts"
              right={(
                <TouchableOpacity onPress={this._showSearchInput}>
                  <StyledMaterialIcon name="search" />
                </TouchableOpacity>
              )}
            />
          )}

        <Divider style={listScreendividerStyle} />

        <Grid
          isLoading={loading}
          isFetchingWithButton={isFetchingWithButton}
          data={Podcasts}
          onRefresh={this._fetchPodcasts}
          onEndReached={this._paginatePodcasts}
          grid={3}
          onPressGridItem={this.onNavigate}
        />
      </ViewContainer>
    );
  }
}

export default connect(
  store => ({
    loading: store.Podcasts.loading,
    Podcasts: store.Podcasts.data,
    error: store.Podcasts.error
  }),
  dispatch => bindActionCreators({ fetchPodcasts, paginatePodcasts }, dispatch)
)(ListScreen);
