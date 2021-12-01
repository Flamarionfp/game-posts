import React, {useState, useEffect} from 'react';
import {Image, View, PermissionsAndroid} from 'react-native';
import Screen from 'components/Screen';
import Title from 'components/Title/Title';
import Field from 'components/Inputs/Field';
import ErrorMsg from 'components/Error/ErrorMsg';
import Button from 'components/Button/Button';
import Dialog from 'components/Dialog/Dialog';
import {Center} from 'styles/globalStyledComponents';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {InputContainer} from 'styles/globalStyledComponents';
import api from 'services/api';
import ImagePicker from 'react-native-image-crop-picker';
import {ContainerButton, ImageUploadContainer} from './styledComponents';

const SignupPost = ({route, navigation}) => {
  const {user} = route.params;
  const [imgBase64, setImgBase64] = useState('');
  const [game, setGame] = useState('');
  const [description, setDescription] = useState('');
  const [isButtonEnable, setIsButtonEnable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);

  const requestMediaPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Game Posts precisa permissão para acessar suas fotos',
          message: 'Aceite a permissão para prosseguir com o upload',
          buttonNegative: 'Negar',
          buttonPositive: 'Aceitar',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setIsPermissionGranted(true);
      } else {
        setIsPermissionGranted(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const uploadImage = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      includeBase64: true,
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImgBase64(image.data);
    });
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
        setError(false);
        setIsModalOpen(true);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestMediaPermission();
    if (imgBase64.length < 0 || game.length === 0) {
      setIsButtonEnable(false);
    } else {
      setIsButtonEnable(true);
    }
  }, []);

  return (
    <Screen isScrollable center>
      <Center>
        <ImageUploadContainer
          onPress={() => {
            if (isPermissionGranted) {
              uploadImage();
            } else {
              return;
            }
          }}>
          {imgBase64 ? (
            <>
              <Image
                style={{width: 150, height: 150, borderRadius: 6}}
                source={{uri: `data:image/png;base64,${imgBase64}`}}
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

        {error && <ErrorMsg msg="Falha ao cadastrar!" />}

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

      {/* Modal - just for success */}
      <Dialog
        isOpen={isModalOpen}
        type="question_success"
        title="Post cadastrado com sucesso!"
        message="Deseja cadastrar outro post?"
        okText="Sim"
        cancelText="Não"
        onOk={() => {
          setImgBase64(null);
          setGame('');
          setDescription('');
          setIsModalOpen(false);
        }}
        onCancel={() => {
          navigation.navigate('Home');
        }}
      />
    </Screen>
  );
};

export default SignupPost;
