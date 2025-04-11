'use client'
import cls from './input.module.scss';
import React, { useState } from 'react';
import classNames from 'classnames';


interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
    className?: string; 
    containerClassName?: string;
    icon?: React.ReactNode;
    error?: boolean;
}

export const Input = ( { className = '', containerClassName = '', icon, error, disabled, value, ...props }: InputProps ) => {
    const [isFocused, setIsFocused] = useState(false);
    const contClassName = classNames(
        cls.container,
        {
            [cls.withIcon]: icon,
            [cls.focused]: isFocused,
            [cls.disabled]: disabled,
            [cls.filled]: value,
            [cls.error]: error,
        },
        containerClassName
    )
  return (
    <div className={contClassName}>
      {icon && <span className={cls.icon}>{icon}</span>}
      <input
        {...props}
        type={props.type ? props.type : 'text'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={classNames(cls.input, className)}
        autoComplete='off'
      />
    </div>
  );
};
