import { ProfileListPage } from "@/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пользователи Yoldi Agency",
  description: "Просмотрите всех пользователей в Yoldi Agency",
  openGraph: {
    title: "Пользователи Yoldi Agency",
    description: "Просмотрите всех пользователей в Yoldi Agency",
  },
};

const AccountsPage = () => {
  return <ProfileListPage />;
};

export default AccountsPage;
