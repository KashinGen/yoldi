import { UserCard } from '@/entities/user/ui';
import cls from './account-list.module.scss';
import classNames from 'classnames';

interface AccountListProps {
  className?: string;
  accounts: any[]
}

export const AccountList = ( { className = '', accounts }: AccountListProps ) => {
  return (
    <ul className={classNames(cls.list, className)}>
        {accounts.map((account: any) => (
            <UserCard key={account.slug}  name={account.name} slug={account.slug} email={account.email}/>
        ))}
    </ul>
  );
};
