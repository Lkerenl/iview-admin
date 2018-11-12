import axios from '@/libs/api.request'

export const getTableData = () => {
  return axios.request({
    url: '/api/get_table_data',
    method: 'get'
  })
}

export const getCno = () => {
  return axios.request({
    url: '/api/confirm_score',
    method: 'get'
  })
}

export const getDetails = (cno) => {
  return axios.request({
    url: '/api/confirm_score',
    params: {
      cno
    },
    method: 'get'
  })
}

export const commitConfirm = (cno, confirm) => {
  const data = {
    cno,
    confirm
  }
  return axios.request({
    url: '/api/confirm_score',
    data,
    method: 'post'
  })
}

export const queryScore = (token, cno, time) => {
  const data = {
    token,
    cno,
    time
  }
  return axios.request({
    url: '/api/query_score',
    params: data,
    method: 'get'
  })
}

export const dumpScore = (st) => {
  const data = {
    st
  }
  return axios.request({
    url: '/api/dump_score',
    params: data,
    method: 'get'
  })
}

export const getDragList = () => {
  return axios.request({
    url: 'get_drag_list',
    method: 'get'
  })
}

export const errorReq = () => {
  return axios.request({
    url: 'error_url',
    method: 'post'
  })
}

export const saveErrorLogger = info => {
  return axios.request({
    url: 'save_error_logger',
    data: info,
    method: 'post'
  })
}
