import React from 'react';

import { AlertContent, AlertRoot, AlertStatusIcon } from '@mangoui/alert';

import { cn } from '@/shared/utils/cn';

interface RootProps extends React.ComponentPropsWithoutRef<typeof AlertRoot> {}
function Root({ className, ...props }: RootProps) {
  return (
    <AlertRoot
      {...props}
      className={cn(
        'flex items-center rounded-md px-4 py-1',
        'bg-blue-400 text-white',
        'data-[status=success]:bg-green-400 data-[status=success]:text-green-950',
        'data-[status=warning]:bg-orange-400 data-[status=warning]:text-orange-950',
        'data-[status=error]:bg-red-400 data-[status=error]:text-red-950',
        className,
      )}
    />
  );
}

interface StatusIconProps extends React.ComponentPropsWithoutRef<typeof AlertStatusIcon> {}
function StatusIcon({ className, ...props }: StatusIconProps) {
  return <AlertStatusIcon {...props} className={cn('px-0 py-2 font-bold', 'h-9 w-9', className)} />;
}

interface ContentProps extends React.ComponentPropsWithoutRef<typeof AlertContent> {}
function Content({ className, ...props }: ContentProps) {
  return <AlertContent {...props} className={cn('px-0 py-2 font-medium', className)} />;
}

export const Alert = {
  Root,
  StatusIcon,
  Content,
};
