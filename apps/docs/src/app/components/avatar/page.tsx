'use client'; // TODO: 이거 없애고 @mango/ui 에서 해결하는 방법으로 수정해야 함

import React from 'react';

import clsx from 'clsx';

import { Avatar } from 'mango-headlessui';

import BellIcon from '@/icons/BellIcon';

export default function AvatarPage(): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-start gap-1">
        <Avatar
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <Avatar.Icon />
        </Avatar>
        <Avatar
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <Avatar.Icon width="75%" height="75%" />
        </Avatar>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          U
        </Avatar>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <Avatar.Img src="/images/avatar1.jpg" />
        </Avatar>

        <Avatar
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <Avatar.Img className="w-full h-full text-transparent" src="/images/avatar1.jpg" />
        </Avatar>

        <Avatar
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <Avatar.Img className="w-full h-full text-transparent" src="/images/avatar2.png" />
        </Avatar>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <BellIcon />
        </Avatar>
        <Avatar
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <BellIcon fontSize="1.5rem" />
        </Avatar>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <Avatar.Icon />
        </Avatar>
        <Avatar
          className={clsx(
            'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[2px]',
          )}
        >
          <Avatar.Icon width="75%" height="75%" />
        </Avatar>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar
          className={clsx(
            'flex w-[30px] h-[30px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <Avatar.Img src="/images/avatar2.png" />
        </Avatar>
        <Avatar
          className={clsx(
            'flex w-[50px] h-[50px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <Avatar.Icon width="75%" height="75%" />
        </Avatar>

        <Avatar
          className={clsx(
            'flex w-[70px] h-[70px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <Avatar.Img src="/images/avatar1.jpg" />
        </Avatar>

        <Avatar
          className={clsx(
            'flex w-[100px] h-[100px] overflow-hidden items-center justify-center',
            'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
            'rounded-[50%]',
          )}
        >
          <Avatar.Icon width="75%" height="75%" />
        </Avatar>
      </div>

      <div>그룹</div>
      <div className="flex items-center justify-start gap-1">
        <Avatar.Group className="flex flex-row justify-start items-center">
          <Avatar
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[50%]',
              'border-solid border-2 border-background',
            )}
          >
            <Avatar.Icon width="75%" height="75%" />
          </Avatar>
          <Avatar
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[50%]',
              'border-solid border-2 border-background',
              'ml-[-10px]',
            )}
          >
            <Avatar.Icon width="75%" height="75%" />
          </Avatar>
          <Avatar
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[50%]',
              'border-solid border-2 border-background',
              'ml-[-10px]',
            )}
          >
            <Avatar.Icon width="75%" height="75%" />
          </Avatar>
        </Avatar.Group>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Group className="flex flex-row justify-start items-center">
          <Avatar
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[50%]',
              'border-solid border-2 border-background',
            )}
          >
            <BellIcon fontSize="1.5rem" />
          </Avatar>
          <Avatar
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[50%]',
              'border-solid border-2 border-background',
              'ml-[-15px]',
            )}
          >
            B
          </Avatar>
          <Avatar
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[50%]',
              'border-solid border-2 border-background',
              'ml-[-15px]',
            )}
          >
            <Avatar.Icon width="75%" height="75%" />
          </Avatar>
        </Avatar.Group>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Group
          className="flex flex-row justify-start items-center"
          max={2}
          extraAvatar={
            <Avatar
              className={clsx(
                'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
                'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
                'rounded-[50%]',
                'border-solid border-2 border-background',
                'ml-[-10px]',
              )}
            />
          }
        >
          <Avatar
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[50%]',
              'border-solid border-2 border-background',
            )}
          >
            <Avatar.Img src="/images/avatar1.jpg" />
          </Avatar>

          <Avatar
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[50%]',
              'border-solid border-2 border-background',
              'ml-[-10px]',
            )}
          >
            <Avatar.Img src="/images/avatar2.png" />
          </Avatar>

          <Avatar
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[50%]',
              'border-solid border-2 border-background',
              'ml-[-10px]',
            )}
          >
            C
          </Avatar>

          <Avatar
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[50%]',
              'border-solid border-2 border-background',
              'ml-[-10px]',
            )}
          >
            D
          </Avatar>

          <Avatar
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[50%]',
              'border-solid border-2 border-background',
              'ml-[-10px]',
            )}
          >
            E
          </Avatar>
        </Avatar.Group>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Avatar.Group
          className="flex flex-row justify-start items-center"
          max={2}
          extraAvatar={
            <Avatar
              className={clsx(
                'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
                'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
                'rounded-[2px]',
                'border-solid border-2 border-background',
                'ml-[-10px]',
              )}
            />
          }
        >
          <Avatar
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[2px]',
              'border-solid border-2 border-background',
            )}
          >
            <Avatar.Img src="/images/avatar1.jpg" />
          </Avatar>

          <Avatar
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[2px]',
              'border-solid border-2 border-background',
              'ml-[-10px]',
            )}
          >
            <Avatar.Img src="/images/avatar2.png" />
          </Avatar>

          <Avatar
            className={clsx(
              'flex w-[40px] h-[40px] overflow-hidden items-center justify-center',
              'bg-avatar-bg text-avatar-text text-[1.25rem] select-none',
              'rounded-[2px]',
              'border-solid border-2 border-background',
              'ml-[-10px]',
            )}
          >
            <Avatar.Icon width="75%" height="75%" />
          </Avatar>
        </Avatar.Group>
      </div>
    </div>
  );
}
