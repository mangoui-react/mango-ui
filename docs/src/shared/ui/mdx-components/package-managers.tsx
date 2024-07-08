'use client';

// import { Box, Icon, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { Tabs } from '@melio-ui/react';

import { BunIcon } from '@/shared/icons/bun-icon';
import { NpmIcon } from '@/shared/icons/npm-icon';
import { PnpmIcon } from '@/shared/icons/pnpm-icon';
import { YarnIcon } from '@/shared/icons/yarn-icon';
import { cn } from '@/shared/utils/cn';

import CodeBlock from './code-block';

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
  const colorVariants = {
    npm: 'data-[state=active]:text-[#e53e3e] data-[state=active]:border-b-[#e53e3e]',
    yarn: 'data-[state=active]:text-[#3182ce] data-[state=active]:border-b-[#3182ce]',
    pnpm: 'data-[state=active]:text-[#dd6b20] data-[state=active]:border-b-[#dd6b20]',
    bun: 'data-[state=active]:text-[#cdbfa7] data-[state=active]:border-b-[#cdbfa7]',
  };

  return (
    <Tabs.Root>
      <Tabs.List className="flex">
        {packageManagers.map(({ name, icon, color }) => {
          if (!command[name]) return null;
          return (
            <Tabs.Tab
              key={name}
              className={cn(
                'flex items-center justify-center gap-1',
                'text-gray-400',
                'px-3 py-1 cursor-pointer',
                'border border-solid border-b-0 border-slate-700',
                'data-[state=active]:border-b-2',
                `${colorVariants[name]}`,
              )}
              // style={{ color }}
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
            <CodeBlock live={false}>
              <div>{command[name]}</div>
            </CodeBlock>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
}
