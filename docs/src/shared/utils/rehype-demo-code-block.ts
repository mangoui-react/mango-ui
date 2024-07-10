import { existsSync, readFileSync } from 'node:fs';
import { visit } from 'unist-util-visit';

export function rehypeDemoCodeBlock() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.name === 'DemoCodeBlock') {
        const component = getAttribute(node, 'component');

        if (typeof component === 'string') {
          node.children = [];

          ['index.tsx', 'styles.css'].forEach((file) => {
            const filePath = `${process.cwd()}/src/shared/mdx/demos/${component}/${file}`;

            if (!existsSync(filePath)) return;
            const source = readFileSync(filePath, 'utf8');
            // console.log('source ================= ', source);
            // console.log('node ================= ', node);
            // node.children.push({ source });
            node.children.push({
              type: 'mdxJsxFlowElement',
              name: 'pre',
              attributes: [
                { type: 'mdxJsxAttribute', name: 'title', value: file },
                { type: 'mdxJsxAttribute', name: 'source', value: source },
              ],
              data: { _mdxExplicitJsx: true },
              children: [
                {
                  type: 'mdxJsxFlowElement',
                  name: 'code',
                  attributes: [{ type: 'mdxJsxAttribute', name: 'source', value: source }],
                  data: { _mdxExplicitJsx: true },
                },
              ],
            });
          });
        }
      }
    });
  };
}

function getAttribute(node: any, name: string) {
  return node.attributes?.find((attribute: any) => attribute.name === name)?.value;
}
