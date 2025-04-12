import cls from "./cover.module.scss";
import classNames from "classnames";
import Image from "next/image";

interface CoverProps {
  className?: string;
  isEditable?: boolean;
  image?: {
    url: string;
    width: string;
    height: string;
  };
}

export const Cover = ({ className = "", isEditable, image }: CoverProps) => {
  console.log(isEditable)
  return (
    <div className={classNames(cls.cover, className)}>
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
