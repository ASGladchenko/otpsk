import { Button, ButtonColorScheme, ButtonVariant } from '@shared';

export const MainPage = () => {
  return (
    <div>
      Main Page
      <Button
        as="link"
        to="asd"
        color={ButtonColorScheme.Blue}
        variant={ButtonVariant.Filled}
      >
        Main Page 123
      </Button>
    </div>
  );
};
