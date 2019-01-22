import styled, { css } from 'styled-components/native';
import { Text } from 'react-native-elements';

import styles from '../styles';

export default styled(Text)`
  color: ${({ color }) => color || styles.colors.tint};
  ${({ old }) => old && css`color: ${styles.colors.whiteHalf};`};

  font-size: ${styles.fontSize.regular};
  ${({ tiny }) => tiny && css`font-size: ${styles.fontSize.tiny};`};
  ${({ small }) => small && css`font-size: ${styles.fontSize.small};`};
  ${({ large }) => large && css`font-size: ${styles.fontSize.large};`};
  ${({ extraLarge }) => extraLarge && css`font-size: ${styles.fontSize.extraLarge};`};
  ${({ huge }) => huge && css`font-size: ${styles.fontSize.huge};`};
  ${({ extraHuge }) => extraHuge && css`font-size: ${styles.fontSize.extraHuge};`};

  font-weight: 400;
  ${({ light }) => light && css`font-weight: 100;`};
  ${({ medium }) => medium && css`font-weight: 500;`};
  ${({ bold }) => bold && css`font-weight: bold;`};

  ${({ centered }) => centered && css`textAlign: center;`};
`;
