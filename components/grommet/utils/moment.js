
export const shortDate = (date, locale = 'en-us') => (
  (new Date(date)).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
);


export const longDate = (date, locale = 'en-us') => (
  (new Date(date)).toLocaleDateString(locale, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
);
