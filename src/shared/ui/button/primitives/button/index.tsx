import React from 'react';
import { NativeButtonProps } from '../../types';

export const PrimitiveButton = React.forwardRef<
  HTMLButtonElement,
  NativeButtonProps
>(({ type = 'button', ...props }, ref) => {
  return (
    <button ref={ref} type={type} {...props}>
      {props.children}
    </button>
  );
});

PrimitiveButton.displayName = 'PrimitiveButton';
