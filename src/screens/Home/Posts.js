import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {ContainerRow, DefaultText} from 'styles/globalStyledComponents';
import {
  RoundedIconContainer,
  MusicInfoContainer,
  Author,
  Game,
} from './styledComponents';
import {Colors} from 'constants/Colors';
import {capitalize} from '@brazilian-utils/brazilian-utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container } from 'components/Button/styledComponents';

const Posts = ({post}) => {
  const [image, setImage] = useState()

  const {autor, jogo, imagem, descricao} = post.item;

  // const imageBuffer = Buffer.from(JSON.stringify(imagem.data)) // This res.data is the whole object, including the type "Buffer" and the data array
  // const imageBase64 = imageBuffer.toString('base64')
  // setImage(imageBase64)
  // console.log(imageBase64)

  return (
    <>
      <ContainerRow>
        <Author>{autor}</Author>
        <Game>- {jogo}</Game>
      </ContainerRow>
    </>
  );
};

export default Posts;
