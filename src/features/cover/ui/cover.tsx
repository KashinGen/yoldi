import cls from './cover.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

interface CoverProps {
  className?: string;
  isEditable?: boolean;
  url?: string
}

export const Cover = ( { className = '', isEditable, url }: CoverProps ) => {
  return (
    <div className={classNames(cls.cover, className)}>
      {url && <Image alt="cover" src={url}      sizes="100vw" // Tells the browser how much viewport width the image should take
      style={{
        width: '100%', // Ensure the image takes 100% of its container
        height: 'auto', // Maintain aspect ratio
      }}
      priority />}
    </div>
  );
};
