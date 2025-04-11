'use client'
import cls from './footer.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';


interface FooterProps {
  className?: string;
}
const footerContent = () => {
    const currentPath = useSelectedLayoutSegment();
    if (currentPath === 'login') {
        return (
            <p>Еще нет аккаунта? <Link className={cls.link} href="/register">Зарегистрироваться</Link></p>
        )
    }
    return (
        <p>Уже есть аккаунт? <Link className={cls.link} href="/login">Войти</Link></p>
    )
}

export const Footer = ( { className = '' }: FooterProps ) => {

  return (
    <footer className={classNames(cls.footer, className)}>
      <div className={cls.inner}>
        {footerContent()}
      </div>
    </footer>
  );
};
