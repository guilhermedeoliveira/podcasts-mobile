import styled from 'styled-components/native';

import { em } from '../../styles';

export const BookDetailsWrapper = styled.View`
  flex: 1;
`;

export const BookDetailsContainer = styled.View`
  flex: 3;
  flex-direction: row;

  paddingHorizontal: ${em(0.6)};
`;

export const BookDetailsLeftSection = styled.View`
  flex: 2;
  justify-content: space-between;

  padding-bottom: ${em(2.2)};
`;

export const BookDetailsRightSection = styled.View`
  flex: 3;
`;

export const BookDetailsRightTopSection = styled.View`
  flex: 3;
`;

export const BookDetailsRightPricingSection = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: ${em(1.2)};
`;

export const BookDetailsRightBottomSection = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
