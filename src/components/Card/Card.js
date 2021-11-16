/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react';
import {Container} from './styledComponents';

const Card = ({children, padding = 0, paddingVertical = 0, paddingHorizontal = 0}) => {
  return (
    <Container
      padding={padding}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}>
      {children}
    </Container>
  );
};

export default Card;
