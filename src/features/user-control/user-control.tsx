'use client'
import { useUser } from '@/entities/user';
import { Button } from '@/shared/ui';
import classNames from 'classnames';
import cls from './user-control.module.scss';
import Link from 'next/link';
import { Avatar } from '@/entities/user/ui';

interface UserControlProps {
  className?: string;
}

export const UserControl = ( { className = '' }: UserControlProps ) => {
    const { user, isLoading } = useUser();
    console.log(user)
    if (isLoading) {
        return (
            <div className={classNames(cls.badge, cls.loading, className)}>
                <span className={cls.name}></span>
                <div className={cls.avatar}></div>
            </div>
        )
    }
    if (user) {
        return (
            <Link href={`/personal/${user.slug}`} className={cls.badge}>
              <span className={cls.name}>{user.name}</span>
                <Avatar variant='small' name={user.name} url={user.image?.url}/>
            </Link>
        );
    }
    return (
        <Button variant='outline' as='link' href='/login'>Войти</Button>
    )

};
