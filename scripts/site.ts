const { CF_PAGES, CF_PAGES_URL, PORT } = import.meta.env;

export const site = CF_PAGES ? CF_PAGES_URL : `http://localhost:${PORT}`;