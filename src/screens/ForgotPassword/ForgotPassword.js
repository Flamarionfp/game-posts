/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  Center,
  ContainerRow,
  DefaultText,
  InputContainer,
  ButtonContainer,
} from '../../styles/globalStyledComponents';
import {Formik} from 'formik';
import Screen from 'components/Screen';
import Header from 'components/Header/Header';
import Field from 'components/Inputs/Field';
import SecureField from 'components/Inputs/SecureField';
import Link from 'components/Link/Link';
import Button from 'components/Button/Button';
import Title from 'components/Title/Title';
import {TitleContainer} from './styledComponents';

const Login = ({navigation}) => {
  return (
    <>
      <Screen position="center">
        <Header />
        <View>
          <TitleContainer>
            <Title
              title="Informe seu E-mail para recuperar sua Senha"
              textAlign="center"
            />
          </TitleContainer>
          <Formik
            initialValues={{email: '', password: '', confirmPassword: ''}}
            // validate={validate}
          >
            {({values, errors}) => (
              <>
                <InputContainer>
                  <Field
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
              </>
            )}
          </Formik>

          <ButtonContainer>
            <Button title="RECUPERAR SENHA" />
          </ButtonContainer>

          <Center>
            <Link
              onFunction={() => {
                navigation.goBack();
              }}
              text="Voltar"
            />
          </Center>
        </View>
      </Screen>
    </>
  );
};

export default Login;
