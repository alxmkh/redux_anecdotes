import axios from 'axios'

const baseURL = 'http://localhost:8001/anecdotes'

const getAllAnecdotes = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const createNewAnecdote = async (content) => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseURL, object)
    return response.data
}

const voteForAnecdote = async (object, id) => {
    const response = await axios.put(`${baseURL}/${id}`, object)
    return response.data
}

export default {getAllAnecdotes, createNewAnecdote, voteForAnecdote}