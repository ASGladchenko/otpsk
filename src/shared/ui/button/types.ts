import { NavLinkProps } from 'react-router-dom';

export type NativeLinksProps = NavLinkProps;

export type NativeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export enum ButtonSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

export enum ButtonColorScheme {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
  Yellow = 'yellow',
}

export enum ButtonVariant {
  Filled = 'filled',
  Ghost = 'ghost',
  Outline = 'outline',
}

export type ButtonCommonProps = {
  size?: ButtonSize;
  isActive?: boolean;
  isLoading?: boolean;
  variant?: ButtonVariant;
  color?: ButtonColorScheme;
};

export type ButtonNativeProps = { as?: 'button' } & NativeButtonProps &
  ButtonCommonProps;

export type ButtonLinkProps = {
  as: 'link';
  to: string;
  disabled?: boolean;
} & NativeLinksProps &
  ButtonCommonProps;

export type ButtonProps = ButtonNativeProps | ButtonLinkProps;
