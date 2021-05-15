import React, { useContext } from 'react';
import { ThemeChangerContext } from '../../App';
import { HeaderContainer, HeaderButton, HeaderButtonImage } from './styles';

const Header = () => {
  const setStorageTheme = useContext(ThemeChangerContext);

  const handleThemeChange = () => {
    if (setStorageTheme)
      setStorageTheme((oldTheme) => (oldTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <>
      <HeaderContainer>
        <span>Todo</span>
        <HeaderButton
          onClick={handleThemeChange}
          type='button'
          aria-label='Switch between dark and light theme'
        >
          <HeaderButtonImage />
        </HeaderButton>
      </HeaderContainer>
    </>
  );
};

export default Header;
