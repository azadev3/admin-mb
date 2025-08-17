import React from 'react';

interface HighlighterProps {
  text: string | null | undefined;
  highlight: string;
}

const Highlighter: React.FC<HighlighterProps> = ({ text, highlight }) => {
  if (!text) return <>{text}</>;
  if (!highlight) return <>{text}</>;

  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} style={{ backgroundColor: 'yellow', color: 'black' }}>
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
};

export default Highlighter;
