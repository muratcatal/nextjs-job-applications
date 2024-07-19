export const getQueryParams = <T>(urlStr: string): T => {
  const url = new URL(urlStr);
  const params = new URLSearchParams(url.searchParams);
  return Object.fromEntries(params) as T;
};
