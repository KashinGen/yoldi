'use client'
import { useGetAccounts } from "@/features";
import { AccountList } from "@/widgets";


const AccountsPage = () => {
  const { accounts, isLoading, error } = useGetAccounts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Список аккаунтов</h1>
      <AccountList accounts={accounts} />
    </div>
  );
};

export default AccountsPage;
