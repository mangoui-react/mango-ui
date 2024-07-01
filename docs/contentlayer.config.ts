import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';

import { rehypeMdxCodeMeta } from './src/shared/utils/rehype-code-meta';
import { rehypeDemoCodeBlock } from './src/shared/utils/rehype-demo-code-block';

// contentlayer 예제
export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}));

// 코드 문서화
const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
};

const Overview = defineDocumentType(() => ({
  name: 'Overview',
  filePathPattern: 'overview/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string' },
    package: { type: 'string' },
    description: { type: 'string' },
    id: { type: 'string' },
    scope: {
      type: 'enum',
      options: ['usage', 'theming', 'props'],
      default: 'usage',
    },
    version: { type: 'string' },
    author: { type: 'string' },
    video: { type: 'string' },
    category: { type: 'string' },
    aria: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: 'json',
      resolve: (doc) => ({
        title: doc.title,
        package: doc.package,
        description: doc.description,
        version: doc.version,
        slug: `/${doc._raw.flattenedPath}`,
        // editUrl: `${siteConfig.repo.editUrl}/${doc._id}`,
        // headings: getTableOfContents(doc.body.raw),
      }),
    },
  },
}));

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: 'components/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string' },
    package: { type: 'string' },
    description: { type: 'string' },
    id: { type: 'string' },
    scope: {
      type: 'enum',
      options: ['usage', 'theming', 'props'],
      default: 'usage',
    },
    version: { type: 'string' },
    author: { type: 'string' },
    video: { type: 'string' },
    category: { type: 'string' },
    aria: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: 'json',
      resolve: (doc) => ({
        title: doc.title,
        package: doc.package,
        description: doc.description,
        version: doc.version,
        slug: `/${doc._raw.flattenedPath}`,
        // editUrl: `${siteConfig.repo.editUrl}/${doc._id}`,
        // headings: getTableOfContents(doc.body.raw),
      }),
    },
  },
}));

export default makeSource({
  contentDirPath: 'contents',
  documentTypes: [Post, Overview, Doc],
  mdx: {
    rehypePlugins: [rehypeDemoCodeBlock, rehypeMdxCodeMeta],
    // remarkPlugins: [remarkSlug, remarkGfm, remarkEmoji],
  },
});
