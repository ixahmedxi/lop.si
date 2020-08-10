const parseUrl = (url: string): string =>
  url.includes('http://') || url.includes('https://') ? url : 'https://' + String(url)

export default parseUrl
