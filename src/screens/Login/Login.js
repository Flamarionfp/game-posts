import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import {
  Center,
  ContainerRow,
  DefaultText,
  InputContainer,
  ButtonContainer,
} from 'styles/globalStyledComponents';
import Screen from 'components/Screen';
import Header from 'components/Header/Header';
import Field from 'components/Inputs/Field';
import SecureField from 'components/Inputs/SecureField';
import Link from 'components/Link/Link';
import Button from 'components/Button/Button';
import api from 'services/api';
import {validateEmail} from 'helpers/validate';
import ErrorMsg from 'components/Error/ErrorMsg';

const Login = ({navigation}) => {
  const [data, setData] = useState({
    email: '',
    senha: '',
  });
  const [hasError, setHasError] = useState({
    status: false,
    msg: '',
  });
  const [emailError, setEmailError] = useState({
    hasError: false,
    msg: '',
  });
  const [passwordError, setPasswordError] = useState({
    hasError: false,
    msg: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    if (validateEmail(data.email).hasError) {
      setEmailError({hasError: true, msg: validateEmail(data.email).msg});
      return;
    }

    if (data.senha.length === 0) {
      setPasswordError({hasError: true, msg: 'Senha inválida'});
      return;
    }

    try {
      setIsLoading(true);
      const response = await api.post('login', data);
      if (response.data.success) {
        console.log(response);
        setEmailError({hasError: false, msg: ''});
        setPasswordError({hasError: false, msg: ''});
        setHasError({status: false, msg: ''});
        navigation.navigate('Home', {user: response.data.data});
      } else {
        setEmailError({hasError: false, msg: ''});
        setPasswordError({hasError: false, msg: ''});
        setHasError({status: true, msg: response.data.msg});
      }
    } catch (error) {
      setHasError({status: true, msg: 'Ocorreu um erro ao logar'});
    } finally {
      setIsLoading(false);
    }
  };

  const maxWidth = 411.42857142857144;

  return (
    <>
      <Screen position="center">
        <Header />
        <View>
          <InputContainer>
            <Field
              status={emailError.hasError ? 'danger' : 'normal'}
              value={data.email}
              onFunction={value => setData({...data, email: value})}
              label="E-mail"
              autoComplete="email"
              placeholder="pedro@gmail.com"
              keyboardType="email-address"
              textContentType="emailAddress"
              maxLength={50}
              iconName="email"
              // autoFocus={true}
            />
          </InputContainer>
          {emailError.hasError && (
            <ErrorMsg isValidation msg={emailError.msg} />
          )}

          <InputContainer>
            <SecureField
              status={passwordError.hasError ? 'danger' : 'normal'}
              value={data.senha}
              onFunction={value => setData({...data, senha: value})}
            />
          </InputContainer>
          {passwordError.hasError && (
            <ErrorMsg isValidation msg={passwordError.msg} />
          )}

          {hasError.status && <ErrorMsg msg={hasError.msg} />}

          <ButtonContainer>
            <Button
              isLoading={isLoading}
              onFunction={() => {
                login();
              }}
              title="ENTRAR"
            />
          </ButtonContainer>

          <Center>
            {Dimensions.get('window').width <= maxWidth ? (
              <>
                <ContainerRow>
                  <DefaultText>Ainda não possui sua conta? </DefaultText>
                  <Link
                    onFunction={() => {
                      navigation.navigate('Signup');
                    }}
                    text="Clique aqui"
                  />
                </ContainerRow>
              </>
            ) : (
              <>
                <DefaultText>Ainda não possui sua conta? </DefaultText>
                <Link
                  onFunction={() => {
                    navigation.navigate('Signup');
                  }}
                  text="Clique aqui"
                />
              </>
            )}
          </Center>
        </View>
      </Screen>
    </>
  );
};

export default Login;
