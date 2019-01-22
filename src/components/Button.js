import styled, { css } from 'styled-components/native';

import styles, { em } from '../styles';

export default styled.TouchableOpacity.attrs({
  activeOpacity: ({ activeOpacity }) => activeOpacity || 0.9
})`
  justify-content: center;
  align-items: center;

  height: ${({ height }) => height || em(2.5)};
  width: ${({ width }) => width || em(8)};
  background-color: ${({ disabled }) => disabled ? styles.colors.gray : styles.colors.blueButton};
  border-radius: ${({ borderRadius }) => borderRadius || 15};

  ${({ error }) => error && css`
    border-color: ${styles.colors.red};
  `};
`;
