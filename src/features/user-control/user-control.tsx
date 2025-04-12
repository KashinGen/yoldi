'use client'
import { useUser } from '@/entities/user';
import { Button } from '@/shared/ui';
import cls from 'user-control.module.scss';

interface UserControlProps {
  className?: string;
}

export const UserControl = ( { className = '' }: UserControlProps ) => {
    const { user, isLoading } = useUser();
    console.log(user)
    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if (user) {
        return (
            <div>
              {user.name}
            </div>
        );
    }
    return (
        <Button variant='outline' as='link' href='/login'>Войти</Button>
    )

};
