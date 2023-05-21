import React from 'react'


import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, a11yLight, irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const CodeView = () => {
    const codeString = `
    const Component = () => {
    const codeString = '(num) => num + 1';
    return (
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    );
  `;
    return (
        <SyntaxHighlighter language="javascript" style={a11yLight} >
            {codeString.trim()}
        </SyntaxHighlighter>
    );
}
