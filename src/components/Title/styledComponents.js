/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import styled from 'styled-components';
import {Text} from 'react-native';

export const TitleCustom = styled(Text)(props => ({
  fontWeight: props.fontWeight,
  fontSize: props.fontSize,
  color: props.color,
  textAlign: props.textAlign,
}));
