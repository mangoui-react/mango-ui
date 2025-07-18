import React from 'react';

import { TabsContent, TabsList, TabsRoot, TabsTab } from '@mangoui/tabs';

import './styles.css';

export default function TabsDemo() {
  return (
    <TabsRoot className="tabs-root">
      <TabsList className="tabs-list">
        <TabsTab className="tabs-tab">Tab1</TabsTab>
        <TabsTab className="tabs-tab">Tab2</TabsTab>
        <TabsTab className="tabs-tab">
          <UserIcon style={{ marginRight: 5 }} />
          Tab3
        </TabsTab>
      </TabsList>
      <TabsContent className="tabs-content">
        <p>TabContent1</p>
      </TabsContent>
      <TabsContent className="tabs-content">
        <p>TabContent2</p>
      </TabsContent>
      <TabsContent className="tabs-content">
        <p>TabContent3</p>
      </TabsContent>
    </TabsRoot>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>): React.JSX.Element {
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
