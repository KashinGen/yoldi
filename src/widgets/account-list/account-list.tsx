import { UserCard } from "@/entities/user/ui";
import cls from "./account-list.module.scss";
import classNames from "classnames";
import { User } from "@/entities/user/model/types";

interface AccountListProps {
  className?: string;
  accounts: User[];
}

export const AccountList = ({ className = "", accounts }: AccountListProps) => {
  return (
    <ul className={classNames(cls.list, className)}>
      {accounts.map((account: User) => (
        <li key={account.slug}>
          <UserCard
            name={account.name}
            slug={account.slug}
            email={account.email}
            url={account.image?.url}
          />
        </li>
      ))}
    </ul>
  );
};
