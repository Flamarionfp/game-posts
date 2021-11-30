import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Field from 'components/Inputs/Field';
import Screen from 'components/Screen';
import {
  Center,
  DefaultText,
  InputContainer,
} from 'styles/globalStyledComponents';
import {widthToDp} from 'helpers/convertDimension';
import Button from 'components/Button/Button';
// import {useDispatch} from 'react-redux';

const IpScreen = ({navigation}) => {
  // const dispatch = useDispatch();

  const [isRealPhone, setIsRealPhone] = useState(false);
  const [isMainButtonEnable, setIsMainButtonEnable] = useState(false);
  const [ip, setIp] = useState('');

  useEffect(() => {
    if (ip.length >= 11) {
      setIsMainButtonEnable(true);
    } else {
      setIsMainButtonEnable(false);
    }
  }, [ip]);

  return (
    <Screen>
      <View style={styles.container}>
        <Center>
          <DefaultText textAlign="center" fontSize={widthToDp(6)}>
            {isRealPhone
              ? 'Digite seu IP para continuar'
              : 'Bem vindo a versão de desenvolvimento de Game Posts!'}
          </DefaultText>
        </Center>

        <InputContainer marginTop={isRealPhone ? 0 : 30}>
          {!isRealPhone && (
            <Button
              onFunction={() => {
                // dispatch({
                //   type: 'user/setUserIp',
                //   payload: '10.0.2.2',
                // });
              }}
              bg="#000"
              title="Estou no emulador"
            />
          )}
          <InputContainer marginTop={15} />
          {!isRealPhone && (
            <Button
              onFunction={() => {
                setIsRealPhone(true);
              }}
              title="Estou no celular"
            />
          )}
          {isRealPhone && (
            <>
              <InputContainer>
                <Field
                  value={ip}
                  onFunction={value => setIp(value)}
                  iconName="ip"
                  label="IPV4"
                  placeholder="Ex: 192.168.0.1"
                />
              </InputContainer>
              <InputContainer marginTop={30}>
                <Button
                  onFunction={() => {
                    // dispatch({
                    //   type: 'user/setUserIp',
                    //   payload: ip,
                    // });
                  }}
                  disabled={!isMainButtonEnable}
                  title="Entrar no app"
                />
              </InputContainer>
            </>
          )}
        </InputContainer>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default IpScreen;
