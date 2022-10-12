import { BASE_URL } from '../utils/constants'

function register(credentials) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`)
    })
}

function authorize(credentials) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`)
    })
}

function tokenVerification(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`)
    })
}

export { register, authorize, tokenVerification }