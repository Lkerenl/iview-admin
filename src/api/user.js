import axios from '@/libs/api.request'

export const login = ({ userName, password, identity }) => {
  const data = {
    username,
    password,
    identity
  }
  return axios.request({
    url: '/api/login',
    data,
    method: 'post',
    responseType: 'json'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}
