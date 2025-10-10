import React from 'react';

export const SearchHighlighter: React.FC<{ text: string; highlight: string }> = ({
  text,
  highlight,
}) => {
  if (!highlight.trim()) return <>{text}</>;

  try {
    const regex = new RegExp(`(${highlight})`, 'gi'); // case-insensitive global
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, i) =>
          part.toLocaleLowerCase('az') === highlight.toLocaleLowerCase('az') ? (
            <mark key={i} style={{ backgroundColor: 'yellow', fontWeight: 'bold' }}>
              {part}
            </mark>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          ),
        )}
      </>
    );
  } catch (err) {
    return <>{text}</>;
  }
};
