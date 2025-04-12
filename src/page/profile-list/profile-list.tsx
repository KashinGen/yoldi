'use client'
import { useGetAccounts } from "@/features";
import { AccountList } from "@/widgets";
import cls from './profile-list.module.scss';

export const ProfileListPage = () => {
  const { accounts, isLoading, error } = useGetAccounts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <div className={cls.wrapper}>
      <h1 className={cls.title}>Список аккаунтов</h1>
      <AccountList accounts={accounts} />
    </div>
  );
};

