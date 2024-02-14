import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('Type markdown here');

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea value={markdown} onChange={handleMarkdownChange} />

      <div>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

function reverseSentence(sentence) {
    const reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}

const inputSentence = 'hello world';
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence);
