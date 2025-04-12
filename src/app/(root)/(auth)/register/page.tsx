import { Register } from "@/page";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Регистрация в Yoldi Agency",
  description: "Создайте свой аккаунт Yoldi Agency",
  openGraph: {
    title: "Регистрация в Yoldi Agency",
    description: "Создайте свой аккаунт Yoldi Agency",
  },
};

export default function LoginPage() {
  return <Register />;
}
