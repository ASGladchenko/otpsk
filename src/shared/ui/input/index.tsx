import { forwardRef } from 'react';

import { cn, Icons } from '@shared';

import { BaseInputProps } from './types';

import './styles.scss';

export const Input = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    { onClear, onChange, error, clearable, className, type = 'text', ...props },
    ref
  ) => {
    const wrapperClass = cn(
      'input-wrapper',
      !!error && 'input-error',
      className
    );

    const handleClear = () => {
      onClear?.();
      onChange?.('');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value, e);
    };

    return (
      <label className={wrapperClass}>
        <input ref={ref} type={type} onChange={handleChange} {...props} />

        {clearable && props.value && (
          <button
            type="button"
            onClick={handleClear}
            className="input-clear-btn"
          >
            <Icons.Cross className="input-clear-btn-icon" />
          </button>
        )}
      </label>
    );
  }
);

Input.displayName = 'Input';
