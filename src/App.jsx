import { useEffect, useRef, useState } from 'react';
import Trix from 'trix';
import 'trix/dist/trix.css';

function App() {
  const editorRef = useRef();

  useEffect(() => {
    const editor = editorRef.current;
    // do thing ....
  }, [])

  return (
    <>
      <input type="hidden" id="trix" />
      <trix-editor ref={editorRef} input="trix"></trix-editor>
      <div>
        <span>Result :</span>
        <div>
          {message}
        </div>
      </div>
    </>
  );
}

export default App;
