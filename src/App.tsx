import { Button, Typography } from '@mui/material';
import { getPlateEditorRef } from '@udecode/plate-core';
import { useState, createRef, useEffect } from 'react';
import Editor from './Editor/Editor';
import { htmlSerialize } from './Editor/serializer';
import { Iframe, IframeForwardRef } from './Iframe';

const initialHtml = `<html><head><style>html,body{margin:0;}html{background-color:#fefefe;font-family:'Ubuntu',sans-serif;}body{margin:15px;}img{max-width:100%;display:block;margin-right:auto;margin-left:auto;}figure{margin-right:0;margin-left:0;display:block;}figcaption{margin-top:5px;text-align:center;}h1,h2,h3{font-weight:normal;}p{margin:0px;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0px;padding-right:0px;}</style></head><body><div><h1>Ma campagne</h1><p>Elle est <span style="color: rgb(255, 0, 255);">vraiment</span> très <strong>cool</strong> !</p></div></body></html>`;

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
      <Editor initialHtml={initialHtml} />
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
