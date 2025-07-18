import React from 'react';

import {
  AvatarExtra as MAvatarExtra,
  AvatarGroup as MAvatarGroup,
  AvatarGroupContent as MAvatarGroupContent,
  AvatarImg as MAvatarImg,
  AvatarRoot as MAvatarRoot,
} from '@mangoui/avatar';

import { cn } from '@/shared/utils/cn';

interface AvatarRootProps extends React.ComponentPropsWithoutRef<typeof MAvatarRoot> {}
export function AvatarRoot({ className, ...props }: AvatarRootProps) {
  return (
    <MAvatarRoot
      {...props}
      className={cn(
        'flex items-center justify-center',
        'h-9 w-9 overflow-hidden',
        'bg-slate-500 text-white',
        'select-none rounded-[50%] text-xl',
        className,
      )}
    />
  );
}

interface AvatarImgProps extends React.ComponentPropsWithoutRef<typeof MAvatarImg> {}
export function AvatarImg({ className, ...props }: AvatarImgProps) {
  return <MAvatarImg {...props} className={cn('h-full w-full', className)} />;
}

interface AvatarGroupProps extends React.ComponentPropsWithoutRef<typeof MAvatarGroup> {}
export function AvatarGroup({ className, ...props }: AvatarGroupProps) {
  return <MAvatarGroup {...props} className={cn('flex items-center', className)} />;
}

interface AvatarGroupContentProps
  extends React.ComponentPropsWithoutRef<typeof MAvatarGroupContent> {}
export function AvatarGroupContent({ className, ...props }: AvatarGroupContentProps) {
  return (
    <MAvatarGroupContent
      {...props}
      className={cn(
        'flex items-center',
        '[&>*]:ml-[-10px] [&>*]:border-2 [&>*]:border-inherit first:[&>*]:ml-0',
        '[&+*]:ml-[-10px] [&+*]:border-2 [&+*]:border-inherit',
        className,
      )}
    />
  );
}

interface AvatarExtraProps extends React.ComponentPropsWithoutRef<typeof MAvatarExtra> {}
export function AvatarExtra({ className, ...props }: AvatarExtraProps) {
  return (
    <MAvatarExtra
      {...props}
      className={cn(
        'flex items-center justify-center',
        'h-9 w-9 overflow-hidden',
        'bg-slate-500 text-white',
        'select-none rounded-[50%] text-xl',
        className,
      )}
    />
  );
}

export const Avatar = {
  Root: AvatarRoot,
  Img: AvatarImg,
  Group: AvatarGroup,
  GroupContent: AvatarGroupContent,
  Extra: AvatarExtra,
};
