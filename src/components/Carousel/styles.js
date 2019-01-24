import styled from 'styled-components/native';

import Text from '../Text';
import styles, { em } from '../../styles';

import vivaLaVida from '../../assets/images/viva-la-vida.jpeg';

export const CarouselContainer = styled.View`
  margin-top: ${em(1)};
  margin-bottom: ${em(3)};
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
`;

export const CarouselTouchableContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  flex: 1;
  width: ${({ width }) => width || em(2)};
`;

// CarouselPlayer
export const ItemContainer = styled.TouchableOpacity`
  width: ${({ width }) => width || em(2)};
  paddingHorizontal: ${({ paddingHorizontal }) => paddingHorizontal || em(1)};
`;

export const DescriptionContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${em(2)};
`;

export const ImageCarousel = styled.Image.attrs({
  source: ({ image }) => image || vivaLaVida
})`
  width: ${({ width }) => width || em(16)};
  height: ${({ width }) => width || em(16)};
  border-radius: 50;
`;
