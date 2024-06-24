import React from 'react';

import { Badge } from '.';
import * as styles from './badge.stories.css';

export default { title: 'Components/Badge' };

export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, paddingBottom: 20 }}>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content}>{2}</Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content}>text</Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content} />
          <UserIcon />
        </Badge.Root>
      </div>
      <Badge.Root className={styles.root}>
        <Badge.Content className={styles.content}>longTextBadge</Badge.Content>
        <UserIcon />
      </Badge.Root>
    </>
  );
}

export function Max(): JSX.Element {
  return (
    <>
      <h1>Max 값 설정</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <Badge.Root className={styles.root} max={99}>
          <Badge.Content className={styles.content}>{1}</Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root} max={99}>
          <Badge.Content className={styles.content}>{100}</Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root} max={999}>
          <Badge.Content className={styles.content}>{1000}</Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root} max={99999}>
          <Badge.Content className={styles.content}>{100000}</Badge.Content>
          <UserIcon />
        </Badge.Root>
      </div>
    </>
  );
}

export function Size(): JSX.Element {
  return (
    <>
      <h1>Size</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <Badge.Root className={styles.root}>
          <Badge.Content
            className={styles.content}
            style={{
              minWidth: 10,
              height: 10,
              fontSize: 'calc(7px)',
              borderRadius: 'calc(5px)',
              lineHeight: '10px',
            }}
          >
            small
          </Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content}>medium</Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content
            className={styles.content}
            style={{
              minWidth: 20,
              height: 20,
              fontSize: 'calc(20px - 3px)',
              borderRadius: 'calc(20px / 2)',
              lineHeight: '20px',
            }}
          >
            large
          </Badge.Content>
          <UserIcon />
        </Badge.Root>
      </div>
    </>
  );
}

export function Color(): JSX.Element {
  return (
    <>
      <h1>Color</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
        <Badge.Root className={styles.root}>
          <Badge.Content
            className={styles.content}
            style={{ backgroundColor: 'green', color: 'white' }}
          >
            green
          </Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content
            className={styles.content}
            style={{ backgroundColor: '#ffff00', color: 'black' }}
          >
            #ffff00
          </Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content
            className={styles.content}
            style={{ backgroundColor: '#000000', color: 'white', border: '.0625rem solid white' }}
          >
            #000000
          </Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content
            className={styles.content}
            style={{ backgroundColor: '#ddbbbb', color: 'white' }}
          >
            #ddbbbb
          </Badge.Content>
          <UserIcon />
        </Badge.Root>
      </div>
    </>
  );
}

export function Placement(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, paddingBottom: 20 }}>
        <div style={{ display: 'flex', gap: 25, marginLeft: 25 }}>
          <Badge.Root className={styles.root} placement="top-left">
            <Badge.Content className={styles.content}>top-left</Badge.Content>
            <UserIcon />
          </Badge.Root>
          <Badge.Root className={styles.root} placement="top">
            <Badge.Content className={styles.content}>top</Badge.Content>
            <UserIcon />
          </Badge.Root>
          <Badge.Root className={styles.root} placement="top-right">
            <Badge.Content className={styles.content}>top-right</Badge.Content>
            <UserIcon />
          </Badge.Root>
        </div>

        <div style={{ display: 'flex', gap: 25, marginLeft: 25 }}>
          <Badge.Root className={styles.root} placement="bottom-left">
            <Badge.Content className={styles.content}>bottom-left</Badge.Content>
            <UserIcon />
          </Badge.Root>
          <Badge.Root className={styles.root} placement="bottom">
            <Badge.Content className={styles.content}>bottom</Badge.Content>
            <UserIcon />
          </Badge.Root>
          <Badge.Root className={styles.root} placement="bottom-right">
            <Badge.Content className={styles.content}>bottom-right</Badge.Content>
            <UserIcon />
          </Badge.Root>
        </div>
      </div>
    </>
  );
}

export function BadgeOnly(): JSX.Element {
  return (
    <>
      <h1>BadgeOnly</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, paddingBottom: 20 }}>
        <Badge.Root className={styles.root}>
          <Badge.Content
            className={styles.content}
            style={{
              minWidth: 10,
              height: 10,
              fontSize: 'calc(7px)',
              borderRadius: 'calc(5px)',
              lineHeight: '10px',
            }}
          />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content} style={{ backgroundColor: 'orange' }} />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content
            className={styles.content}
            style={{
              minWidth: 20,
              height: 20,
              fontSize: 'calc(20px - 3px)',
              borderRadius: 'calc(20px / 2)',
              lineHeight: '20px',
              backgroundColor: '#ddbbbb',
            }}
          />
        </Badge.Root>
      </div>
    </>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}
