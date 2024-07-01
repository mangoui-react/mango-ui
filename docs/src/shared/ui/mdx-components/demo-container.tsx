import React from 'react';

import { cn } from '@/shared/utils/cn';

export interface DemoContainerProps extends React.ComponentPropsWithoutRef<'div'> {}

export default function DemoContainer({ className, children, ...props }: DemoContainerProps) {
  return (
    <div className={cn('flex justify-center pt-14 pb-14 bg-[#203b85]', className)}>{children}</div>
  );
}
