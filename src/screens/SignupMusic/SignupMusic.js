import React, {useState, useEffect} from 'react';
import {Dimensions, Image, View} from 'react-native';
import {Formik} from 'formik';
import Screen from 'components/Screen';
import Header from 'components/Header/Header';
import Title from 'components/Title/Title';
import Field from 'components/Inputs/Field';
import Link from 'components/Link/Link';
import Success from 'components/Success/Success';
import Button from 'components/Button/Button';
import Dialog from 'components/Dialog/Dialog';
import {Center} from 'styles/globalStyledComponents';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {InputContainer} from 'styles/globalStyledComponents';
import api from 'services/api';
const ImagePicker = require('react-native-image-picker');
import {
  ContainerButton,
  ImageUploadContainer,
  TitleContainer,
} from './styledComponents';

const SignupMusic = ({route, navigation}) => {
  const {user} = route.params;
  const [photo, setPhoto] = useState(null);
  const [imgBase64, setImgBase64] = useState('');
  const [game, setGame] = useState('');
  const [description, setDescription] = useState('');
  const [isButtonEnable, setIsButtonEnable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const uploadImage = data => {
    if (data.didCancel) {
      return;
    }
    if (data.error) {
      return;
    }

    if (!data.assets[0].uri) {
      return;
    }

    setPhoto(data.assets[0]);
    setImgBase64(data.assets[0].base64);
  };

  const configPhoto = {
    mediaType: 'photo',
    includeBase64: true,
    maxHeight: 300,
    maxWidth: 300,
  };

  const signupPost = async () => {
    try {
      setIsLoading(true);
      const response = await api.post('signuppost', {
        imagem: imgBase64,
        jogo: game,
        descricao: description || null,
        autor: user.nome,
      });

      console.log(response);
      if (response.data.success) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000)
      } else {
        setSuccess(false);
        setIsModalOpen(true);
      }
    } catch (error) {
      setSuccess(false);
      setIsModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (imgBase64.length === 0 || game.length === 0) {
      setIsButtonEnable(false);
    } else {
      setIsButtonEnable(true);
    }
  }, [imgBase64, game]);

  return (
    <Screen isScrollable center>
      <Center>
        <ImageUploadContainer
          onPress={() =>
            ImagePicker.launchImageLibrary(configPhoto, uploadImage)
          }>
          {photo ? (
            <>
              <Image
                style={{width: 150, height: 150, borderRadius: 6}}
                source={{uri: photo.uri}}
              />
              <View style={{marginHorizontal: 5, marginTop: 10}}>
                <Title fontSize={18} title="Escolher outra imagem" />
              </View>
            </>
          ) : (
            <>
              <Icon name="image" size={55} />
              <Title fontSize={18} title="Enviar Imagem" />
            </>
          )}
        </ImageUploadContainer>
      </Center>
      <View>
        <InputContainer>
          <Field
            value={game}
            maxLength={45}
            onFunction={value => setGame(value)}
            label="Jogo*"
            placeholder="Ex: God of War II"
            iconName="google-controller"
          />
        </InputContainer>
        <InputContainer>
          <Field
            value={description}
            multiline
            numberOfLines={15}
            maxLength={1000}
            onFunction={value => setDescription(value)}
            label="Descrição"
            placeholder="Digite uma descrição para sua imagem..."
            iconName="account-music"
          />
        </InputContainer>

        {success && <Success msg="Post cadastrado com sucesso!" />}
         

        <ContainerButton>
          <Button
            isLoading={isLoading}
            disabled={!isButtonEnable}
            title="Enviar"
            onFunction={() => {
              signupPost();
            }}
          />
        </ContainerButton>
      </View>

      {/* Modal - just for errors */}
      <Dialog
        isOpen={isModalOpen}
        type="error"
        title="Falha ao enviar postagem!"
        message="Ocorreu um erro ao cadastrar seu post."
        okText="Tentar novamente"
        onOk={() => {
          setIsModalOpen(false);
        }}
      />
    </Screen>
  );
};

export default SignupMusic;
