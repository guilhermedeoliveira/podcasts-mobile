import React, { PureComponent } from 'react';
import { shape, func } from 'prop-types';

import { ViewContainer } from '../components/shared';
import Loader from '../components/Loader';

import styles from '../styles';
import { getUserToken } from '../helpers/login';

class AuthLoadingScreen extends PureComponent {
  static propTypes = {
    navigation: shape({
      navigate: func.isRequired
    }).isRequired
  };

  // In the official docs, it uses constructor
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  /**
   * This will switch to the App screen or Auth screen
   * and this loading screen will be unmounted and thrown away.
  */
  _bootstrapAsync = async () => {
    const { navigation: { navigate } } = this.props;

    const userToken = await getUserToken();
    navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <ViewContainer centralized>
        <Loader color={styles.colors.black} />
      </ViewContainer>
    );
  }
}

export default AuthLoadingScreen;
