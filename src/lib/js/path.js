export const get = (page) => {
  let path = [page.slug];
  let parentPage = page.parentPage;

  while (parentPage) {
    path.unshift(parentPage.slug);
    parentPage = parentPage.parentPage;
  }

  return path.join("/");
};
