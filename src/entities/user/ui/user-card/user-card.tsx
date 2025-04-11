import cls from './user-card.module.scss';
import classNames from 'classnames';
import { Avatar } from '../avatar';
import Link from 'next/link';

interface UserCardProps {
  className?: string;
  name: string;
  email: string;
  slug: string;
}

export const UserCard = ( { className = '', name, email, slug }: UserCardProps ) => {
  return (
    <Link className={classNames(cls.card, className)} href={`/personal/${slug}`}>
      <Avatar name={name} variant={'small'}/>
      <div className={cls.content}>
        <span className={cls.name}>{name}</span>
        <span className={cls.email}>{email}</span>
      </div>
    </Link>
  );
};
