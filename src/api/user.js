import axios from '@/libs/api.request'

export const login = ({ userName, password, identity }) => {
  const data = {
    userName,
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
    url: '/api/get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: '/api/logout',
    method: 'post'
  })
}
