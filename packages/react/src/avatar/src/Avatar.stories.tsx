import React from 'react';

import { Avatar } from '.';
import * as styles from './Avatar.stories.css';

export default { title: 'Components/Avatar' };

export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Avatar.Root className={styles.root}>U</Avatar.Root>
      <Avatar.Root className={styles.root}>
        <UserIcon />
      </Avatar.Root>
    </>
  );
}

export function Img(): JSX.Element {
  return (
    <>
      <h1>이미지</h1>
      <Avatar.Root className={styles.root}>
        <Avatar.Img className={styles.img} src="/images/avatar.png" />
      </Avatar.Root>
    </>
  );
}

export function Grouping(): JSX.Element {
  return (
    <>
      <h1>그룹핑</h1>
      <Avatar.Group className={styles.group}>
        <Avatar.GroupContent className={styles.groupContent}>
          <Avatar.Root className={styles.root}>
            <UserIcon />
          </Avatar.Root>
          <Avatar.Root className={styles.root}>
            <UserIcon />
          </Avatar.Root>
          <Avatar.Root className={styles.root}>
            <UserIcon />
          </Avatar.Root>
        </Avatar.GroupContent>
        <Avatar.Extra />
      </Avatar.Group>

      <Avatar.Group className={styles.group} max={2}>
        <Avatar.GroupContent className={styles.groupContent}>
          <Avatar.Root className={styles.root}>
            <UserIcon />
          </Avatar.Root>
          <Avatar.Root className={styles.root}>
            <UserIcon />
          </Avatar.Root>
          <Avatar.Root className={styles.root}>
            <UserIcon />
          </Avatar.Root>
        </Avatar.GroupContent>
        <Avatar.Extra className={styles.root} />

        {/* <Avatar.Extra asChild>
          <Avatar.Root className={styles.root}>+1</Avatar.Root>
        </Avatar.Extra> */}
      </Avatar.Group>
    </>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}
