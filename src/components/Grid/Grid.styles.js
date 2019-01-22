import styled from 'styled-components/native';
import styles, { em } from '../../styles';

export const GridItemContainer = styled.View`
  marginVertical: ${em(1)};
  marginHorizontal: ${em(0.6)};
  paddingHorizontal: ${em(0.3)};

  height: ${em(9)};
  width: ${em(7)};

  border-color: ${styles.colors.red};
  border-width: ${styles.border.default};
`;
