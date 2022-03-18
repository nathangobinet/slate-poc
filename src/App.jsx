import { Editable, withReact, Slate } from 'slate-react';
import {
  createEditor,
  Editor,
  Text,
  Transforms,
} from 'slate';
import { withHistory } from 'slate-history';
import { useCallback, useMemo, useState } from 'react';

const baseContent = [
  {
    type: 'title',
    children: [{ text: 'Ma campagne ...' }],
  }, {
    type: 'paragraph',
    children: [{ text: 'Message promotionnel...' }],
  },
]

function App() {
  const [value, setValue] = useState(baseContent);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const editorStyle = {
    border: '1px solid black',
    padding: '10px',
    height: '500px',
    overflowY: 'auto'
  };

  const toggleBlock = (blockType) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === blockType,
    });

    Transforms.setNodes(editor,
      { type: match ? 'default' : blockType },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  };

  const applyTransform = (transformType) => {
    Transforms.setNodes(
      editor,
      { [transformType]: true },
      { match: n => Text.isText(n), split: true }
    )
  };

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'title':
        return <TitleElement {...props} />;
      case 'code':
        return <CodeElement {...props} />;
      case 'paragraph':
        return <ParagraphElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />
  }, []);

  const serialize = () => {
    const html = serializeNode(editor);
    console.log(html);
  };

  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <button onClick={() => toggleBlock('title')}>title</button>
      <button onClick={() => toggleBlock('code')}>code</button>
      <button onClick={() => toggleBlock('paragraph')}>paragraph</button>
      <button onClick={() => applyTransform('bold')}>bold</button>
      <button onClick={() => applyTransform('italic')}>italic</button>
      <button onClick={() => serialize()}>gethtml</button>
      <Editable
        renderLeaf={renderLeaf}
        renderElement={renderElement}
        style={editorStyle}
        placeholder="Enter some plain text..."
      />
    </Slate>
  )
}

function Leaf({ attributes, leaf, children }) {
  return (
    <span {...attributes}
      style={{
        fontWeight: leaf.bold ? 'bold' : 'normal',
        fontStyle: leaf.italic ? 'italic' : 'normal',
      }}
    >
      {children}
    </span>
  )
}

function TitleElement({ attributes, children }) {
  return (<h3 {...attributes}>{children}</h3>);
}

function CodeElement({ attributes, children }) {
  return (<pre><code {...attributes}>{children}</code></pre>);
}

function ParagraphElement({ attributes, children }) {
  return (<p {...attributes}>{children}</p>);
}

function DefaultElement({ children }) {
  return children;
}

function serializeNode(node) {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text);
    if (node.bold) {
      string = `<strong>${string}</strong>`
    }
    if (node.italic) {
      string = `<em>${string}</em>`
    }
    return string
  }

  const children = node.children.map((n) => serializeNode(n)).join('');

  switch (node.type) {
    case 'title':
      return `<h3>${children}</h3>`
    case 'code':
      return `<pre><code>${children}</code></pre>`
    case 'paragraph':
      return `<p>${children}</p>`
    default:
      return children
  }
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default App;
