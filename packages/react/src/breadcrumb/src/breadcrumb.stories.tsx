import React from 'react';

import { Breadcrumb } from '.';
import * as styles from './breadcrumb.stories.css';

export default { title: 'Components/Breadcrumb' };

export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>

      <Breadcrumb.Root>
        <Breadcrumb.List className={styles.list}>
          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/">
              Home
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page">
              Page
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>Current</Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </>
  );
}

export function CustomSeparator(): JSX.Element {
  return (
    <>
      <h1>CustomSeparator</h1>

      <Breadcrumb.Root>
        <Breadcrumb.List className={styles.list}>
          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/">
              Home
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator}>{'>'}</Breadcrumb.Separator>

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page">
              Page
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator}>{'>'}</Breadcrumb.Separator>

          <Breadcrumb.Item className={styles.item}>Current</Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>

      <Breadcrumb.Root>
        <Breadcrumb.List className={styles.list}>
          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/">
              Home
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator}>-</Breadcrumb.Separator>

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page">
              Page
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator}>-</Breadcrumb.Separator>

          <Breadcrumb.Item className={styles.item}>Current</Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </>
  );
}

export function Icon(): JSX.Element {
  return (
    <>
      <h1>Icon</h1>

      <Breadcrumb.Root>
        <Breadcrumb.List className={styles.list}>
          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/">
              <span style={{ display: 'flex', marginRight: 4 }}>
                <UserIcon />
              </span>
              Home
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page">
              <span style={{ display: 'flex', marginRight: 4 }}>
                <UserIcon />
              </span>
              Page
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>
            <span style={{ display: 'flex', marginRight: 4 }}>
              <UserIcon />
            </span>
            Current
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </>
  );
}

export function Collapsed(): JSX.Element {
  return (
    <>
      <h1>Collapsed</h1>

      <Breadcrumb.Root>
        <Breadcrumb.List
          className={styles.list}
          maxItems={5}
          collapse={<Breadcrumb.Collapse className={styles.collapse} />}
        >
          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/">
              Home
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page1">
              Page1
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page2">
              Page2
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page3">
              Page3
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page4">
              Page4
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>Current</Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
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
