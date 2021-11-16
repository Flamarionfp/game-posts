/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import styled from 'styled-components';
import {View} from 'react-native';
import {generateShadow} from 'helpers/generateShadow'

export const Container = styled(View)(props => ({
  backgroundColor: '#fff',
  borderRadius: 8,
  padding: props.padding,
  paddingHorizontal: props.paddingHorizontal,
  paddingVertical: props.paddingVertical,
  ...generateShadow(18)
}));
