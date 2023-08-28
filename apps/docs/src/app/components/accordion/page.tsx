import React from 'react';

// TODO: 원인은 tsconfig.json 설정을 때문이다. - turborepo 가 그래서 tsconfig 를 라이브러리 형태로 제공한 것이구나!!!
import { Accordion } from '@mango/ui';

export default function AccordionPage(): JSX.Element {
  return (
    <div>
      AccordionPage
      <Accordion>dd</Accordion>
    </div>
  );
}
