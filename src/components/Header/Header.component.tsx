import { Container, Button, ButtonImage } from './Header.style';
import type { HeaderProps } from './Header.types';

function Header({ setIsDarkTheme }: HeaderProps) {
  const handleThemeChange = () => {
    setIsDarkTheme((oldValue) => !oldValue);
  };

  return (
    <Container>
      <span>Todo</span>
      <Button onClick={handleThemeChange}>
        <ButtonImage />
      </Button>
    </Container>
  );
}

export default Header;
