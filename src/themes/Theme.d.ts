import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bodyBg: string;
      rowBg: string;
      undoneTodoFont: string;
      doneTodoFont: string;
      todoCreatorFont: string;
      todoCreatorCaret: string;
      todoCreatorPlaceholder: string;
      todosLeftFont: string;
      filterFont: string;
      filterHoverFont: string;
      filterSelectedFont: string;
      clearCompletedFont: string;
      clearCompletedHoverFont: string;
      dragnDropTextFont: string;
      rowDivider: string;
      doneTodoChecker: string;
      undoneTodoChecker: string;
    };
    assets: {
      bgImages: {
        desktop: string;
        mobile: string;
      };
      icon: string;
    };
  }
}
