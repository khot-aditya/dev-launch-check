import React from 'react'


import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, a11yLight, irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeViewProps {
  code: string;
}
export const CodeView = ({ code }: CodeViewProps) => {
  const codeString = code;
  return (
    <SyntaxHighlighter language="HTML5" style={a11yLight} >
      {codeString.trim()}
    </SyntaxHighlighter>
  );
}
