export const errorFormatter = error => {
  return Object.keys(error)
    .filter(e => !e.startsWith('_'))
    .map(key => error[key]._errors?.[0])
    .join(' | ');
};
