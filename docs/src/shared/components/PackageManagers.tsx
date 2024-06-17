'use client';

// import { Box, Icon, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { Tabs } from '@melio-ui/react';

// import CodeBlock from './mdx-components/codeblock/codeblock';
// import CodeBlock from './CodeBlock';

// import { FaYarn } from 'react-icons/fa';
// import { ImNpm } from 'react-icons/im';
// import { SiPnpm } from 'react-icons/si';
// import { BunIcon } from './icons/bun';

// type PackageManagerName = 'npm' | 'yarn' | 'pnpm' | 'bun';
type PackageManagerName = 'npm' | 'yarn' | 'pnpm';

type PackageManager = {
  // icon: JSX.Element;
  // color: string;
  name: PackageManagerName;
};

const packageManagers: PackageManager[] = [
  {
    name: 'npm',
    // icon: <Icon as={ImNpm} color="red.500" />,
    // color: 'red.500',
  },
  {
    name: 'yarn',
    // icon: <Icon as={FaYarn} fontSize="lg" color="blue.500" />,
    // color: 'blue.500',
  },
  {
    name: 'pnpm',
    // icon: <Icon as={SiPnpm} color="orange.500" />,
    // color: 'orange.500',
  },
  // {
  //   name: 'bun',
  //   // icon: <Icon as={BunIcon} />,
  //   // color: '#cdbfa7',
  // },
];

export function PackageManagers(props: { command: Partial<Record<PackageManagerName, string>> }) {
  const { command } = props;
  return (
    <Tabs.Root>
      <Tabs.List className="flex">
        {packageManagers.map(({ name /* , icon, color */ }) => {
          if (!command[name]) return null;
          return (
            <Tabs.Tab
              key={name}
              className="inline-block border border-solid border-b-0 px-3 py-1 cursor-pointer"
            >
              {/* {icon} */}
              {name}
            </Tabs.Tab>
          );
        })}
      </Tabs.List>
      {packageManagers.map(({ name }) => {
        if (!command[name]) return null;
        return (
          <Tabs.Content key={name} className="p-3 hidden data-[state=active]:block">
            {/* <CodeBlock>
              <div>{command[name]}</div>
            </CodeBlock> */}
            <pre>
              <div>{command[name]}</div>
            </pre>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
}
