"use client";
import { useGetAccounts } from "@/features";
import { AccountList } from "@/widgets";
import cls from "./profile-list.module.scss";
import { Spinner } from "@/shared/ui";

export const ProfileListPage = () => {
  const { accounts, isLoading, error } = useGetAccounts();

  if (isLoading)
    return (
      <div className="loading-container">
        <Spinner />
      </div>
    );
  if (error)
    return <div className="loading-container">Error: {error.message}</div>;

  return (
    <div className={cls.wrapper}>
      <h1 className={cls.title}>Список аккаунтов</h1>
      <AccountList accounts={accounts} />
    </div>
  );
};
