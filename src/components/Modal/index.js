import React from 'react';
import { Portal } from 'react-portal';
import StyleSheet from '../../apis/StyleSheet';
import View from '../View';

const Modal = ({ visible, children }) => {
  return visible ? (
    <Portal>
      <View style={styles.modal}>{children}</View>
    </Portal>
  ) : null;
};

const styles = StyleSheet.create({
  modal: {
  }
});

export default Modal;
