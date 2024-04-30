import React from 'react';

import Tabs from '.';
import * as styles from './Tabs.stories.css';

export default { title: 'Components/Tabs' };

export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Tabs.Root className={styles.root}>
        <Tabs.List className={styles.list}>
          <Tabs.Tab className={styles.tab}>Tab1</Tabs.Tab>
          <Tabs.Tab className={styles.tab} disabled>
            Tab2
          </Tabs.Tab>
          <Tabs.Tab className={styles.tab}>
            <UserIcon style={{ marginRight: 5 }} />
            Tab3
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Content className={styles.content}>
          <p>TabContent1</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent2</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent3</p>
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
}

export function OnValueChange(): JSX.Element {
  const [value, setValue] = React.useState<string>('tab1');

  const onValueChange = (value: string): void => {
    setValue(value);
  };

  return (
    <>
      <h1>defaultValue</h1>
      <Tabs.Root className={styles.root} defaultValue="tab2">
        <Tabs.List className={styles.list}>
          <Tabs.Tab className={styles.tab} value="tab1">
            Tab1
          </Tabs.Tab>
          <Tabs.Tab className={styles.tab} value="tab2">
            Tab2
          </Tabs.Tab>
          <Tabs.Tab className={styles.tab} value="tab3">
            <UserIcon style={{ marginRight: 5 }} />
            Tab3
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Content className={styles.content} value="tab1">
          <p>TabContent1</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content} value="tab2">
          <p>TabContent2</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content} value="tab3">
          <p>TabContent3</p>
        </Tabs.Content>
      </Tabs.Root>

      <h1>value</h1>
      <Tabs.Root className={styles.root} value={value} onValueChange={onValueChange}>
        <Tabs.List className={styles.list}>
          <Tabs.Tab className={styles.tab} value="tab1">
            Tab1
          </Tabs.Tab>
          <Tabs.Tab className={styles.tab} value="tab2">
            Tab2
          </Tabs.Tab>
          <Tabs.Tab className={styles.tab} value="tab3">
            <UserIcon style={{ marginRight: 5 }} />
            Tab3
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Content className={styles.content} value="tab1">
          <p>TabContent1</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content} value="tab2">
          <p>TabContent2</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content} value="tab3">
          <p>TabContent3</p>
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
}

export function Orientation(): JSX.Element {
  return (
    <>
      <h1>Orientation</h1>
      <Tabs.Root className={styles.root} orientation="vertical">
        <Tabs.List className={styles.list}>
          <Tabs.Tab className={styles.tab}>Tab1</Tabs.Tab>
          <Tabs.Tab className={styles.tab}>Tab2</Tabs.Tab>
          <Tabs.Tab className={styles.tab} style={{ display: 'flex', alignItems: 'center' }}>
            <UserIcon width="2em" height="2em" />
            Tab3
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Content className={styles.content}>
          <p>TabContent1</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent2</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent3</p>
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
}

export function RenderMode(): JSX.Element {
  return (
    <>
      <h1>renderMode: selecting (선택한 tab만 랜더링: default)</h1>
      <Tabs.Root className={styles.root} renderMode="selecting">
        <Tabs.List className={styles.list}>
          <Tabs.Tab className={styles.tab}>Tab1</Tabs.Tab>
          <Tabs.Tab className={styles.tab}>Tab2</Tabs.Tab>
          <Tabs.Tab className={styles.tab}>Tab3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Content className={styles.content}>
          <p>TabContent1</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent2</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent3</p>
        </Tabs.Content>
      </Tabs.Root>

      <h1>renderMode: selected (선택되었던 tab 랜더링)</h1>
      <Tabs.Root className={styles.root} renderMode="selected">
        <Tabs.List className={styles.list}>
          <Tabs.Tab className={styles.tab}>Tab1</Tabs.Tab>
          <Tabs.Tab className={styles.tab}>Tab2</Tabs.Tab>
          <Tabs.Tab className={styles.tab}>Tab3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Content className={styles.content}>
          <p>TabContent1</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent2</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent3</p>
        </Tabs.Content>
      </Tabs.Root>

      <h1>renderMode: force (모두 랜더링)</h1>
      <Tabs.Root className={styles.root} renderMode="force">
        <Tabs.List className={styles.list}>
          <Tabs.Tab className={styles.tab}>Tab1</Tabs.Tab>
          <Tabs.Tab className={styles.tab}>Tab2</Tabs.Tab>
          <Tabs.Tab className={styles.tab}>Tab3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Content className={styles.content}>
          <p>TabContent1</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent2</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent3</p>
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
}

export function AddRemove(): JSX.Element {
  const [tabs, setTabs] = React.useState<
    Array<{ value: string; tab: string; panel: React.ReactNode }>
  >([]);
  const [value, setValue] = React.useState<string | undefined>('');
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleValueChange = (value: string): void => {
    setValue(value);
  };

  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleTabAdd = (): void => {
    const newTabs = [...tabs];
    const newValue = `value_${Math.floor(Math.random() * 1000)}`;
    newTabs.push({
      value: newValue,
      tab: `New Tab(${newTabs.length})`,
      panel: <p>{`tab value: ${newValue}`}</p>,
    });
    setTabs(newTabs);
    setValue(newValue);
  };

  const handleTabClose = (value: string): void => {
    let index = 0;
    tabs.forEach((item, i) => {
      if (item.value === value) {
        index = i;
      }
    });

    const newTabs = tabs.filter((item) => item.value !== value);
    setTabs(newTabs);

    if (newTabs.length > 0) {
      if (newTabs.length - 1 < index) {
        index = newTabs.length - 1;
      }
      const _value = newTabs[index].value;
      setValue(_value);
    }
  };

  const handleTabRemove = (): void => {
    handleTabClose(inputValue);
  };

  return (
    <>
      <h1>AddRemove</h1>
      <div style={{ marginBottom: 5 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
          <button type="button" onClick={handleTabAdd}>
            ADD
          </button>
          <button type="button" onClick={handleTabRemove}>
            REMOVE
          </button>
          <input
            placeholder="삭제할 value를 입력하세요."
            value={inputValue}
            onChange={handleInputValueChange}
            style={{
              width: '100%',
              minWidth: 0,
              position: 'relative',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--component-bg)',
              color: 'inherit',
              padding: '5px 11px',
              lineHeight: 1,
              fontSize: '1rem',
            }}
          />
        </div>
      </div>

      <Tabs.Root className={styles.root} value={value} onValueChange={handleValueChange}>
        <Tabs.List className={styles.list}>
          {tabs.map((item) => (
            <Tabs.Tab key={item.value} value={item.value} className={styles.tab}>
              {item.tab}
              <span
                onClick={(event) => {
                  event.stopPropagation();
                  handleTabClose(item.value);
                }}
              >
                <CloseIcon />
              </span>
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {tabs.map((item) => (
          <Tabs.Content key={item.value} value={item.value} className={styles.content}>
            {item.panel}
          </Tabs.Content>
        ))}
      </Tabs.Root>
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

function CloseIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        fill="currentColor"
      />
    </svg>
  );
}
