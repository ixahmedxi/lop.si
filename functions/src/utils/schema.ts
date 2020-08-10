import * as yup from 'yup'

const blacklist = [
  'bit.ly',
  'cutt.ly',
  'shorturl.at',
  'rebrandly',
  'tinyurl',
  'tiny.cc',
  'raboninco',
  'is.gd',
  'lop.si'
]

export const urlValidation = yup
  .string()
  .required()
  .url()
  .test('is-blacklisted', 'Url provided is in our blocked list', (value: string) => {
    const matchingList = blacklist.filter((item) => value.includes(item))
    if (matchingList.length >= 1) {
      return false
    }
    return true
  })

export const idValidation = yup.string().required().length(4)
