import styled from 'styled-components';
import { Slider } from 'react-native';

import styles, { em } from '../../styles';

export const PlayerContainer = styled.View`
  height: ${em(4)};
  position: relative;
`;

export const ProgressContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  flex-direction: row;
  align-items: flex-end;
  padding-horizontal: ${em(1)};
`;

export const ProgressSlider = styled(Slider).attrs({
  maximumTrackTintColor: styles.colors.gray,
  minimumTrackTintColor: styles.colors.black,
  thumbTintColor: styles.colors.black
})`
  flex: 1;
  height: ${em(1)};
`;

export const ProgressCompleted = styled.View`
  flex: ${({ flex }) => flex};
  height: 3;
  background-color: ${styles.colors.blueBackgroundTabBar};
`;

export const ProgressRemaining = styled.View`
  flex: ${({ flex }) => flex};
  height: 3;
  background-color: ${styles.colors.gray};
`;

export const DurationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: ${em(2)};
  padding-horizontal: ${em(2)};
`;

export const ControlsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${em(6)};
  padding-horizontal: ${em(2)};
`;

export const goBackButtonStyle = {
  marginBottom: em(1),
  marginLeft: em(1.5)
};

export const mainButtonControlStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  height: em(5),
  width: em(5),
  borderRadius: 50,
  backgroundColor: styles.colors.black
};
