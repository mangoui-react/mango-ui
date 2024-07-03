import React from 'react';

import { Table } from './table';

type AttrDef = {
  attribute: string;
  values: string;
};

export interface DataAttributesTableProps {
  data: AttrDef[];
}

export function DataAttributesTable({ data }: DataAttributesTableProps) {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Data attribute</Table.HeaderCell>
          <Table.HeaderCell>Values</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map(({ attribute, values }, i) => (
          <Table.Row key={`${attribute}-${i}`}>
            <Table.NameCell>{attribute}</Table.NameCell>
            <Table.Cell>{values}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
