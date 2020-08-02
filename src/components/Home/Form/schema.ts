import * as yup from 'yup'

const blacklist = [
  'bit.ly',
  'cutt.ly',
  'shorturl.at',
  'rebrandly',
  'tinyurl',
  'tiny.cc',
  'raboninco',
  'is.gd'
]

export const schema = yup.object().shape({
  url: yup
    .string()
    .required()
    .url()
    .test('is-short', 'Url cannot be a short url', (value: string) => !value.includes('://lop.si'))
    .test('is-last-url', 'Url has been recently shortened', (value: string) => {
      const lastUrl = window.localStorage.getItem('last-url')
      return !(lastUrl === value)
    })
    .test('is-blacklisted', 'Url provided is in our blacklist', (value: string) => {
      let pass = true
      blacklist.forEach((item) => {
        if (value.includes(item)) {
          pass = false
        }
      })
      return pass
    })
})
