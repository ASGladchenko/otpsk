export type InputOnChange = (
  value: string,
  event?: React.ChangeEvent<HTMLInputElement>
) => void;

export interface BaseInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'onChange'
  > {
  error?: string;
  clearable?: boolean;
  onClear?: () => void;
  onChange?: InputOnChange;
  type?: 'text' | 'password' | 'email' | 'number';
}
