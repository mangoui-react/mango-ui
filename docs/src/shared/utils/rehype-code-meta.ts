import { visit } from 'unist-util-visit';

export function rehypeMdxCodeMeta() {
  return (tree: any) => {
    visit(tree, 'element', (node: any) => {
      if (node.tagName !== 'code' || !node.data) return;
      node.properties = node.properties || {};
      node.data.meta.split(' ').forEach((t: any) => {
        const [key, value] = t.split('=');
        node.properties[key] = value;
      });
    });
  };
}
