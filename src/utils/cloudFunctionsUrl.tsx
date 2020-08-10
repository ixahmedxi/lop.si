export const cfu = (method: 'findUrlById' | 'createShortUrl', query: string): string =>
  `https://us-central1-lopsi-ef5b7.cloudfunctions.net/${method + query}`
