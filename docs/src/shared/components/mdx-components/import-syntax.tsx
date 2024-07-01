'use client';

// import { Box, Icon, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { Tabs } from '@melio-ui/react';

import { BunIcon } from '@/shared/icons/bun-icon';
import { NpmIcon } from '@/shared/icons/npm-icon';
import { PnpmIcon } from '@/shared/icons/pnpm-icon';
import { YarnIcon } from '@/shared/icons/yarn-icon';

import CodeBlock from './code-block';

type ImportSyntaxKey = 'individual' | 'global';

type ImportSyntaxType = {
  key: ImportSyntaxKey;
  name: string;
};

const importSyntaxes: ImportSyntaxType[] = [
  {
    key: 'individual',
    name: 'Individual',
  },
  {
    key: 'global',
    name: 'Global',
  },
];

export function ImportSyntax(props: { command: Partial<Record<ImportSyntaxKey, string>> }) {
  const { command } = props;
  return (
    <Tabs.Root>
      <Tabs.List className="flex">
        {importSyntaxes.map(({ key, name }) => {
          if (!command[key]) return null;
          return (
            <Tabs.Tab
              key={key}
              className="flex items-center justify-center gap-1 border border-solid border-b-0 px-3 py-1 cursor-pointer"
            >
              {name}
            </Tabs.Tab>
          );
        })}
      </Tabs.List>
      {importSyntaxes.map(({ key }) => {
        if (!command[key]) return null;
        return (
          <Tabs.Content key={key} className="p-0 hidden data-[state=active]:block">
            <CodeBlock className="pl-3">
              <div>{command[key]}</div>
            </CodeBlock>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
}
