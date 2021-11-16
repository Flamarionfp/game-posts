import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {
  Center,
  ContainerRow,
  DefaultText,
  InputContainer,
  ButtonContainer,
} from 'styles/globalStyledComponents';
import {Formik} from 'formik';
import Screen from 'components/Screen';
import Header from 'components/Header/Header';
import Field from 'components/Inputs/Field';
import SecureField from 'components/Inputs/SecureField';
import Link from 'components/Link/Link';
import Button from 'components/Button/Button';
import {validateEmail} from 'helpers/validate';
import ErrorMsg from 'components/Error/ErrorMsg';
import api from 'services/api';
import Dialog from 'components/Dialog/Dialog';

const Signup = ({navigation}) => {
  const [data, setData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [errors, setErrors] = useState({});
  const [hasError, setHasError] = useState({status: false, msg: ''});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const signupUser = async () => {
    if (!data.nome) {
      setErrors({nome: 'O campo nome é obrigatório'});
      return;
    }

    if (validateEmail(data.email).hasError) {
      setErrors({email: 'Email inválido'});
      return;
    }

    if (!data.senha) {
      setErrors({senha: 'O campo senha é obrigatório'});
      return;
    }

    if (confirmarSenha.length === 0) {
      console.log('entrou aqui');
      setErrors({confirmarSenha: 'O campo confirmar senha é obrigatório'});
      return;
    }

    if (data.senha !== confirmarSenha) {
      setErrors({naoCoincidem: 'As senhas não coincidem', confirmarSenha: ''});
      return;
    }

    const response = await api.post('signup', data);
    console.log(response);
    if (response.data.success) {
      setErrors({});
      setHasError({status: false, msg: ''});
      setIsModalOpen(true);
    } else {
      setErrors({});
      setHasError({status: true, msg: 'Erro ao cadastrar'});
    }
  };

  return (
    <>
      <Screen isScrollable>
        <View style={{marginTop: 50}}>
          <Header />
          <InputContainer>
            <Field
              status={errors.nome ? 'danger' : 'normal'}
              value={data.nome}
              onFunction={value => setData({...data, nome: value})}
              label="Nome"
              autoComplete="name"
              placeholder="Pedro"
              keyboardType="default"
              textContentType="name"
              maxLength={50}
              iconName="account"
              // autoFocus={true}
            />
          </InputContainer>

          {errors.nome && <ErrorMsg isValidation msg={errors.nome} />}

          <InputContainer>
            <Field
              status={errors.email ? 'danger' : 'normal'}
              value={data.email}
              onFunction={value => setData({...data, email: value})}
              label="E-mail"
              autoComplete="email"
              placeholder="pedro@gmail.com"
              keyboardType="email-address"
              textContentType="emailAddress"
              maxLength={50}
              iconName="email"
            />
          </InputContainer>

          {errors.email && <ErrorMsg isValidation msg={errors.email} />}

          <InputContainer>
            <SecureField
              status={errors.senha ? 'danger' : 'normal'}
              value={data.senha}
              onFunction={value => setData({...data, senha: value})}
            />
          </InputContainer>

          {errors.senha && <ErrorMsg isValidation msg={errors.senha} />}

          <InputContainer>
            <SecureField
              status={
                errors.confirmarSenha || errors.naoCoincidem
                  ? 'danger'
                  : 'normal'
              }
              value={confirmarSenha}
              onFunction={value => setConfirmarSenha(value)}
              label="Confirmar Senha"
            />
          </InputContainer>

          {errors.confirmarSenha ? (
            <ErrorMsg isValidation msg={errors.confirmarSenha} />
          ) : errors.confirmarSenha === '' && errors.naoCoincidem ? (
            <ErrorMsg isValidation msg={errors.naoCoincidem} />
          ) : null}

          {hasError.status && <ErrorMsg msg={hasError.msg} />}

          <ButtonContainer>
            <Button
              title="CADASTRAR"
              onFunction={() => {
                signupUser();
              }}
            />
          </ButtonContainer>

          <Center>
            <ContainerRow>
              <DefaultText>Já possui sua conta? </DefaultText>
              <Link
                onFunction={() => {
                  navigation.goBack();
                }}
                text="Clique aqui"
              />
            </ContainerRow>
          </Center>
        </View>

        <Dialog
          isOpen={isModalOpen}
          type="success"
          title="Cadastro bem sucedido!"
          okText="Ir para Login"
          onOk={() => {
            setIsModalOpen(false);
            navigation.navigate('Login');
          }}
        />
      </Screen>
    </>
  );
};

export default Signup;
