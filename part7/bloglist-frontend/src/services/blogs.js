import axios from 'axios'

import tokenService from './token'

const baseUrl = 'http://localhost:3001/blogs'

const getAll = () => {
  const config = { headers: { Authorization: tokenService.getToken() } }
  const request = axios.get(`${baseUrl}`, config)
  return request.then(response => response.data)
}

const create = async newObject => {
  const config = { headers: { Authorization: tokenService.getToken() } }
  const response = await axios.post(`${baseUrl}`, newObject, config)
  return response.data
}

const update = (id, updatedFields) => {
  const config = { headers: { Authorization: tokenService.getToken() } }
  const request = axios.put(`${baseUrl}/${id}`, updatedFields, config)
  return request.then(response => response.data)
}

const like = async (id) => {
  const config = { headers: { Authorization: tokenService.getToken() } }
  const response = await axios.put(`${baseUrl}/${id}/like`, null, config)
  return response.data
}

const unlike = async (id) => {
  const config = { headers: { Authorization: tokenService.getToken() } }
  const response = await axios.put(`${baseUrl}/${id}/unlike`, null, config)
  return response.data
}

const deleteBlog = async (id) => {
  const config = { headers: { Authorization: tokenService.getToken() } }
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}


export default { getAll, create, update, like, unlike, deleteBlog }
