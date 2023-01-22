import axios from 'axios'

export const getApi = (contenType: string = 'application/json') =>
  axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
      'Content-Type': contenType,
      authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  })
