import { Login } from "@/page";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: 'Логин в Yoldi Agency',
  description: 'Войдите в свой аккаунт Yoldi Agency',
  openGraph: {
    title: 'Логин в Yoldi Agency',
    description: 'Войдите в свой аккаунт Yoldi Agency',
  },
};


export default function LoginPage() {
  return ( <Login/>
  );
}
