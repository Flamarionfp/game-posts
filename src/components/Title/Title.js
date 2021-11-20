
import React from 'react';
import {Text} from 'react-native';
import {TitleCustom} from './styledComponents';

const Title = ({title, textAlign = 'left',fontSize = 20, fontWeight = 'bold', color = '#000'}) => {
  return (
    <TitleCustom textAlign={textAlign} fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {title}
    </TitleCustom>
  );
};

export default Title;
