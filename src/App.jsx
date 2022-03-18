import { exec, init } from 'pell'
import { useEffect, useRef, useState } from 'react';

function App() {
  const editorRef = useRef();
  const [editor, setEditor] = useState(null);
  const [output, setOutput] = useState('');

  const initEditor = () => {
    const newEditor = init({
      onChange: (html) => { setOutput(html); } ,
      element: editorRef.current,
      defaultParagraphSeparator: 'p',
      styleWithCSS: true,
    });
    setEditor(newEditor);
  }

  useEffect(() => {
    initEditor();
  }, []);

  return (
    <>
      <div ref={editorRef}></div>
      <div>
        HTML output:
        <div style={{ whiteSpace: 'pre' }}>{output}</div>
      </div>
    </>
  );
}

export default App;
