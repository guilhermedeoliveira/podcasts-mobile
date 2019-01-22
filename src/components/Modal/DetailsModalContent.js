import React from 'react';
import { TouchableOpacity } from 'react-native';
import { func } from 'prop-types';
import styled from 'styled-components/native';

import { ViewContainer, StyledMaterialIcon } from '../shared';
import Text from '../Text';

import styles, { em } from '../../styles';

const ModalContentContainer = styled.View`
  flex: 0.75;
  height: ${em(3)};
  width: ${styles.width - em(8)};
  padding-horizontal: ${em(1)};
  background-color: ${styles.colors.white};
  border-radius: ${styles.border.modal};
`;

const DetailsModalContent = ({ onPressCloseButton }) => (
  <ViewContainer centralized>
    <ModalContentContainer>
      <ViewContainer
        flex={0.1}
        paddingTop={em(0.5)}
        style={{ alignItems: 'flex-end' }}
      >
        <TouchableOpacity onPress={onPressCloseButton}>
          <StyledMaterialIcon name="close" size={em(2.3)} />
        </TouchableOpacity>
      </ViewContainer>

      <ViewContainer centralized flex={0.9}>
        <ViewContainer
          centralized
          flex={0.6}
          style={{ justifyContent: 'space-around' }}
        >
          <Text huge>Hey</Text>
          <Text large>Feature coming soon</Text>
          <StyledMaterialIcon
            name="build"
            size={em(3)}
            color={styles.colors.blueButton}
          />
        </ViewContainer>
      </ViewContainer>
    </ModalContentContainer>
  </ViewContainer>
);

DetailsModalContent.propTypes = {
  onPressCloseButton: func.isRequired
};

export default DetailsModalContent;
