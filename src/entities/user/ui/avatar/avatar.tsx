import cls from './avatar.module.scss';
import classNames from 'classnames';
import Image from 'next/image';


interface AvatarProps {
  className?: string;
  name: string,
  url?: string;
  variant: 'big' | 'small';
}

const getSize = (variant: 'big' | 'small') => {
    if (variant === 'big') {
        return {
            width: 100,
            height: 100
        }
    }

    return {
        width: 50,
        height: 50
    }
}



export const Avatar = ( {name, url, variant, className = '' }: AvatarProps ) => {
    const {width, height } = getSize(variant);

  return (
    <div className={classNames(cls.avatar, cls[variant], className)}>
      {
        url
        ?
        <Image alt={name} src={url} width={width} height={height}/>
        :
        <span>{name[0].toUpperCase()}</span>
      }
    </div>
  );
};
