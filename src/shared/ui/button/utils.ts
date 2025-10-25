import { NavLinkRenderProps } from 'react-router-dom';

import { cn } from '@shared/utils';

type MergedClassName =
  | string
  | ((p: NavLinkRenderProps) => string | undefined)
  | undefined;

export type GetButtonClassParams = {
  size: string;
  color: string;
  variant: string;
  isActive?: boolean;
  disabled?: boolean;
  navProps?: NavLinkRenderProps;
  className: MergedClassName;
};

const resolveClass = (
  c: MergedClassName,
  p?: NavLinkRenderProps
): string | undefined => (typeof c === 'function' ? p && c(p) : c);

export const getButtonClass = ({
  size,
  color,
  variant,
  navProps,
  isActive,
  disabled,
  className,
}: GetButtonClassParams) => {
  const incomingClassName = resolveClass(className, navProps);

  return cn(
    'base-btn',
    `--${size} --${variant} --${color}`,
    navProps?.isActive || isActive ? `--active` : undefined,
    disabled ? `--disabled` : undefined,
    incomingClassName
  );
};
