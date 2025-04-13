"use client";
import { Button } from "@/shared/ui";
import cls from "./cover.module.scss";
import classNames from "classnames";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ImageType } from "@/entities/user/model/types";
import { useChangeCover } from "../hooks/useChangeCover";
import { RefObject, useRef } from "react";
import { useTouchVisible } from "@/entities/user/hooks/useTouchVisible";
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
  const { onBtnClick, ref, handleImgChange } = useChangeCover({
    onApiCallSuccess,
    image,
  });
  const excludedRef = useRef<HTMLButtonElement>(null);
  const { targetRef, isHovered, handleTouchEnd } =
    useTouchVisible<HTMLDivElement>([ref as RefObject<HTMLElement>]);

  return (
    <div
      className={classNames(
        cls.cover,
        { [cls.editable]: isEditable },
        className,
      )}
      onTouchEnd={handleTouchEnd}
      ref={targetRef}
    >
      {isEditable && (
        // <div
        //   className={classNames(cls.uploadWrapper, {
        //     [cls.hovered]: isHovered,
        //   })}
        // >
        <Button
          variant="outline"
          className={classNames(cls.uploadBtn, { [cls.hovered]: isHovered })}
          onClick={onBtnClick}
          ref={excludedRef}
        >
          <input
            type="file"
            className={cls.inputFile}
            ref={ref}
            onChange={handleImgChange}
          />
          {getBtnContent(image)}
        </Button>

        // </div>
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
