import React from 'react';
import Modal from 'react-native-modal';
import Button from 'components/Button/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ModalContainer,
  TitleContainer,
  Title,
  Message,
  ContainerSingleButton,
  DialogButtonsContainer,
} from './styledComponents';

const Dialog = ({
  type = 'default',
  title,
  isOpen = false,
  message,
  children,
  onOk = () => {},
  okText = 'Ok',
  onCancel = () => {},
  cancelText = 'Cancelar',
  closeOnBackdropPress = true,
}) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return {
          icon: 'check-circle',
          color: '#4aa162',
        };
      case 'warning':
        return {
          icon: 'alert',
          color: '#f39e00',
        };
      case 'error':
        return {
          icon: 'alert-circle',
          color: '#f00',
        };
      case 'question':
        return {
          icon: 'help',
          color: '#2D2E96',
        };
      case 'question_success':
        return {
          icon: 'check-circle',
          color: '#4aa162',
        };
      default:
        return '';
    }
  };

  return (
    <Modal
      isVisible={isOpen}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={closeOnBackdropPress ? onCancel : () => {}}>
      <ModalContainer>
        {type !== 'default' ? (
          <Icon
            name={getIcon().icon}
            size={70}
            color={getIcon().color}
            iconSet={
              type === 'question' ? 'MaterialIcons' : 'MaterialCommunityIcons'
            }
          />
        ) : null}
        <TitleContainer>
          <Title customMargin={type === 'default' ? 0 : 10}>{title}</Title>
        </TitleContainer>
        {typeof message === 'string' ? <Message>{message}</Message> : children}
        {type === 'question' || type === 'question_success' ? (
          <DialogButtonsContainer>
            <Button onFunction={onOk} title={okText || 'Sim'} />
            <Button onFunction={onCancel} title={cancelText || 'Não'} />
          </DialogButtonsContainer>
        ) : (
          <ContainerSingleButton>
            <Button
              size={17}
              bg="#000"
              onFunction={onOk}
              title={okText || 'Ok'}
            />
          </ContainerSingleButton>
        )}
      </ModalContainer>
    </Modal>
  );
};

export default Dialog;
