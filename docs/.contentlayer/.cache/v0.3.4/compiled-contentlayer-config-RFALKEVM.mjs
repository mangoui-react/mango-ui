// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

// src/shared/utils/rehype-code-meta.ts
import { visit } from "unist-util-visit";
function rehypeMdxCodeMeta() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "code" || !node.data) return;
      node.properties = node.properties || {};
      node.data.meta.split(" ").forEach((t) => {
        const [key, value] = t.split("=");
        node.properties[key] = value;
      });
    });
  };
}

// src/shared/utils/rehype-demo-code-block.ts
import { existsSync, readFileSync } from "node:fs";
import { visit as visit2 } from "unist-util-visit";
function rehypeDemoCodeBlock() {
  return (tree) => {
    visit2(tree, (node) => {
      if (node.name === "DemoCodeBlock") {
        const component = getAttribute(node, "component");
        if (typeof component === "string") {
          node.children = [];
          ["index.tsx", "styles.css"].forEach((file) => {
            const filePath = `${process.cwd()}/src/shared/mdx/demos/${component}/${file}`;
            if (!existsSync(filePath)) return;
            const source = readFileSync(filePath, "utf8");
            node.children.push({
              type: "mdxJsxFlowElement",
              name: "pre",
              attributes: [
                { type: "mdxJsxAttribute", name: "title", value: file },
                { type: "mdxJsxAttribute", name: "source", value: source }
              ],
              data: { _mdxExplicitJsx: true },
              children: [
                {
                  type: "mdxJsxFlowElement",
                  name: "code",
                  attributes: [{ type: "mdxJsxAttribute", name: "source", value: source }],
                  data: { _mdxExplicitJsx: true }
                }
              ]
            });
          });
        }
      }
    });
  };
}
function getAttribute(node, name) {
  return node.attributes?.find((attribute) => attribute.name === name)?.value;
}

// contentlayer.config.ts
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true }
  },
  computedFields: {
    url: { type: "string", resolve: (post) => `/posts/${post._raw.flattenedPath}` }
  }
}));
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  }
};
var Overview = defineDocumentType(() => ({
  name: "Overview",
  filePathPattern: "overview/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string" },
    package: { type: "string" },
    description: { type: "string" },
    id: { type: "string" },
    scope: {
      type: "enum",
      options: ["usage", "theming", "props"],
      default: "usage"
    },
    version: { type: "string" },
    author: { type: "string" },
    video: { type: "string" },
    category: { type: "string" },
    aria: { type: "string" },
    prevTitle: { type: "string" },
    prevSlug: { type: "string" },
    nextTitle: { type: "string" },
    nextSlug: { type: "string" }
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: "json",
      resolve: (doc) => ({
        title: doc.title,
        package: doc.package,
        description: doc.description,
        version: doc.version,
        slug: `/${doc._raw.flattenedPath}`
        // editUrl: `${siteConfig.repo.editUrl}/${doc._id}`,
        // headings: getTableOfContents(doc.body.raw),
      })
    }
  }
}));
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "components/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string" },
    package: { type: "string" },
    description: { type: "string" },
    id: { type: "string" },
    scope: {
      type: "enum",
      options: ["usage", "theming", "props"],
      default: "usage"
    },
    version: { type: "string" },
    author: { type: "string" },
    video: { type: "string" },
    category: { type: "string" },
    aria: { type: "string" },
    prevTitle: { type: "string" },
    prevSlug: { type: "string" },
    nextTitle: { type: "string" },
    nextSlug: { type: "string" }
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: "json",
      resolve: (doc) => ({
        title: doc.title,
        package: doc.package,
        description: doc.description,
        version: doc.version,
        slug: `/${doc._raw.flattenedPath}`
        // editUrl: `${siteConfig.repo.editUrl}/${doc._id}`,
        // headings: getTableOfContents(doc.body.raw),
      })
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Overview, Doc],
  mdx: {
    rehypePlugins: [rehypeDemoCodeBlock, rehypeMdxCodeMeta]
    // remarkPlugins: [remarkSlug, remarkGfm, remarkEmoji],
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-RFALKEVM.mjs.map
