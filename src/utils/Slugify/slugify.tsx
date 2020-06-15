export const slugify = (term: string) => {
  return term.replace(/[A-Z]/g, '-$&').toLowerCase();
};