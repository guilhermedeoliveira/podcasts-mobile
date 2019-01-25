import React from 'react';
import { View, TextInput } from 'react-native';
import { string, bool, func } from 'prop-types';

import {
  searchInputContainerStyle,
  searchInputIconStyle,
  seachInputStyle
} from '../styles/general';
import Ionicon from './Icon/Ionicon';
import styles, { em } from '../styles';

const SearchInput = ({
  name,
  placeholder,
  value,
  autoFocus,
  onFocus,
  onBlur,
  onChangeText
}) => (
  <View style={searchInputContainerStyle}>
    <TextInput
      autoFocus={autoFocus}
      name={name}
      placeholder={placeholder}
      value={value}
      onChangeText={text => onChangeText(name, text)}
      onFocus={onFocus}
      onBlur={onBlur}
      underlineColorAndroid={styles.colors.transparent}
      style={seachInputStyle}
    />

    <Ionicon
      name="ios-search"
      color={styles.colors.gray}
      size={em(1.5)}
      containerStyle={searchInputIconStyle}
    />
  </View>
);

SearchInput.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
  value: string.isRequired,
  autoFocus: bool,
  onFocus: func,
  onBlur: func,
  onChangeText: func.isRequired
};

SearchInput.defaultProps = {
  autoFocus: false,
  onFocus: () => {},
  onBlur: () => {}
};

export default SearchInput;
