import Link from "next/link";
import cls from "./header.module.scss";
import classNames from "classnames";
import LogoImage from "@/shared/assets/icons/logo-wrapper.svg";
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
            <LogoImage />
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
