export const msUntil = (dateStr: string): number => {
  const target = Date.parse(dateStr);

  if (isNaN(target)) return 0;

  return Math.max(0, target - Date.now());
};
