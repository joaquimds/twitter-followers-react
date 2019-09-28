import axios from 'axios'
import { API_URL } from '../constants'

export const fetchUserData = async () => {
  let data = null
  try {
    ({ data } = await axios.get(`${API_URL}/test`, { withCredentials: true }))
  } catch (e) {
    if (e.response && e.response.status) {
      if (e.response.status === 401) {
        return null
      }
      if (e.response.status === 429) {
        throw new Error('You are being rate limited. Please try again in 15 minutes.')
      }
    }
    throw new Error(e)
  }
  if (!data) {
    return null
  }
  if (data.errors) {
    throw new Error(data.errors.map(e => e.message).join(', '))
  }
  return data
}
