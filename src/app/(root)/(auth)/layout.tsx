import type { Metadata } from "next";
import { Footer, Header } from "@/widgets";

export const metadata: Metadata = {
  title: "Yoldi",
  description: "Yoldi personal page",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="main-auth">{children}</main>
      <Footer />
    </>
  );
}
