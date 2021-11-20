import React, {useState, useEffect} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {ContainerRow, DefaultText} from 'styles/globalStyledComponents';
import {
  Author,
  Game,
  ImageContainer,
  ContainerDescription,
} from './styledComponents';

const Posts = ({post}) => {
  const [image, setImage] = useState();
  const {autor, jogo, imagem, descricao} = post.item;
  const [seeMore, setSeeMore] = useState(false);

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

      {descricao.length > 255 && !seeMore && (
        <ContainerDescription>
          <Text>{`${descricao.substring(0, 255)}`}</Text>
          <TouchableOpacity
            onPress={() => {
              setSeeMore(true);
            }}>
            <DefaultText fontWeight="bold"> ver mais...</DefaultText>
          </TouchableOpacity>
        </ContainerDescription>
      )}

      {descricao.length > 255 && seeMore ? (
        <ContainerDescription>
          <Text>{descricao}</Text>
          <TouchableOpacity
            onPress={() => {
              setSeeMore(false);
            }}>
            <DefaultText fontWeight="bold"> ver menos...</DefaultText>
          </TouchableOpacity>
        </ContainerDescription>
      ) : null}

      {descricao.length < 255 && (
        <ContainerDescription>
          <Text>{descricao}</Text>
        </ContainerDescription>
      )}
    </>
  );
};

export default Posts;
