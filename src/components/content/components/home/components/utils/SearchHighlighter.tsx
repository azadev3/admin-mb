export const SearchHighlighter: React.FC<{ text: string; highlight: string }> = ({
  text,
  highlight,
}) => {
  if (!highlight.trim()) return <>{text}</>;

  const lowerText = text.toLocaleLowerCase('az');
  const lowerHighlight = highlight.toLocaleLowerCase('az');

  const parts: React.ReactNode[] = [];
  let start = 0;
  let index = lowerText.indexOf(lowerHighlight);

  while (index !== -1) {
    parts.push(text.substring(start, index));
    parts.push(
      <mark key={index} style={{ backgroundColor: 'yellow', fontWeight: 'bold' }}>
        {text.substring(index, index + highlight.length)}
      </mark>,
    );
    start = index + highlight.length;
    index = lowerText.indexOf(lowerHighlight, start);
  }

  parts.push(text.substring(start));
  return <>{parts}</>;
};
