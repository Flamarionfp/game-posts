import React from 'react';
import {TouchableOpacity} from 'react-native';
import {LinkText} from './styledComponents';

const Link = ({onFunction = () => {}, text}) => {
  return (
    <>
      <TouchableOpacity onPress={() => onFunction()}>
        <LinkText>{text}</LinkText>
      </TouchableOpacity>
    </>
  );
};

export default Link;
