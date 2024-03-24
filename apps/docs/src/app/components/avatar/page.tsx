'use client';

// TODO: 'use client' 이거 없애고 @mango/ui 에서 해결하는 방법으로 수정해야 함
// 다른 컴포넌트도(Radix, mui 등...) 'use client' 사용해야 가능(테스트 해봄 - 혹시 몰르니 또 해보자)
import React from 'react';

import clsx from 'clsx';
import { Avatar } from 'mango-headlessui';

import BellIcon from '@/icons/BellIcon';
import UserIcon from '@/icons/UserIcon';

export default function AvatarPage(): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-start gap-1">
        <Avatar.Root
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <UserIcon />
        </Avatar.Root>
        <Avatar.Root
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <UserIcon width="75%" height="75%" />
        </Avatar.Root>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Root
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          U
        </Avatar.Root>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Root
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <Avatar.Img src="/images/avatar1.jpg" />
        </Avatar.Root>

        <Avatar.Root
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <Avatar.Img className="w-full h-full text-transparent" src="/images/avatar1.jpg" />
        </Avatar.Root>

        <Avatar.Root
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <Avatar.Img className="w-full h-full text-transparent" src="/images/avatar2.png" />
        </Avatar.Root>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Root
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <BellIcon />
        </Avatar.Root>
        <Avatar.Root
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <BellIcon fontSize="1.5rem" />
        </Avatar.Root>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Root
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <UserIcon />
        </Avatar.Root>
        <Avatar.Root
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[2px]',
          )}
        >
          <UserIcon width="75%" height="75%" />
        </Avatar.Root>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Root
          className={clsx(
            'flex w-[30px] h-[30px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <Avatar.Img src="/images/avatar2.png" />
        </Avatar.Root>
        <Avatar.Root
          className={clsx(
            'flex w-[50px] h-[50px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <UserIcon width="75%" height="75%" />
        </Avatar.Root>

        <Avatar.Root
          className={clsx(
            'flex w-[70px] h-[70px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <Avatar.Img src="/images/avatar1.jpg" />
        </Avatar.Root>

        <Avatar.Root
          className={clsx(
            'flex w-[100px] h-[100px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <UserIcon width="75%" height="75%" />
        </Avatar.Root>
      </div>

      <div>그룹</div>
      <div className="flex items-center justify-start gap-1">
        <Avatar.Group className="flex flex-row justify-start items-center">
          <Avatar.Root
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[50%]',
              'border-solid border-2 border-background',
            )}
          >
            <UserIcon width="75%" height="75%" />
          </Avatar.Root>
          <Avatar.Root
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[50%]',
              'border-solid border-2 border-background',
              'ml-[-10px]',
            )}
          >
            <UserIcon width="75%" height="75%" />
          </Avatar.Root>
          <Avatar.Root
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[50%]',
              'border-solid border-2 border-background',
              'ml-[-10px]',
            )}
          >
            <UserIcon width="75%" height="75%" />
          </Avatar.Root>
        </Avatar.Group>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Group>
          <Avatar.GroupContent className="flex flex-row justify-start items-center">
            <Avatar.Root
              className={clsx(
                'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
                'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
                'rounded-[50%]',
                'border-solid border-2 border-background',
              )}
            >
              <BellIcon fontSize="1.5rem" />
            </Avatar.Root>
            <Avatar.Root
              className={clsx(
                'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
                'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
                'rounded-[50%]',
                'border-solid border-2 border-background',
                'ml-[-15px]',
              )}
            >
              B
            </Avatar.Root>
            <Avatar.Root
              className={clsx(
                'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
                'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
                'rounded-[50%]',
                'border-solid border-2 border-background',
                'ml-[-15px]',
              )}
            >
              <UserIcon width="75%" height="75%" />
            </Avatar.Root>
          </Avatar.GroupContent>
        </Avatar.Group>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Group className="flex flex-row justify-start items-center" max={2}>
          <Avatar.GroupContent className="flex flex-row justify-start items-center">
            <Avatar.Root
              className={clsx(
                'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
                'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
                'rounded-[50%]',
                'border-solid border-2 border-background',
              )}
            >
              <Avatar.Img src="/images/avatar1.jpg" />
            </Avatar.Root>

            <Avatar.Root
              className={clsx(
                'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
                'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
                'rounded-[50%]',
                'border-solid border-2 border-background',
                'ml-[-10px]',
              )}
            >
              <Avatar.Img src="/images/avatar2.png" />
            </Avatar.Root>

            <Avatar.Root
              className={clsx(
                'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
                'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
                'rounded-[50%]',
                'border-solid border-2 border-background',
                'ml-[-10px]',
              )}
            >
              C
            </Avatar.Root>

            <Avatar.Root
              className={clsx(
                'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
                'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
                'rounded-[50%]',
                'border-solid border-2 border-background',
                'ml-[-10px]',
              )}
            >
              D
            </Avatar.Root>

            <Avatar.Root
              className={clsx(
                'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
                'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
                'rounded-[50%]',
                'border-solid border-2 border-background',
                'ml-[-10px]',
              )}
            >
              E
            </Avatar.Root>
          </Avatar.GroupContent>

          <Avatar.Extra
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[50%]',
              'border-solid border-2 border-background',
              'ml-[-10px]',
            )}
          />
        </Avatar.Group>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Group className="flex flex-row justify-start items-center" max={2}>
          <Avatar.GroupContent className="flex flex-row justify-start items-center">
            <Avatar.Root
              className={clsx(
                'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
                'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
                'rounded-[2px]',
                'border-solid border-2 border-background',
              )}
            >
              <Avatar.Img src="/images/avatar1.jpg" />
            </Avatar.Root>

            <Avatar.Root
              className={clsx(
                'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
                'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
                'rounded-[2px]',
                'border-solid border-2 border-background',
                'ml-[-10px]',
              )}
            >
              <Avatar.Img src="/images/avatar2.png" />
            </Avatar.Root>

            <Avatar.Root
              className={clsx(
                'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
                'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
                'rounded-[2px]',
                'border-solid border-2 border-background',
                'ml-[-10px]',
              )}
            >
              <UserIcon width="75%" height="75%" />
            </Avatar.Root>
          </Avatar.GroupContent>

          <Avatar.Extra
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[2px]',
              'border-solid border-2 border-background',
              'ml-[-10px]',
            )}
          />
        </Avatar.Group>
      </div>
    </div>
  );
}
