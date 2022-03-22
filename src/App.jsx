import { useEffect, useRef, useState } from 'react';
import Trix from 'trix';
import 'trix/dist/trix.css';

import './App.css'

Trix.config.attachments.preview.caption.name = false;
Trix.config.attachments.preview.caption.size = false;

const defaultMail = `<div><figure data-trix-attachment="{&quot;contentType&quot;:&quot;image&quot;,&quot;height&quot;:280,&quot;url&quot;:&quot;https://www.restaurant-lepicurien.com/wp-content/uploads/2018/07/banniere-restaurant-epicurien-test.jpg&quot;,&quot;width&quot;:1660}" data-trix-content-type="image" class="attachment attachment--preview"><img src="https://www.restaurant-lepicurien.com/wp-content/uploads/2018/07/banniere-restaurant-epicurien-test.jpg" width="1660" height="280"><figcaption class="attachment__caption"></figcaption></figure></div><h1>Promotion exceptionelle !&nbsp;</h1><div>Ce soir venez découvrir notre nouveau menu pour<strong> 20% moins cher !<br></strong>Ne manquez surtout pas à cette occasion :</div><ul><li>Le délicieux magret de canard sur son lit de pomme de terre&nbsp;</li><li>La côte de boeuf de <strong>400g&nbsp;</strong>servis avec ses haricots à la poêles</li><li>Et encore plein d'autre plats gourmands ....</li></ul><div>Alors n'hésite pas et vient découvrir ces nouveaux plats seuls ou en famille !</div><div><br></div><div>----------------------------------------<br><em>Jean Christophe Moranci</em>,<br>Directeur du Restaurant de Louvrière<br>15 avenue de la place St Jean<br>91457, La Louvrière</div>`;

function App() {
  const editorRef = useRef();
  const resultRef = useRef();
  const [displayHtmlCode, setDisplayHtmlCode] = useState(true);
  const [htmlResult, setHtmlResult] = useState({ __html: '' });

  const handleChange = () => {
    const html = resultRef.current.value;
    setHtmlResult({ __html: html });
  }

  const handleFileAccept = (event) => {
    if (!event.file) event.preventDefault();
    const type = event.file.type;
    if (!type.includes('image/')) {
      event.preventDefault();
    }
  }

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const handleAttachment = async (event) => {
    const attachment = event.attachment;
    const base64 = await toBase64(attachment.file);
    attachment.setUploadProgress(100);
    const attributes = { previewable: false, url: base64 };
    attributes.content = `
    <span class="trix-preview-image" data-name="${attachment.file.name}" >
        <img src="${base64}" /> 
    <span>
    `;
    attachment.setAttributes(attributes);
  }

  const addListeners = () => {
    document.addEventListener('trix-change', handleChange);
    document.addEventListener('trix-file-accept', handleFileAccept);
    document.addEventListener('trix-attachment-add', handleAttachment);
  }

  const removeListeners = () => {
    document.removeEventListener('trix-change', handleChange);
    document.removeEventListener('trix-file-accept', handleFileAccept);
    document.removeEventListener('trix-attachment-add', handleAttachment);
  }

  useEffect(() => {
    addListeners();
    return removeListeners;
  }, []);

  return (
    <>
      <input value={defaultMail} ref={resultRef} type="hidden" id="trix" />
      <div className="trix-container">
        <trix-editor ref={editorRef} input="trix"></trix-editor>
      </div>
      <div>
        <div className='result-container'>
          <button onClick={() => setDisplayHtmlCode((bool) => !bool)}>
            {displayHtmlCode ? 'Preview' : 'Show source'}
          </button>
          {
            displayHtmlCode
              ? <textarea readOnly value={htmlResult.__html} />
              : <div dangerouslySetInnerHTML={htmlResult} />
          }
        </div>

      </div>
    </>
  );
}

export default App;
