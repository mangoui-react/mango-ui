// 'use client';

import React from 'react';

import { ComponentBaseProps } from '../types/common';
import useLoaded from './hooks/useLoaded';

export interface AvatarImgProps extends ComponentBaseProps, React.HTMLAttributes<HTMLImageElement> {
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

const AvatarImg = React.forwardRef<HTMLImageElement, AvatarImgProps>(
  ({ src, srcSet, sizes, alt, crossOrigin, referrerPolicy, children, ...rest }, ref) => {
    const loaded = useLoaded({ src, srcSet, crossOrigin, referrerPolicy });
    const hasImg = src && loaded !== 'error';

    if (!hasImg) return null;

    return <img ref={ref} alt={alt} src={src} srcSet={srcSet} sizes={sizes} {...rest} />;
  },
);

AvatarImg.displayName = 'Avatar.Img';

export default AvatarImg;
