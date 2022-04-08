import { BaseText, Descendant, Text } from 'slate';

type Leaf = BaseText & {
  bold?: boolean,
  italic?: boolean,
  underline?: boolean,
  strikethrough?: boolean,
  code?: boolean,
  color?: string,
  backgroundColor?: string
};

const getstyleFormat = (element: Descendant & any) => {
  const isStyle = element.indent !== undefined || element.align !== undefined;
  if (!isStyle) return '';
  return `style="${element.indent ? `margin-left: ${24 * element.indent}px;` : ''}${element.align ? `text-align: ${element.align};` : ''}"`;
}

const getNode = ({ element, children }: { element: Descendant & any, children: string }) => {
  switch (element.type) {
    case 'blockquote':
      return `<blockquote ${getstyleFormat(element)}>${children}</blockquote>`;
    case 'p':
      return `<p ${getstyleFormat(element)}>${children}</p>`;
    case 'a':
      return `<a ${getstyleFormat(element)} href="${escapeHtml(element.url)}">${children}</a>`;
    case 'h1':
      return `<h1 ${getstyleFormat(element)}>${children}</h1>`;
    case 'h2':
      return `<h2 ${getstyleFormat(element)}>${children}</h2>`;
    case 'h3':
      return `<h3 ${getstyleFormat(element)}>${children}</h3>`;
    case 'hr':
      return `<hr>`;
    case 'ol':
      return `<ol ${getstyleFormat(element)}>${children}</ol>`;
    case 'ul':
      return `<ul ${getstyleFormat(element)}>${children}</ul>`;
    case 'li':
      return `<li ${getstyleFormat(element)}>${children}</li>`;
    case 'img':
      const caption = element.caption && element.caption[0] && element.caption[0].text;
      return `<figure>
      <img width="${element.width ? element.width : '100%'}" src="${escapeHtml(element.url)}">
      ${caption ? `<figcaption>${caption}</figcaption>` : ''}
      </figure>
      `;
    default:
      return children;
  }
};

const getLeaf = ({ leaf, children }: { leaf: Leaf, children: string }) => {
  let newChildren = children;

  if (leaf.bold) {
    newChildren = `<strong>${newChildren}</strong>`;
  }
  if (leaf.italic) {
    newChildren = `<i>${newChildren}</i>`;
  }
  if (leaf.underline) {
    newChildren = `<u>${newChildren}</u>`;
  }
  if (leaf.strikethrough) {
    newChildren = `<del>${newChildren}</del>`;
  }
  if (leaf.strikethrough) {
    newChildren = `<del>${newChildren}</del>`;
  }
  if (leaf.code) {
    newChildren = `<code>${newChildren}</code>`;
  }
  if (leaf.color) {
    newChildren = `<span style="color: ${leaf.color};">${newChildren}</span>`;
  }
  if (leaf.backgroundColor) {
    newChildren = `<span style="background-color: ${leaf.backgroundColor};">${newChildren}</span>`;
  }
  return newChildren;
};

const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const handleNode = (node: Descendant & any): string => {
  if (Text.isText(node)) {
    return getLeaf({ leaf: node, children: node.text });
  }
  return getNode({ element: node, children: htmlSerialize(node.children) });
}

export const htmlSerialize = (nodes: Descendant[] & any[]): string => {
  return nodes.map(handleNode).join('');
}
