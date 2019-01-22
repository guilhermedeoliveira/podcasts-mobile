import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components/native';

import Text from '../Text';
import { em } from '../../styles';

const Header = ({ left, title, right }) => (
  <HeaderWrapper>
    <HeaderContainer>
      {left}
      <Text large>{title}</Text>
      {right}
    </HeaderContainer>
  </HeaderWrapper>
);

const HeaderWrapper = styled.View`
  margin-bottom: ${em(0.6)};
  padding-right: ${em(1)};
  padding-left: ${em(0.6)};
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

Header.propTypes = {
  left: node.isRequired,
  title: string.isRequired,
  right: node.isRequired
};

export default Header;
