export const slugify = (text: string) => {
  const charMap: Record<string, string> = {
    ü: 'u',
    Ü: 'u',
    ö: 'o',
    Ö: 'o',
    ə: 'e',
    Ə: 'e',
    ı: 'i',
    İ: 'i',
    ç: 'c',
    Ç: 'c',
    ş: 's',
    Ş: 's',
    ğ: 'g',
    Ğ: 'g',
  };

  return text
    .toString()
    .toLowerCase()
    .split('')
    .map(char => charMap[char] || char)
    .join('')
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};
