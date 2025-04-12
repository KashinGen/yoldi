"use client";
import { Button } from "@/shared/ui";
import cls from "./cover.module.scss";
import classNames from "classnames";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { ImageType } from "@/entities/user/model/types";
const UploadIcon = dynamic(
  () => import("@/shared/assets/icons/upload-solid.svg"),
);
const DeleteIcon = dynamic(
  () => import("@/shared/assets/icons/trash-solid.svg"),
);
const PicIcon = dynamic(() => import("@/shared/assets/icons/image.svg"));

interface CoverProps {
  className?: string;
  isEditable?: boolean;
  image?: ImageType;
}

const getBtnContent = (image: ImageType | undefined) => {
  if (!image) {
    return (
      <span className={cls.btnContent}>
        <UploadIcon />
        Загрузить
        <PicIcon />
      </span>
    );
  }
  return (
    <span className={cls.btnContent}>
      <DeleteIcon />
      Удалить
      <PicIcon />
    </span>
  );
};

export const Cover = ({ className = "", isEditable, image }: CoverProps) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const onBtnClick = () => {
    if (image) {
    } else {
      if (fileInput.current) {
        fileInput.current.click();
      }
    }
  };
  return (
    <div
      className={classNames(
        cls.cover,
        { [cls.editable]: isEditable },
        className,
      )}
    >
      {isEditable && (
        <div className={cls.uploadWrapper}>
          <Button
            variant="outline"
            className={cls.uploadBtn}
            onClick={onBtnClick}
          >
            {getBtnContent(image)}
          </Button>
          <input type="file" className={cls.inputFile} ref={fileInput} />
        </div>
      )}
      {image && (
        <Image
          alt="cover"
          src={image.url}
          width={+image.width}
          height={+image.height}
          sizes="100vw"
          className={cls.image}
          priority
        />
      )}
    </div>
  );
};
