import cls from './badge-input.module.scss';
import classNames from 'classnames';
import { Input } from '../input';

interface BadgeInputProps extends React.ComponentPropsWithoutRef<'input'> {
    className?: string; 
    containerClassName?: string;
    icon?: React.ReactNode;
    error?: boolean;
    badgeText: string;
}

export const BadgeInput = ( { className = '', badgeText, containerClassName = '',  ...props }: BadgeInputProps ) => {
    const contClassName = classNames(
        cls.wrapper,
        {
            [cls.filled]: !!props.value,
            [cls.error]: props.error,
        },
        containerClassName
    )
    
  return (
    <div className={contClassName}>
      <div className={cls.badge}>{badgeText}</div>
      <Input {...props} className={cls.input} containerClassName={cls.inputWrapper}/>
    </div>
  );
};
