import axios from 'axios'

import tokenService from './token'

const baseUrl = 'http://localhost:3000/blogs'

const getAll = (blogId) => {
  const config = { headers: { Authorization: tokenService.getToken() } }
  const request = axios.get(`${baseUrl}/${blogId}/posts`, config)
  return request.then(response => response.data)
}

const create = async (blogId, newPost) => {
  const config = { headers: { Authorization: tokenService.getToken() } }
  const response = await axios.post(`${baseUrl}/${blogId}/posts`, newPost, config)
  return response.data
}

const like = async (blogId, id) => {
  const config = { headers: { Authorization: tokenService.getToken() } }
  const response = await axios.put(`${baseUrl}/${blogId}/posts/${id}/like`, null, config)
  return response.data
}

const unlike = async (blogId, id) => {
  const config = { headers: { Authorization: tokenService.getToken() } }
  const response = await axios.put(`${baseUrl}/${blogId}/posts/${id}/unlike`, null, config)
  return response.data
}

const deletePost = async (blogId, id) => {
  const config = { headers: { Authorization: tokenService.getToken() } }
  const response = await axios.delete(`${baseUrl}/${blogId}/posts/${id}`, config)
  return response.data
}

export default { getAll, create, like, unlike, deletePost }
