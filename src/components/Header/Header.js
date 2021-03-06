import React from 'react';
import {ContainerTitle, ContainerImage, Logo} from './styledComponents';
import Title from 'components/Title/Title';

const Header = ({
  title = 'GAME POSTS',
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
          <Logo source={require('../../../assets/image/logoGame.jpg')} />
        </ContainerImage>
      ) : null}
    </>
  );
};

export default Header;
