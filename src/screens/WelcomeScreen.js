import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import { ViewContainer } from '../components/shared';

class LoginScreen extends PureComponent {
  state = {};

  render() {
    return (
      <ViewContainer centralized>
        <Text>Welcome</Text>
      </ViewContainer>
    );
  }
}

export default LoginScreen;
