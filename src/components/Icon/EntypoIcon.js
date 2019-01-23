import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  string,
  number,
  func,
  object
} from 'prop-types';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from '../../styles';

const EntypoIcon = ({
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
    <Entypo
      name={name}
      size={size}
      color={color}
      {...rest}
    />
  </TouchableOpacity>
);

EntypoIcon.propTypes = {
  name: string,
  size: number,
  color: string,
  onPress: func,
  containerStyle: object
};

EntypoIcon.defaultProps = {
  name: 'pause',
  size: 24,
  color: styles.colors.black,
  onPress: () => {},
  containerStyle: {}
};

export default EntypoIcon;
