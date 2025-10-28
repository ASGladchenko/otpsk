const MS_IN_DAY = 24 * 60 * 60 * 1000;
const plural = new Intl.PluralRules('uk', { type: 'cardinal' });

export const formatDateIntl = (dateStr: string): string | null => {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat('ru-RU').format(date);
};

export const diffDays = (startDate: string, endDate: string): number | null => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return null;
  }

  const diff = end.getTime() - start.getTime();

  return Math.floor(diff / MS_IN_DAY);
};

export const formatDays = (count: number) => {
  const forms = {
    one: 'день',
    few: 'дні',
    many: 'днів',
    other: 'днів',
  };
  const form = plural.select(count);

  const suffix = forms[form as keyof typeof forms] || forms.many;

  return `${count} ${suffix}`;
};

export const getFormattedDaysBetween = (
  startDate: string,
  endDate: string
): string => {
  const days = diffDays(startDate, endDate);

  if (days === null) return 'Error';

  return formatDays(Math.abs(days));
};
