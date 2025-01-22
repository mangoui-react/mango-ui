'use client';

// TODO: 'use client' 이거 없애고 @melio-ui/react 에서 해결하는 방법으로 수정해야 함
// 다른 컴포넌트도(Radix, mui 등...) 'use client' 사용해야 가능(테스트 해봄 - 혹시 몰르니 또 해보자)
import React from 'react';

import clsx from 'clsx';

import { Avatar } from '@melio-ui/react';

import BellIcon from '@/icons/BellIcon';
import UserIcon from '@/icons/UserIcon';

export default function AvatarPage(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-start gap-1">
        <Avatar.Root
          className={clsx(
            'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
            'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
            'rounded-[50%]',
          )}
        >
          <UserIcon />
        </Avatar.Root>
        <Avatar.Root
          className={clsx(
            'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
            'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
            'rounded-[50%]',
          )}
        >
          <UserIcon width="75%" height="75%" />
        </Avatar.Root>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Root
          className={clsx(
            'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
            'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
            'rounded-[50%]',
          )}
        >
          U
        </Avatar.Root>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Root
          className={clsx(
            'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
            'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
            'rounded-[50%]',
          )}
        >
          <Avatar.Img src="/images/avatar1.jpg" />
        </Avatar.Root>

        <Avatar.Root
          className={clsx(
            'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
            'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
            'rounded-[50%]',
          )}
        >
          <Avatar.Img className="h-full w-full text-transparent" src="/images/avatar1.jpg" />
        </Avatar.Root>

        <Avatar.Root
          className={clsx(
            'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
            'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
            'rounded-[50%]',
          )}
        >
          <Avatar.Img className="h-full w-full text-transparent" src="/images/avatar2.png" />
        </Avatar.Root>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Root
          className={clsx(
            'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
            'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
            'rounded-[50%]',
          )}
        >
          <BellIcon />
        </Avatar.Root>
        <Avatar.Root
          className={clsx(
            'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
            'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
            'rounded-[50%]',
          )}
        >
          <BellIcon fontSize="1.5rem" />
        </Avatar.Root>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Root
          className={clsx(
            'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
            'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
            'rounded-[50%]',
          )}
        >
          <UserIcon />
        </Avatar.Root>
        <Avatar.Root
          className={clsx(
            'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
            'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
            'rounded-[2px]',
          )}
        >
          <UserIcon width="75%" height="75%" />
        </Avatar.Root>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Root
          className={clsx(
            'flex h-[30px] w-[30px] items-center justify-center overflow-hidden',
            'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
            'rounded-[50%]',
          )}
        >
          <Avatar.Img src="/images/avatar2.png" />
        </Avatar.Root>
        <Avatar.Root
          className={clsx(
            'flex h-[50px] w-[50px] items-center justify-center overflow-hidden',
            'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
            'rounded-[50%]',
          )}
        >
          <UserIcon width="75%" height="75%" />
        </Avatar.Root>

        <Avatar.Root
          className={clsx(
            'flex h-[70px] w-[70px] items-center justify-center overflow-hidden',
            'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
            'rounded-[50%]',
          )}
        >
          <Avatar.Img src="/images/avatar1.jpg" />
        </Avatar.Root>

        <Avatar.Root
          className={clsx(
            'flex h-[100px] w-[100px] items-center justify-center overflow-hidden',
            'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
            'rounded-[50%]',
          )}
        >
          <UserIcon width="75%" height="75%" />
        </Avatar.Root>
      </div>

      <div>그룹</div>
      <div className="flex items-center justify-start gap-1">
        <Avatar.Group className="flex flex-row items-center justify-start">
          <Avatar.Root
            className={clsx(
              'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
              'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
              'rounded-[50%]',
              'border-background border-2 border-solid',
            )}
          >
            <UserIcon width="75%" height="75%" />
          </Avatar.Root>
          <Avatar.Root
            className={clsx(
              'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
              'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
              'rounded-[50%]',
              'border-background border-2 border-solid',
              'ml-[-10px]',
            )}
          >
            <UserIcon width="75%" height="75%" />
          </Avatar.Root>
          <Avatar.Root
            className={clsx(
              'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
              'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
              'rounded-[50%]',
              'border-background border-2 border-solid',
              'ml-[-10px]',
            )}
          >
            <UserIcon width="75%" height="75%" />
          </Avatar.Root>
        </Avatar.Group>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Group>
          <Avatar.GroupContent className="flex flex-row items-center justify-start">
            <Avatar.Root
              className={clsx(
                'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
                'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
                'rounded-[50%]',
                'border-background border-2 border-solid',
              )}
            >
              <BellIcon fontSize="1.5rem" />
            </Avatar.Root>
            <Avatar.Root
              className={clsx(
                'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
                'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
                'rounded-[50%]',
                'border-background border-2 border-solid',
                'ml-[-15px]',
              )}
            >
              B
            </Avatar.Root>
            <Avatar.Root
              className={clsx(
                'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
                'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
                'rounded-[50%]',
                'border-background border-2 border-solid',
                'ml-[-15px]',
              )}
            >
              <UserIcon width="75%" height="75%" />
            </Avatar.Root>
          </Avatar.GroupContent>
        </Avatar.Group>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Group className="flex flex-row items-center justify-start" max={2}>
          <Avatar.GroupContent className="flex flex-row items-center justify-start">
            <Avatar.Root
              className={clsx(
                'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
                'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
                'rounded-[50%]',
                'border-background border-2 border-solid',
              )}
            >
              <Avatar.Img src="/images/avatar1.jpg" />
            </Avatar.Root>

            <Avatar.Root
              className={clsx(
                'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
                'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
                'rounded-[50%]',
                'border-background border-2 border-solid',
                'ml-[-10px]',
              )}
            >
              <Avatar.Img src="/images/avatar2.png" />
            </Avatar.Root>

            <Avatar.Root
              className={clsx(
                'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
                'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
                'rounded-[50%]',
                'border-background border-2 border-solid',
                'ml-[-10px]',
              )}
            >
              C
            </Avatar.Root>

            <Avatar.Root
              className={clsx(
                'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
                'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
                'rounded-[50%]',
                'border-background border-2 border-solid',
                'ml-[-10px]',
              )}
            >
              D
            </Avatar.Root>

            <Avatar.Root
              className={clsx(
                'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
                'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
                'rounded-[50%]',
                'border-background border-2 border-solid',
                'ml-[-10px]',
              )}
            >
              E
            </Avatar.Root>
          </Avatar.GroupContent>

          <Avatar.Extra
            className={clsx(
              'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
              'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
              'rounded-[50%]',
              'border-background border-2 border-solid',
              'ml-[-10px]',
            )}
          />
        </Avatar.Group>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Group className="flex flex-row items-center justify-start" max={2}>
          <Avatar.GroupContent className="flex flex-row items-center justify-start">
            <Avatar.Root
              className={clsx(
                'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
                'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
                'rounded-[2px]',
                'border-background border-2 border-solid',
              )}
            >
              <Avatar.Img src="/images/avatar1.jpg" />
            </Avatar.Root>

            <Avatar.Root
              className={clsx(
                'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
                'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
                'rounded-[2px]',
                'border-background border-2 border-solid',
                'ml-[-10px]',
              )}
            >
              <Avatar.Img src="/images/avatar2.png" />
            </Avatar.Root>

            <Avatar.Root
              className={clsx(
                'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
                'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
                'rounded-[2px]',
                'border-background border-2 border-solid',
                'ml-[-10px]',
              )}
            >
              <UserIcon width="75%" height="75%" />
            </Avatar.Root>
          </Avatar.GroupContent>

          <Avatar.Extra
            className={clsx(
              'flex h-[40px] w-[40px] items-center justify-center overflow-hidden',
              'bg-avatar-bg text-avatar-text select-none text-[1.25rem]',
              'rounded-[2px]',
              'border-background border-2 border-solid',
              'ml-[-10px]',
            )}
          />
        </Avatar.Group>
      </div>
    </div>
  );
}
