import styled, { css } from 'styled-components/native';
import materialIcon from 'react-native-vector-icons/MaterialIcons';

import styles, { em } from '../styles';

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;

export const ScrollViewContainer = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: ({ paddingTop = 0, paddingBottom = 0 }) => ({
    paddingTop,
    paddingBottom
  })
})`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;

export const ViewContainer = styled.View`
  flex: ${({ flex }) => flex || 1};
  ${({ row }) => row && css`flex-direction: row;`};
  
  marginVertical: ${({ marginVertical }) => marginVertical || 0};
  marginHorizontal: ${({ marginHorizontal }) => marginHorizontal || 0};
  paddingVertical: ${({ paddingVertical }) => paddingVertical || 0};
  paddingHorizontal: ${({ paddingHorizontal }) => paddingHorizontal || 0};
  
  paddingTop: ${({ paddingTop }) => paddingTop || 0};
  paddingBottom: ${({ paddingBottom }) => paddingBottom || 0};

  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};

  ${({ centralized }) => centralized && css`
    justify-content: center;
    align-items: center;
  `};
`;

export const CoverImageBackground = styled.ImageBackground.attrs({
  source: ({ coverImage }) => ({ uri: coverImage }),
  resizeMode: ({ resizeMode }) => resizeMode || 'cover'
})`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const TouchableCircle = styled.TouchableOpacity.attrs({
  activeOpacity: ({ activeOpacity }) => activeOpacity || 0.9
})`
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || styles.colors.redHeart};
  width: ${({ radius }) => radius * 2 || em(6)};
  height: ${({ radius }) => radius * 2 || em(6)};
  border-radius: ${({ radius }) => radius || em(3)};
`;

export const StyledMaterialIcon = styled(materialIcon).attrs({
  name: ({ name }) => name || 'search',
  size: ({ size }) => size || em(2),
  color: ({ color }) => color || styles.colors.tint
})``;
