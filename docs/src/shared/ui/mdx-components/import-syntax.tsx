'use client';

// import { Box, Icon, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { Tabs } from '@melio-ui/react';

import { cn } from '@/shared/utils/cn';

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
              className={cn(
                'flex items-center justify-center gap-1',
                'text-gray-400',
                'px-3 py-1 cursor-pointer',
                'border border-solid border-b-0 border-slate-700',
                'data-[state=active]:border-b-slate-200 data-[state=active]:border-b-2 data-[state=active]:text-slate-200',
              )}
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
            <CodeBlock live={false}>
              <div>{command[key]}</div>
            </CodeBlock>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
}
