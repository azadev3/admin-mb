export const parseDateToInput = (value: string | null | undefined): string => {
  if (!value) return '';

  // Eğer zaten YYYY-MM-DD formatında
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;

  // Eğer DD.MM.YYYY veya DD/MM/YYYY ise
  const dotParts = value.split('.');
  if (dotParts.length === 3) {
    return `${dotParts[2]}-${dotParts[1].padStart(2, '0')}-${dotParts[0].padStart(2, '0')}`;
  }

  const slashParts = value.split('/');
  if (slashParts.length === 3) {
    return `${slashParts[2]}-${slashParts[1].padStart(2, '0')}-${slashParts[0].padStart(
      2,
      '0',
    )}`;
  }

  // fallback: try Date parse
  const d = new Date(value);
  if (!isNaN(d.getTime())) {
    return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d
      .getDate()
      .toString()
      .padStart(2, '0')}`;
  }

  return '';
};
