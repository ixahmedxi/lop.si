import axios from 'axios'

const baseUrl = 'https://us-central1-lopsi-ef5b7.cloudfunctions.net/'

export const createUrl = (url: string) => {
  return axios.get(`${baseUrl}createShortUrl?url=${url}`)
}

export const findUrlById = (id: string) => {
  return axios.get(`${baseUrl}findUrlById?id=${id}`)
}
