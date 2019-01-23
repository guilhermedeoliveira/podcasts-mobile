import styled from 'styled-components';

import styles, { em } from '../../styles';

export const ControlsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${em(6)};
  padding-horizontal: ${em(2)};
`;

export const mainButtonControl = {
  justifyContent: 'center',
  alignItems: 'center',
  height: em(5),
  width: em(5),
  borderRadius: 50,
  backgroundColor: styles.colors.black
};
