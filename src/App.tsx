import { Button, Typography } from '@mui/material';
import { getPlateEditorRef } from '@udecode/plate-core';
import { useState, createRef, useEffect } from 'react';
import Editor from './Editor/Editor';
import { htmlSerialize } from './Editor/serialize';
import { Iframe, IframeForwardRef } from './Iframe';

function App() {
  const [mailContent, setMailContent] = useState('');
  const [fullHtml, setFullHtml] = useState('');
  const frameRef = createRef<IframeForwardRef>();

  const serialize = () => {
    const editor = getPlateEditorRef('mail-editor');
    const mail = htmlSerialize(editor.children);
    setMailContent(mail);
  };

  useEffect(() => {
    if (!frameRef.current) return;
    setFullHtml(frameRef.current.getFullHtml());
  }, [mailContent])

  const previewStyle = {
    display: 'flex',
    columnGap: '15px',
    alignItems: 'center',
    marginBottom: '15px'
  };

  return (
    <>
      <Editor />
      <hr style={{ margin: '25px 0' }} />
      <div style={previewStyle}>
        <Typography variant='h5'>Result</Typography>
        <Button size='small' variant='outlined' onClick={serialize}>Serialize HTML</Button>
      </div>
      <details style={{ marginBottom: '15px' }}>
        <summary>HTML code</summary>
        <textarea style={{ width: '100%', height: '300px' }} readOnly value={fullHtml} />
      </details>
      <details open>
        <summary>HTML preview</summary>
        <Iframe ref={frameRef}>
          <div dangerouslySetInnerHTML={{ __html: mailContent }} />
        </Iframe>
      </details>
    </>
  );
}

export default App;
