import React, {useState, useEffect} from 'react';
import {Image, Text} from 'react-native';
import {ContainerRow} from 'styles/globalStyledComponents';
import {
  Author,
  Game,
  ImageContainer,
  ContainerDescription,
} from './styledComponents';

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
