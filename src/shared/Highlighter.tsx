import React from 'react';
import DOMPurify from 'dompurify';

interface HighlighterProps {
  text: string | null | undefined;
  highlight: string;
  maxHeight?: string; 
}

const Highlighter: React.FC<HighlighterProps> = ({ text, highlight, maxHeight = "150px" }) => {
  if (!text) return <div>-</div>;

  let cleanHtml = DOMPurify.sanitize(text ?? "");

  if (highlight) {
    const regex = new RegExp(`(${highlight})`, "gi");
    cleanHtml = cleanHtml.replace(
      regex,
      `<mark style="background:yellow;color:black;">$1</mark>`
    );
  }

  return (
    <div
      style={{
        maxHeight,
        overflowY: "auto",  
        lineHeight: "1.5",
        padding: "4px",
        borderRadius: "4px",
        background: "#fff",
      }}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
};

export default Highlighter;
