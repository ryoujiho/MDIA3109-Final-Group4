import axios from 'axios'

export async function login({username, password}) {
    const result = await axios.post('/api/users/login', {username, password})
    return result.data
}

export async function signup({username, password}) {
    const result = await axios.post('/api/users', {username, password})
    return result.data
}