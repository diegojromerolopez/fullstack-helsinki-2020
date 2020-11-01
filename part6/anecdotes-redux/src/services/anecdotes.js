import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
    console.log('new anecdote: ', content)
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
  }

const update = async (anecdote) => {
    console.log('vote anecdote: ', anecdote)
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
    return response.data
}

const del = async (anecdote) => {
  console.log('delete anecdote: ', anecdote)
  const response = await axios.delete(`${baseUrl}/${anecdote.id}`)
  return response.data
}

const endpoints = { getAll, createNew, update, del }

export default endpoints
