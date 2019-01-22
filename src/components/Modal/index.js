import React from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import {
  bool, oneOfType, arrayOf, node
} from 'prop-types';

const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
`;

const StyledModal = ({ isVisible, children }) => (
  <Modal isVisible={isVisible}>
    <ModalContainer>
      {children}
    </ModalContainer>
  </Modal>
);

StyledModal.propTypes = {
  isVisible: bool.isRequired,
  children: oneOfType([
    arrayOf(node),
    node
  ]).isRequired
};

export default StyledModal;
