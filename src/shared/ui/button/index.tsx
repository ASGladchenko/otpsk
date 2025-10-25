import React from 'react';

import { NavLinkRenderProps } from 'react-router-dom';

import { getButtonClass } from './utils';
import { LinkButton, PrimitiveButton } from './primitives';
import {
  ButtonSize,
  ButtonVariant,
  ButtonColorScheme,
  ButtonProps,
  ButtonNativeProps,
  ButtonLinkProps,
} from './types';

import './styles.scss';

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      isActive,
      disabled,
      className,
      as = 'button',
      size = ButtonSize.Medium,
      color = ButtonColorScheme.Blue,
      variant = ButtonVariant.Outline,
      ...props
    },
    ref
  ) => {
    const classes = (navProps?: NavLinkRenderProps) =>
      getButtonClass({
        size,
        color,
        variant,
        navProps,
        isActive,
        disabled,
        className,
      });

    const blocked = disabled || props.isLoading;

    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
    ) => {
      if (blocked) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      if (as === 'button') {
        (props as ButtonNativeProps).onClick?.(
          e as React.MouseEvent<HTMLButtonElement>
        );
      } else {
        (props as ButtonLinkProps).onClick?.(
          e as React.MouseEvent<HTMLAnchorElement>
        );
      }
    };

    switch (as) {
      case 'link':
        return (
          <LinkButton
            {...(props as ButtonLinkProps)}
            className={classes}
            onClick={handleClick}
            tabIndex={blocked ? -1 : undefined}
            aria-disabled={blocked || undefined}
            ref={ref as React.Ref<HTMLAnchorElement>}
          />
        );

      case 'button':
      default:
        return (
          <PrimitiveButton
            {...(props as ButtonNativeProps)}
            disabled={blocked}
            className={classes()}
            onClick={handleClick}
            ref={ref as React.Ref<HTMLButtonElement>}
          />
        );
    }
  }
);

Button.displayName = 'Button';
