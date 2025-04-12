import classNames from 'classnames';
import cls from './spinner.module.scss';

interface SpinnerProps {
  className?: string;
}

export const Spinner = ( { className = '' }: SpinnerProps ) => {
  return (
    <div className={classNames(cls.spinner, className)}>
      
    </div>
  );
};
