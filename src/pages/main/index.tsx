import { useState } from 'react';

import { Input, Button, ButtonVariant, ButtonColorScheme } from '@shared';

export const MainPage = () => {
  const [value, setValue] = useState('');

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
      <Input
        clearable
        error="This field is required"
        value={value}
        placeholder="Enter text"
        onChange={(val) => setValue(val)}
      />
    </div>
  );
};
