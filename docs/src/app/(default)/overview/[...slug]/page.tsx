import { allOverviews } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { MDXComponents } from '@/shared/mdx/mdx-components';

// next15 업데이트 시 아래 처럼 해야 하는데 next-contentlayer 이 아직 next15 지원을 안함. 
// next-contentlayer2 사용이 해결인데 이건 공식은 아님.
// export default function DocPage(props: { params: Promise<{ slug: string }> }) {
// const params = React.use(props.params);
export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = allOverviews.find((doc) => {
    // console.log('=========== overview doc._raw', doc._raw);
    return doc._raw.flattenedPath === `overview/${params.slug}`;
  });
  if (!doc) throw new Error(`Post not found for slug: ${params.slug}`);

  // console.log('doc', doc);
  const MDXContent = useMDXComponent(doc.body.code);

  // TODO: 문서페이지 공통 레이아웃 컴포넌트 있으면 좋을 듯...
  // 레이아웃 컴포넌트 에서 title 및 metadata 처리
  // chakra-ui-docs: pages/docs/components/[...slug].tsx 참고
  // layouts/component.tsx 참고
  return (
    <div>
      <h1 style={{ marginTop: '2rem', marginBottom: '0.25rem', fontSize: '1.875rem' }}>
        {doc.title}
      </h1>
      <MDXContent components={MDXComponents} />
    </div>
  );
}
