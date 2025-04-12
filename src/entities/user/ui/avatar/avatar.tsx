import { API_URL } from "@/shared/const";
import cls from "./avatar.module.scss";
import classNames from "classnames";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ChangeEvent } from "react";
import { imageSchema, validateFile } from "../../model/image";
const CameraIcon = dynamic(
  () => import("@/shared/assets/icons/camera-solid.svg"),
);

interface AvatarProps {
  className?: string;
  name: string;
  url?: string;
  variant: "big" | "small";
  isEditable?: boolean;
}

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
  isEditable = false,
  className = "",
}: AvatarProps) => {
  const { width, height } = getSize(variant);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const isValid = validateFile(file, imageSchema);
      if (isValid) {
        console.log(file);
      }
    }
  };

  return (
    <div
      className={classNames(
        cls.avatar,
        cls[variant],
        { [cls.editable]: isEditable },
        className,
      )}
    >
      {isEditable && (
        <label htmlFor="file-input" className={cls.upload}>
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
