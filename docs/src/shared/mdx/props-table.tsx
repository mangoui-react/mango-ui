import React from 'react';

import { Table } from './table';

export type PropDef = {
  name: string;
  required?: boolean;
  default?: string | boolean;
  type?: string;
  description?: string | React.ReactNode;
};

export interface PropsTableProps {
  data: PropDef[];
}

export function PropsTable({ data }: PropsTableProps) {
  return (
    <Table.Root className="my-6">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Prop</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Default</Table.HeaderCell>
          <Table.HeaderCell className="w-1/2">Description</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map(({ name, type, required, default: defaultValue, description }, i) => (
          <Table.Row key={`${name}-${i}`}>
            <Table.NameCell>
              {name}
              {required ? '*' : null}
            </Table.NameCell>
            <Table.Cell>
              <code className="text-[0.9em] tracking-tighter">{type}</code>
            </Table.Cell>
            <Table.Cell>{defaultValue ?? '-'}</Table.Cell>
            <Table.Cell>{description}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
