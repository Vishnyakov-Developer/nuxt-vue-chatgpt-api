import axios from 'axios'
export default function (data = { name: 'default' }) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/api/test',
      data
    }).then(response => {
      resolve(response.data?.message || response.data)
    }).catch(error => {
      console.log(error)
      reject(error?.response?.data?.message)
    })
  })
}