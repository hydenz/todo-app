import { DefaultTheme } from 'styled-components';
import desktopDarkBg from '../assets/bg-desktop-dark.jpg';
import desktopLightBg from '../assets/bg-desktop-light.jpg';
import mobileDarkBg from '../assets/bg-mobile-dark.jpg';
import mobileLightBg from '../assets/bg-mobile-light.jpg';
import moonIcon from '../assets/icon-moon.svg';
import sunIcon from '../assets/icon-sun.svg';

const Dark: DefaultTheme = {
  colors: {
    bodyBg: 'hsl(235, 21%, 11%)',
    rowBg: 'hsl(235, 24%, 19%)',
    rowDivider: 'hsla(233, 14%, 35%, .4)',
    undoneTodoFont: 'hsl(234, 39%, 85%)',
    todoCreatorFont: 'hsl(234, 39%, 85%)',
    todoCreatorCaret: 'hsl(220, 98%, 61%)',
    doneTodoFont: 'hsl(233, 14%, 35%)',
    filterHoverFont: 'hsl(236, 33%, 92%)',
    filterSelectedFont: 'hsl(220, 98%, 61%)',
    clearCompletedHoverFont: 'hsl(236, 33%, 92%)',
    clearCompletedFont: 'hsl(234, 11%, 52%)',
    todoCreatorPlaceholder: 'hsl(234, 39%, 85%)',
    todosLeftFont: 'hsl(234, 11%, 52%)',
    dragnDropTextFont: 'hsl(234, 11%, 52%)',
    filterFont: 'hsl(234, 11%, 52%)',
    doneTodoChecker:
      'linear-gradient(120deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
    undoneTodoChecker: 'hsla(233, 14%, 35%, .4)',
  },
  assets: {
    bgImages: {
      desktop: desktopDarkBg,
      mobile: mobileDarkBg,
    },
    icon: sunIcon,
  },
};

const Light: DefaultTheme = {
  colors: {
    bodyBg: 'hsl(0, 0%, 98%)',
    rowBg: 'hsl(0, 0%, 100%)',
    rowDivider: 'hsla(233, 11%, 84%, .4)',
    clearCompletedFont: 'hsl(236, 9%, 61%)',
    clearCompletedHoverFont: 'hsl(0, 0%, 0%)',
    doneTodoFont: 'hsl(233, 11%, 84%)',
    dragnDropTextFont: 'hsl(236, 9%, 61%)',
    filterFont: 'hsl(236, 9%, 61%)',
    filterHoverFont: 'hsl(0, 0%, 0%)',
    filterSelectedFont: 'hsl(220, 98%, 61%)',
    todoCreatorCaret: 'hsl(220, 98%, 61%)',
    todoCreatorFont: 'hsl(0, 0%, 0%)',
    todoCreatorPlaceholder: 'hsl(235, 19%, 35%)',
    todosLeftFont: 'hsl(236, 9%, 61%)',
    undoneTodoFont: 'hsl(235, 19%, 35%)',
    doneTodoChecker:
      'linear-gradient(120deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
    undoneTodoChecker: 'hsla(233, 11%, 84%, .4)',
  },
  assets: {
    bgImages: {
      desktop: desktopLightBg,
      mobile: mobileLightBg,
    },
    icon: moonIcon,
  },
};

export { Dark, Light };
