'use client';

// import { Box, Icon, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { Tabs } from '@melio-ui/react';

import { BunIcon } from '@/shared/icons/bun-icon';
import { NpmIcon } from '@/shared/icons/npm-icon';
import { PnpmIcon } from '@/shared/icons/pnpm-icon';
import { YarnIcon } from '@/shared/icons/yarn-icon';

import CodeBlock from './CodeBlock';

type PackageManagerName = 'npm' | 'yarn' | 'pnpm' | 'bun';

type PackageManager = {
  icon: JSX.Element;
  color: string;
  name: PackageManagerName;
};

const packageManagers: PackageManager[] = [
  {
    name: 'npm',
    icon: <NpmIcon />,
    color: '#e53e3e',
  },
  {
    name: 'yarn',
    icon: <YarnIcon />,
    color: '#3182ce',
  },
  {
    name: 'pnpm',
    icon: <PnpmIcon />,
    color: '#dd6b20',
  },
  {
    name: 'bun',
    icon: <BunIcon />,
    color: '#cdbfa7',
  },
];

export function PackageManagers(props: { command: Partial<Record<PackageManagerName, string>> }) {
  const { command } = props;
  return (
    <Tabs.Root>
      <Tabs.List className="flex">
        {packageManagers.map(({ name, icon, color }) => {
          if (!command[name]) return null;
          return (
            <Tabs.Tab
              key={name}
              className="flex items-center justify-center gap-1 border border-solid border-b-0 px-3 py-1 cursor-pointer"
              style={{ color }}
            >
              {icon}
              {name}
            </Tabs.Tab>
          );
        })}
      </Tabs.List>
      {packageManagers.map(({ name }) => {
        if (!command[name]) return null;
        return (
          <Tabs.Content key={name} className="p-0 hidden data-[state=active]:block">
            <CodeBlock className="pl-3">
              <div>{command[name]}</div>
            </CodeBlock>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
}
