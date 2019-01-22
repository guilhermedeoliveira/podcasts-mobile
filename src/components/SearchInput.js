import React from 'react';
import { View, TextInput } from 'react-native';
import { string, func } from 'prop-types';

import Button from './Button';
import Text from './Text';

import styles from '../styles';
import { searchInputContainerStyle } from '../styles/general';

const SearchInput = ({
  name,
  placeholder,
  value,
  onChangeText,
  onPressSearchButton
}) => (
  <View style={searchInputContainerStyle}>
    <TextInput
      autoFocus
      name={name}
      placeholder={placeholder}
      value={value}
      onChangeText={text => onChangeText(text, name)}
      underlineColorAndroid={styles.colors.tint}
      style={{ flex: 0.7 }}
    />

    <Button
      disabled={!value}
      onPress={value ? onPressSearchButton : () => {}}
      style={{ flex: 0.3 }}
    >
      <Text>Search</Text>
    </Button>
  </View>
);

SearchInput.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
  value: string.isRequired,
  onChangeText: func.isRequired,
  onPressSearchButton: func.isRequired
};

export default SearchInput;
