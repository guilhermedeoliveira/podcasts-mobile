import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  string,
  number,
  func,
  object
} from 'prop-types';
import Ionic from 'react-native-vector-icons/Ionicons';

import styles from '../../styles';

const Ionicon = ({
  name,
  size,
  color,
  onPress,
  containerStyle,
  ...rest
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={containerStyle}
  >
    <Ionic
      name={name}
      size={size}
      color={color}
      {...rest}
    />
  </TouchableOpacity>
);

Ionicon.propTypes = {
  name: string,
  size: number,
  color: string,
  onPress: func,
  containerStyle: object
};

Ionicon.defaultProps = {
  name: 'pause',
  size: 24,
  color: styles.colors.black,
  onPress: () => {},
  containerStyle: {}
};

export default Ionicon;
