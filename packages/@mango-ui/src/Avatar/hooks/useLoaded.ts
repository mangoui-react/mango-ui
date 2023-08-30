import { useEffect, useState } from 'react';

import { AvatarImgProps } from '../AvatarImg';

type UseLoadedType = Pick<AvatarImgProps, 'src' | 'srcSet' | 'crossOrigin' | 'referrerPolicy'>;
type LoadStatusType = 'pending' | 'loading' | 'loaded' | 'error';

const useLoaded = ({ src, srcSet, crossOrigin, referrerPolicy }: UseLoadedType): LoadStatusType => {
  const [loaded, setLoaded] = useState<LoadStatusType>('pending');

  useEffect(() => {
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
};

export default useLoaded;
