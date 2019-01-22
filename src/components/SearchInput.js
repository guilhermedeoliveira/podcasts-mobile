import React from 'react';
import { View, TextInput } from 'react-native';
import { string, func } from 'prop-types';

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
  onChangeText
}) => (
  <View style={searchInputContainerStyle}>
    <TextInput
      autoFocus
      name={name}
      placeholder={placeholder}
      value={value}
      onChangeText={text => onChangeText(name, text)}
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
  onChangeText: func.isRequired
};

export default SearchInput;
