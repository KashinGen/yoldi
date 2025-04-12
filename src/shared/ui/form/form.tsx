import { Button } from '@/shared/ui';
import cls from './form.module.scss';
import classNames from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

type FormProps = {
    className?: string;
    title: string; 
    submitText: string; 
    children: React.ReactNode;
    onSubmit:  (e: React.SyntheticEvent) => void;
    disabled: boolean
  };

export const Form = ( { className = '', title, submitText, onSubmit, disabled, children  }: FormProps & ComponentPropsWithoutRef<'form'> ) => {

  return (
    <form className={classNames(cls.form, className)} onSubmit={onSubmit} autoComplete="off">
      <div className={cls.formInner}>
        <h1 className={cls.title}>{title}</h1>
        <div className={cls.formGroup}>
          {children}
        </div>
        <Button type='submit' className={cls.btn} disabled={disabled}>{submitText}</Button>
      </div>
    </form>
  );
};
