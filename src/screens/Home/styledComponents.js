import styled from 'styled-components';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'constants/Colors';
import {generateShadow} from 'helpers/generateShadow';

export const TitleContainer = styled(View)({
  marginVertical: 30,
});

export const Author = styled(Text)({
  fontWeight: 'bold',
  fontSize: 18,
  color: '#000',
});

export const Game = styled(Text)({
  fontSize: 18,
  color: '#6666',
});

export const ImageContainer = styled(View)({
  marginVertical: 10,
});

export const ContainerDescription = styled(View)({
  marginHorizontal: 5,
});

export const PostsContainer = styled(View)({
  marginVertical: 15,
});

export const RoundedIconContainer = styled(TouchableOpacity)(props => ({
  backgroundColor: props.backgroundColor,
  width: props.size || 70,
  height: props.size || 70,
  borderRadius: props.size || 70,
  alignItems: 'center',
  justifyContent: 'center',
}));

export const AddMusicContainer = styled(View)({
  alignItems: 'flex-end',
  paddingRight: 30,
  position: 'absolute',
  bottom: 0,
  width: '100%',
  marginBottom: 25,
});
