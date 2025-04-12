"use client";
import dynamic from "next/dynamic";
import cls from "./user-info.module.scss";
import classNames from "classnames";
import { Avatar } from "../avatar";
import { Button } from "@/shared/ui";
const PenIcon = dynamic(() => import("@/shared/assets/icons/pen-solid.svg"), {
  ssr: false,
});

const SignOutIcon = dynamic(
  () => import("@/shared/assets/icons/sign-out-alt-solid.svg"),
  {
    ssr: false,
  },
);
import { useState } from "react";
const ModalSettings = dynamic(
  () => import("@/features/modal-settings").then((mod) => mod.ModalSettings),
  {
    ssr: false,
  },
);
import { User } from "../../model/types";
import { sessionService } from "@/shared/lib/session";
import { KeyedMutator } from "swr";

interface UserInfoProps {
  className?: string;
  account: User;
  isOwner: boolean;
  mutate: KeyedMutator<User>;
}

export const UserInfo = ({
  account,
  isOwner,
  mutate,
  className = "",
}: UserInfoProps) => {
  const { name, description, email, image } = account;
  const [isModalOpened, setIsModalOpened] = useState(false);

  const onSignOut = () => {
    sessionService.remove();
    window.location.reload();
  };

  const onEditSuccess = () => {
    setIsModalOpened(false);
    mutate();
  };

  return (
    <section className={classNames(cls.info, className)}>
      <div className={cls.top}>
        <Avatar
          name={name}
          variant="big"
          className={cls.avatar}
          url={image?.url}
          isEditable={isOwner}
        />
      </div>
      <div className={cls.controls}>
        <div className={cls.left}>
          <span className={cls.name}>{name}</span>
          <span className={cls.email}>{email}</span>
        </div>
        {isOwner && (
          <Button
            variant="outline"
            className={cls.btn}
            onClick={() => setIsModalOpened(true)}
          >
            <PenIcon />
            <span>Редактировать</span>
          </Button>
        )}
      </div>
      <div className={cls.description}>{description}</div>
      <div className={cls.bottom}>
        {isOwner && (
          <Button variant="outline" className={cls.btn} onClick={onSignOut}>
            <SignOutIcon />
            <span>Выйти</span>
          </Button>
        )}
      </div>
      {isModalOpened && (
        <ModalSettings
          onSuccess={onEditSuccess}
          onClose={() => setIsModalOpened(false)}
          account={account}
        />
      )}
    </section>
  );
};
