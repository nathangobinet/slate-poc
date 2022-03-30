import { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

export interface IframeForwardRef {
  getFullHtml: () => string,
}

interface IframeProps {
  children: any,
}

const mailStyle = `
  html, body {
    margin: 0;
  }
  html {
    background-color: #fefefe;
    font-family: 'Ubuntu', sans-serif;
  }
  body {
    margin: 15px;
  }
  img {
    max-width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  figure {
    margin-right: 0;
    margin-left: 0;
    display: block;
  }
  figcaption {
    margin-top: 5px;
    text-align: center;
  }
  h1, h2, h3 {
    font-weight: normal;
  }
  hr {
    background-clip: content-box;
    border-style: none;
    height: 2px;
    border-radius: 1px;
    background-color: #ddd;
  }

  p {
    margin: 0px;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const Iframe = forwardRef<IframeForwardRef, IframeProps>(({ children }, ref) => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement>();
  const mountNode = contentRef?.contentWindow?.document?.body;

  const setIframeRef = useMemo(() => setContentRef as any, [setContentRef]);

  useEffect(() => {
    if (!contentRef) return;
    const frameDocument = contentRef.contentWindow?.document;
    if (!frameDocument) return;
    const style = frameDocument.createElement('style');
    style.innerHTML = mailStyle;
    frameDocument.head.innerHTML = '';
    frameDocument.head.appendChild(style);
  }, [contentRef]);

  const getFullHtml = (): string => {
    const document = contentRef?.contentWindow?.document;
    if (!document) return '';
    return contentRef?.contentWindow?.document.documentElement.outerHTML;
  };

  useImperativeHandle(ref, () => ({
    getFullHtml,
  }));

  return (
    <iframe style={{ width: '100%', minHeight: '300px' }} ref={setIframeRef}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
});