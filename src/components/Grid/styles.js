import styled from 'styled-components';

import { em } from '../../styles';

export const GridItemContainer = styled.View`
  flex: 1;
  margin-vertical: ${em(0.3)};
  margin-horizontal: ${em(0.3)};
`;

export const GridImageContainer = styled.TouchableOpacity`
  margin-vertical: ${em(0.25)};
  margin-horizontal: ${em(0.25)};
`;

export const GridImage = styled.Image`
  height: ${em(8)};
  width: ${em(8)};
`;

export const gridStyle = {
  flex: 1,
  marginVertical: em(0.5)
};

export const gridItemStyle = {
  marginVertical: em(0.3),
  marginHorizontal: em(0.3),
  height: em(15)
};
