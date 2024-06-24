import React from 'react';

import { AvatarImgProps } from '../avatar-img';

type UseLoadedParams = Pick<AvatarImgProps, 'src' | 'srcSet' | 'crossOrigin' | 'referrerPolicy'>;
type LoadStatusValue = 'pending' | 'loading' | 'loaded' | 'error';

export default function useLoaded({
  src,
  srcSet,
  crossOrigin,
  referrerPolicy,
}: UseLoadedParams): LoadStatusValue {
  const [loaded, setLoaded] = React.useState<LoadStatusValue>('pending');

  React.useEffect(() => {
    if (!src) return undefined;

    setLoaded('loading');

    let active = true;

    const image = new Image();

    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded('loaded');
    };

    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded('error');
    };

    image.src = src;

    if (srcSet) {
      image.srcset = srcSet;
    }

    if (crossOrigin) {
      image.crossOrigin = crossOrigin;
    }

    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }

    return () => {
      // console.log('useLoaded cleanup');
      active = false;
    };
  }, [crossOrigin, referrerPolicy, src, srcSet]);

  return loaded;
}
