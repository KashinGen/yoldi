import cls from './labelled-input.module.scss';
import React from 'react';
import classNames from 'classnames';

// type InputOrTextareaProps<T extends 'input' | 'textarea'> =
//   T extends 'input'
//     ? React.ComponentPropsWithoutRef<'input'>
//     : React.ComponentPropsWithoutRef<'textarea'>;


type LabelledInputProps =  {
  className?: string;
  label: string;
  children: React.ReactElement;
}

export const LabelledInput = ( { className = '', label, children, ...props }: LabelledInputProps ) => {
// const childrenWithProps = React.cloneElement(children, { ...props });

  return (
    <label className={classNames(cls.wrapper, className)}>
      <span className={cls.label}>{label}</span>
      {children}
    </label>
  );
};
