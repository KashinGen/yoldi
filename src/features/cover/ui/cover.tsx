"use client";
import { Button } from "@/shared/ui";
import cls from "./cover.module.scss";
import classNames from "classnames";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { ImageType } from "@/entities/user/model/types";
import {
  imageSchema,
  uploadImage,
  validateFile,
} from "@/entities/user/model/image";
import { editProfile } from "@/entities/user/model/api";
import { useUser } from "@/entities/user";
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
  onApiCallSuccess: () => void;
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

export const Cover = ({
  className = "",
  isEditable,
  onApiCallSuccess,
  image,
}: CoverProps) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const { mutate } = useUser();
  const onBtnClick = async () => {
    if (image) {
      try {
        await editProfile({ coverId: null });
        mutate();
        onApiCallSuccess();
      } catch (e) {
        console.log(e);
      }
    } else {
      if (fileInput.current) {
        fileInput.current.click();
      }
    }
  };

  const handleImgChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const isValid = validateFile(file, imageSchema);
      if (isValid) {
        try {
          const formData = new FormData();
          formData.append("file", file);
          const imageInfo = await uploadImage(formData);
          await editProfile({ coverId: imageInfo.id });
          mutate();
          onApiCallSuccess();
        } catch (e) {
          console.log(e);
        }
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
          <input
            type="file"
            className={cls.inputFile}
            ref={fileInput}
            onChange={handleImgChange}
          />
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
