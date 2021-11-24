import styled from 'styled-components';
import {Text} from 'react-native';
import {Colors} from 'constants/Colors';
import { widthToDp } from 'helpers/convertDimension';

export const LinkText = styled(Text)({
  color: Colors.primaryColor,
  fontWeight: 'bold',
  fontSize: widthToDp(4),
});
