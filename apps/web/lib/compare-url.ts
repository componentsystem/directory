export function compareHref(slugs: string[]) {
  return `/compare/${slugs.join(";")}`;
}
