import React, {useState, useEffect} from 'react';
import {Image, Text, View, ScrollView} from 'react-native';
import {ContainerRow, DefaultText} from 'styles/globalStyledComponents';
import {
  RoundedIconContainer,
  MusicInfoContainer,
  Author,
  Game,
  ImageContainer,
  ContainerDescription,
} from './styledComponents';
import {Colors} from 'constants/Colors';
import {capitalize} from '@brazilian-utils/brazilian-utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container} from 'components/Button/styledComponents';
import Screen from 'components/Screen';

const Posts = ({post}) => {
  const [image, setImage] = useState();
  const {autor, jogo, imagem, descricao} = post.item;

  useEffect(() => {
    setImage(imagem);
  });

  return (
    <>
      <ContainerRow style={{marginHorizontal: 5}}>
        <Author>{autor}</Author>
        <Game> - {jogo}</Game>
      </ContainerRow>
      <ImageContainer>
        <Image
          style={{
            width: '100%',
            height: 250,
          }}
          source={{
            uri: `data:image/jpeg;base64,${image}`,
          }}
        />
      </ImageContainer>
      <ContainerDescription>
        <Text>{descricao}</Text>
      </ContainerDescription>
    </>
  );
};

export default Posts;
