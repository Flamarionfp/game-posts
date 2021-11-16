/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

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
