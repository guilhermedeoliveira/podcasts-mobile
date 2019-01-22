import styled, { css } from 'styled-components/native';

import { em } from '../../styles';

export const GridItemTouchableContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  height: ${em(9)};
  width: ${em(7)};
`;

export const GridItemContainer = styled.View`
  height: ${em(9)};
  width: ${em(7)};

  ${({ centralized }) => centralized && css`
    justify-content: center;
    align-items: center;
  `};
`;
