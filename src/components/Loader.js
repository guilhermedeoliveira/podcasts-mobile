import React from 'react';
import { ActivityIndicator } from 'react-native';
import { string } from 'prop-types';

import styles from '../styles';

const Loader = ({ size, color }) => (
  <ActivityIndicator size={size} color={color} />
);

Loader.propTypes = {
  size: string,
  color: string
};

Loader.defaultProps = {
  size: 'large',
  color: styles.colors.tint
};

export default Loader;
