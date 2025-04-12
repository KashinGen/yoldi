import Link from "next/link";
import cls from "./header.module.scss";
import classNames from "classnames";
import Image from "next/image";
import LogoImage from "./assets/logo-wrapper.png";
import { UserControl } from "@/features";

interface headerProps {
  className?: string;
}

export const Header = ({ className = "" }: headerProps) => {
  return (
    <header className={classNames(cls.header, className)}>
      <div className={cls.inner}>
        <div className={cls.left}>
          <Link href={"/"} className={cls.logo}>
            <Image
              src={LogoImage}
              width={80}
              height={50}
              alt="Logo"
              className={cls.logoImage}
            />
          </Link>
          <p className={cls.slogan}>
            Разрабатываем и запускаем сложные веб проекты
          </p>
        </div>
        <UserControl />
      </div>
    </header>
  );
};
