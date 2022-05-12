import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getArticles() {
    return apiClient.get('/articles')
  },
  getArticle(id:number) {
    return apiClient.get('/articles/' + id)
  }
}
