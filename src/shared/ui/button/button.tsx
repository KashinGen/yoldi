import cls from './button.module.scss';
import React from 'react';
import classNames from 'classnames';


interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    variant?: 'filled' | 'outline'; 
    className?: string; 
}

export const Button = ({ className, variant = 'filled', children, ...props }: ButtonProps ) => {
    const buttonClass = classNames(
        cls.btn, 
        cls[variant],
        className 
      );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
