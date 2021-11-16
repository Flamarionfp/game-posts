import React from 'react';
import {View, Text} from 'react-native';
import {
  Label,
  FileContainer,
  FilePlaceholder,
  IconInput,
} from './styledComponents';

const Inputs = ({
  label = '',
  placeholder = '',
  icon = 'folder-music',
  onFunction = () => {},
}) => {
  return (
    <>
      <Label>{label}</Label>
      <FileContainer onPress={onFunction} activeOpacity={0.6}>
        <FilePlaceholder>{placeholder}</FilePlaceholder>
      </FileContainer>
      <IconInput name={icon} size={25} color="#000" />
    </>
  );
};

export default Inputs;
