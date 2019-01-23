import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  string,
  number,
  func,
  object
} from 'prop-types';
import Ant from 'react-native-vector-icons/AntDesign';

import styles from '../../styles';

const AntIcon = ({
  name,
  size,
  color,
  onPress,
  containerStyle,
  ...rest
}) => (
  <TouchableOpacity activeOpacity={0.8} style={containerStyle}>
    <Ant
      name={name}
      size={size}
      color={color}
      {...rest}
    />
  </TouchableOpacity>
);

AntIcon.propTypes = {
  name: string,
  size: number,
  color: string,
  onPress: func,
  containerStyle: object
};

AntIcon.defaultProps = {
  name: 'pause',
  size: 24,
  color: styles.colors.black,
  onPress: () => {},
  containerStyle: {}
};

export default AntIcon;
