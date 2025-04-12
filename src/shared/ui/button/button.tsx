import cls from './button.module.scss';
import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';




interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    variant?: 'filled' | 'outline'; 
    className?: string; 
    as?: 'link' | 'button';
    href?: string;
}

export const Button = ({ className, variant = 'filled', href, as='button', children, ...props }: ButtonProps ) => {
    const buttonClass = classNames(
        cls.btn, 
        cls[variant],
        className 
      );
  if (as === 'link' && href) {
    return (
      <Link className={buttonClass} href={href}>
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
