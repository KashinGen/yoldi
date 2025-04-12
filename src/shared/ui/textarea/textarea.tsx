'use client'
import { useEffect, useRef } from 'react';
import cls from './textarea.module.scss';
import classNames from 'classnames';
import {mergeRefs} from "react-merge-refs";

interface InputProps extends React.ComponentProps<'textarea'> {
    className?: string; 
    containerClassName?: string;
    icon?: React.ReactNode;
    error?: boolean;
}

export const Textarea = ({ className = '', icon, error, disabled, value, ...props }: InputProps ) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const contClassName = classNames(
        cls.container,
        {
            [cls.withIcon]: icon,
            [cls.disabled]: disabled,
            [cls.filled]: value,
            [cls.error]: error,
        },
        className
    )
    const adjustHeight = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'; // Сбрасываем высоту, чтобы вычислить новую
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Устанавливаем высоту на основе содержимого
      }
    };
  
    useEffect(() => {
      adjustHeight(); // Устанавливаем начальную высоту при монтировании
    }, []);
      
  return (
    <div className={contClassName}>
      <textarea className={cls.textarea}  onInput={adjustHeight} {...props} ref={mergeRefs([textareaRef, props.ref])}/>
    </div>
  );
};
