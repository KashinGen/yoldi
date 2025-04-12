import { RegisterForm } from "@/features/register-form/ui/register-form";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: 'Регистрация в Yoldi Agency',
  description: 'Создайте свой аккаунт Yoldi Agency',
  openGraph: {
    title: 'Регистрация в Yoldi Agency',
    description: 'Создайте свой аккаунт Yoldi Agency',
  },
};

export default function LoginPage() {
  return ( <RegisterForm/>
  );
}
