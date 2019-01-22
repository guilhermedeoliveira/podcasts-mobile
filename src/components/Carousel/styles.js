import styled from 'styled-components';

import Text from '../Text';
import styles, { em } from '../../styles';

export const CarouselContainer = styled.View`
  margin-vertical: ${em(1)};
`;

export const CarouselNameContainer = styled.View`
  padding-left: ${em(1)};
  margin-bottom: ${em(1)};
`;

export const CarouselName = styled(Text)`
  color: ${styles.colors.black};
`;

export const CarouselItemContainer = styled.View`
  height: ${({ height }) => height || em(15)};
  width: ${({ width }) => width || em(1)};
  padding-left: ${({ paddingHorizontal }) => paddingHorizontal || em(1)};

  background-color: red;
`;

export const CarouselTouchableContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  flex: 1;
  width: ${({ width }) => width || em(2)};
`;
