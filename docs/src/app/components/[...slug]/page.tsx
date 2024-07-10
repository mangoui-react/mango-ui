import { allDocs } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { MDXComponents } from '@/shared/mdx/mdx-components';
import PageNavigation from '@/shared/ui/page-navigation';
import SecondaryNav from '@/shared/ui/secondary-nav';

export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = allDocs.find((doc) => {
    // console.log('=========== doc._raw', doc._raw);
    return doc._raw.flattenedPath === `components/${params.slug}`;
  });
  if (!doc) throw new Error(`Post not found for slug: ${params.slug}`);

  // console.log('doc', doc);
  const MDXContent = useMDXComponent(doc.body.code);

  // TODO: 문서페이지 공통 레이아웃 컴포넌트 있으면 좋을 듯...
  // 레이아웃 컴포넌트 에서 title 및 metadata 처리
  // chakra-ui-docs: pages/docs/components/[...slug].tsx 참고
  // layouts/component.tsx 참고
  return (
    <div className="flex xl:space-x-12">
      <div className="min-w-0">
        {/* mdx 에서의 메타정보를 어떻게 이용할지는 좀 더 고민해 보자 */}
        {/* <h1 style={{ marginTop: '2rem', marginBottom: '0.25rem', fontSize: '1.875rem' }}>
        {doc.title}
      </h1> */}
        <MDXContent components={MDXComponents} />
        <PageNavigation
          prevArticle={[doc.prevTitle, doc.prevSlug]}
          nextArticle={[doc.nextTitle, doc.nextSlug]}
        />
      </div>
      <SecondaryNav />
    </div>
  );
}
