'use client'
import cls from './input-password.module.scss';
import React, { useState } from 'react';
import classNames from 'classnames';
import { Input } from '../input/input';
import Eye from '@/shared/assets/icons/eye-solid.svg'
import EyeSlash from '@/shared/assets/icons/eye-slash.svg'


interface InputPasswordProps extends React.ComponentPropsWithoutRef<'input'> {
    className?: string; 
    containerClassName?: string;
    icon?: React.ReactNode;
    error?: boolean;
}

export const InputPassword = ( { className = '', containerClassName = '',  ...props }: InputPasswordProps ) => {
    const [isShown, setIsShown] = useState(false);
    const contClassName = classNames(
        cls.wrapper,
        {
            [cls.disabled]: props.disabled,
            [cls.filled]: !!props.value,
        },
        containerClassName
    )

    return (
        <div className={contClassName}>
            <Input {...props} type={isShown ? 'text' : 'password'} />
            <button className={cls.button} onClick={() => setIsShown(!isShown)}>
                {isShown ? <EyeSlash/> : <Eye/>}
            </button>
        </div>
    );
};
