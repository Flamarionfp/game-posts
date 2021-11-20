import styled from 'styled-components';
import {Image} from 'react-native';
import {Center} from 'styles/globalStyledComponents';

export const ContainerTitle = styled(Center)({
  marginTop: 40,
});

export const ContainerImage = styled(Center)({
  marginTop: 25,
});

export const Logo = styled(Image)({
  width: 80,
  height: 80,
});
