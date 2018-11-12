import axios from '@/libs/api.request'

export const getTableData = (key) => {
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

export const getInsertData = () => {
  return axios.request({
    url: '/api/get_insert_data',
    method: 'get'
  })
}

export const commitTableData = (tableData, key) => {
  const data = {
    tableData,
    key
  }
  return axios.request({
    url: '/api/commitTableData',
    data,
    method: 'post'
  })
}

export const getScoreCnoData = () => {
  return axios.request({
    url: '/api/getScoreCnoData',
    method: 'get'
  })
}

export const getScoreData = (key) => {
  return axios.request({
    url: '/api/getScoreData',
    data: key,
    method: 'post'
  })
}

export const updatePassword = (oldPassword, newPassword) => {
  const data = {
    oldPassword,
    newPassword
  }
  return axios.request({
    url: '/api/updatePassword',
    data,
    method: 'post'
  })
}

export const getAllScore = (key) => {
  return axios.request({
    url: '/api/getAllScore',
    data: key,
    method: 'post'
  })
}
