import React from 'react';

import useLoaded from './hooks/use-loaded';

export interface AvatarImgProps extends React.ComponentPropsWithoutRef<'img'> {
  /** The src attribute of the img element. */
  src?: string;
  /** The srcset attribute of the img element. */
  srcSet?: string;
  /** The sizes attribute of the img element. */
  sizes?: string;
  /** The alt attribute of the img element. */
  alt?: string;
  /** The crossorigin attribute of the img element. */
  crossOrigin?: React.ImgHTMLAttributes<HTMLImageElement>['crossOrigin'];
  /** The referrerpolicy attribute of the img element. */
  referrerPolicy?: React.ImgHTMLAttributes<HTMLImageElement>['referrerPolicy'];
}

const AvatarImg = React.forwardRef<HTMLImageElement, AvatarImgProps>((props, ref) => {
  const { src, srcSet, sizes, alt, crossOrigin, referrerPolicy, ...rest } = props;

  const loaded = useLoaded({ src, srcSet, crossOrigin, referrerPolicy });
  const hasImg = src && loaded !== 'error';

  if (!hasImg) return null;

  return <img {...rest} ref={ref} alt={alt} src={src} srcSet={srcSet} sizes={sizes} />;
});

AvatarImg.displayName = 'Avatar.Img';

export default AvatarImg;
