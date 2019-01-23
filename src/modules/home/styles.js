import styled from 'styled-components/native';

import { em } from '../../styles';

export const TouchableItemContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  flex-direction: row;
  height: ${em(4)};
  width: 100%;
  margin-vertical: ${em(0.5)};
`;

export const ImageContainer = styled.View`
  flex: 1;
  height: 100%;
  padding-left: ${em(1)};
`;

export const ImageAlbum = styled.Image`
  height: 100%;
  width: 100%;
`;

export const DescriptionContainer = styled.View`
  flex: 4;
  justify-content: center;
  height: 100%;
  padding-left: ${em(0.5)};
`;

export const NumberContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-right: ${em(1)};
`;
