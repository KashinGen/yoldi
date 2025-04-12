import { API_URL } from "@/shared/const";
import cls from "./avatar.module.scss";
import classNames from "classnames";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useChangeAvatar } from "../../hooks/useChangeAvatar";
import { useState } from "react";
const CameraIcon = dynamic(
  () => import("@/shared/assets/icons/camera-solid.svg"),
);

type SmallAvatarProps = {
  variant: "small";
  isEditable?: never;
  onChangeAvatarSuccess?: never;
};

type BigAvatarProps = {
  variant: "big";
  isEditable?: boolean;
  onChangeAvatarSuccess: () => void;
};

type AvatarProps = {
  className?: string;
  name: string;
  url?: string;
} & (SmallAvatarProps | BigAvatarProps);

const getSize = (variant: "big" | "small") => {
  if (variant === "big") {
    return {
      width: 100,
      height: 100,
    };
  }

  return {
    width: 50,
    height: 50,
  };
};

export const Avatar = ({
  name,
  url,
  variant,
  className = "",
  ...props
}: AvatarProps) => {
  const { width, height } = getSize(variant);
  const handleFileChange = useChangeAvatar(props.onChangeAvatarSuccess);
  const [isHovered, setIsHovered] = useState(false);

  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => setIsHovered(false);

  return (
    <div
      className={classNames(
        cls.avatar,
        cls[variant],
        { [cls.editable]: props.isEditable },
        className,
      )}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {props.isEditable && (
        <label
          htmlFor="file-input"
          className={classNames(cls.upload, { [cls.hovered]: isHovered })}
        >
          <CameraIcon />
          <input
            id="file-input"
            className={cls.fileInput}
            type="file"
            onChange={handleFileChange}
          />
        </label>
      )}
      {url && url.includes(API_URL) ? (
        <Image
          alt={name}
          src={url}
          width={width}
          height={height}
          className={cls.image}
        />
      ) : (
        <span>{name[0].toUpperCase()}</span>
      )}
    </div>
  );
};
