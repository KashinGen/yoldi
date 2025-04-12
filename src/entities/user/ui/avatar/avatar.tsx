import { API_URL } from "@/shared/const";
import cls from "./avatar.module.scss";
import classNames from "classnames";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ChangeEvent } from "react";
import { imageSchema, uploadImage, validateFile } from "../../model/image";
import { useUser } from "../../model";
import { editProfile } from "../../model/api";
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
  const { mutate, user } = useUser();
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const isValid = validateFile(file, imageSchema);
      if (isValid) {
        try {
          const formData = new FormData();
          formData.append("file", file);
          const imageInfo = await uploadImage(formData);
          await editProfile({ ...user, imageId: imageInfo.id });
          mutate();
          //eslint-disable-next-line
          props.onChangeAvatarSuccess && props.onChangeAvatarSuccess();
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  return (
    <div
      className={classNames(
        cls.avatar,
        cls[variant],
        { [cls.editable]: props.isEditable },
        className,
      )}
    >
      {props.isEditable && (
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
