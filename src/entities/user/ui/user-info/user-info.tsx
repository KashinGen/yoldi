'use client'
import cls from './user-info.module.scss';
import classNames from 'classnames';
import { Avatar } from '../avatar';
import { Button } from '@/shared/ui';
import PenIcon from '@/shared/assets/icons/pen-solid.svg'
import SignOut from '@/shared/assets/icons/sign-out-alt-solid.svg'
import { useState } from 'react';
import { ModalSettings } from '@/features/modal-settings';

interface UserInfoProps {
  className?: string;
  name: string;
  email: string;
  descripton: string;

}

export const UserInfo = ( { name, email, descripton, className = '' }: UserInfoProps ) => {
    const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <section className={classNames(cls.info, className)}>
      <div className={cls.top}>
        <Avatar name={name} variant='big' className={cls.avatar}/>
      </div>
      <div className={cls.controls}>
        <div className={cls.left}>
            <span className={cls.name}>{name}</span>
            <span className={cls.email}>{email}</span>
        </div>
        <Button variant='outline' className={cls.btn} onClick={() => setIsModalOpened(true)}>
            <PenIcon/><span>Редактировать</span>
        </Button>
      </div>
      <div className={cls.description}>
        {descripton}
      </div>
      <div className={cls.bottom}>
        <Button variant='outline' className={cls.btn}>
            <SignOut/><span>Выйти</span>
        </Button>
      </div>
      {isModalOpened && <ModalSettings onClose={() => setIsModalOpened(false)}/>}
    </section>
  );
};
