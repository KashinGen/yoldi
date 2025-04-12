'use client'
import dynamic from 'next/dynamic';
import cls from './user-info.module.scss';
import classNames from 'classnames';
import { Avatar } from '../avatar';
import { Button } from '@/shared/ui';
// import PenIcon from '@/shared/assets/icons/pen-solid.svg'
// import SignOut from '@/shared/assets/icons/sign-out-alt-solid.svg'
const PenIcon = dynamic(() => import('@/shared/assets/icons/pen-solid.svg'), {
  ssr: false, // Disable server-side rendering if the component relies on the DOM or window
});

const SignOutIcon = dynamic(() => import('@/shared/assets/icons/sign-out-alt-solid.svg'), {
  ssr: false, // Same as above
});
import { useState } from 'react';
const ModalSettings = dynamic(() => import('@/features/modal-settings').then((mod) => mod.ModalSettings), {
  ssr: false, 
});
import { User } from '../../model/types';

interface UserInfoProps {
  className?: string;
  account: User,
  isOwner: boolean;

}

export const UserInfo = ( { account, isOwner, className = '' }: UserInfoProps ) => {
  const { name, description, email } = account;
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
        {isOwner && <Button variant='outline' className={cls.btn} onClick={() => setIsModalOpened(true)}>
            <PenIcon/><span>Редактировать</span>
        </Button>}
      </div>
      <div className={cls.description}>
        {description}
      </div>
      <div className={cls.bottom}>
      {isOwner && <Button variant='outline' className={cls.btn}>
            <SignOutIcon/><span>Выйти</span>
        </Button>}
      </div>
      {isModalOpened && <ModalSettings onClose={() => setIsModalOpened(false)}/>}
    </section>
  );
};
