import type { Metadata } from "next";
import { Footer, Header } from "@/widgets";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header/>
        <main className='main-auth'>
            {children}
        </main>
        <Footer/>
    </>
  );
}
