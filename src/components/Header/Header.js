import React from 'react';
import {ContainerTitle, ContainerImage, Logo} from './styledComponents';
import Title from 'components/Title/Title';

const Header = ({
  title = 'GAME PICTURES',
  hasTitle = true,
  hasLogo = true,
}) => {
  return (
    <>
      {hasTitle ? (
        <ContainerTitle>
          <Title title={title} />
        </ContainerTitle>
      ) : null}
      {hasLogo ? (
        <ContainerImage>
          <Logo source={require('../../../assets/image/logoGame.png')} />
        </ContainerImage>
      ) : null}
    </>
  );
};

export default Header;
