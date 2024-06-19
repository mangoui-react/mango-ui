// 'use client';
import React from 'react';

import useLoaded from './hooks/useLoaded';

export interface AvatarImgProps extends React.ComponentPropsWithoutRef<'img'> {
  /** 이미지 src */
  src?: string;
  /** 이미지 srcset */
  srcSet?: string;
  /** 이미지 sizes */
  sizes?: string;
  /** 이미지 alt */
  alt?: string;
  /** 이미지 crossOrigin */
  crossOrigin?: React.ImgHTMLAttributes<HTMLImageElement>['crossOrigin'];
  /** 이미지 referrerPolicy */
  referrerPolicy?: React.ImgHTMLAttributes<HTMLImageElement>['referrerPolicy'];
}

/**
 * 아바타 이미지 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const AvatarImg = React.forwardRef<HTMLImageElement, AvatarImgProps>((props, ref) => {
  const { src, srcSet, sizes, alt, crossOrigin, referrerPolicy, ...rest } = props;

  const loaded = useLoaded({ src, srcSet, crossOrigin, referrerPolicy });
  const hasImg = src && loaded !== 'error';

  if (!hasImg) return null;

  return <img ref={ref} alt={alt} src={src} srcSet={srcSet} sizes={sizes} {...rest} />;
});

AvatarImg.displayName = 'Avatar.Img';

export default AvatarImg;
