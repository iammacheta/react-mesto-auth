import { BASE_URL } from '../utils/constants'

//  Универсальная обработка запроса
function request({
  END_POINT,
  method = 'POST',
  token,
  credentials
}) {
  return fetch(`${BASE_URL}${END_POINT}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      // Раскладываем ключ-значение, только если токен существует
      ...!!token && { "Authorization": `Bearer ${token}` }
    },
    // Раскладываем ключ-значение, только если данные для входа существуют
    ...!!credentials && { body: JSON.stringify(credentials) }
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`)
    })
}

function register(credentials) {
  return request({
    END_POINT: '/signup',
    credentials
  })
}


function authorize(credentials) {
  return request({
    END_POINT: '/signin',
    credentials
  })
}

function tokenVerification(token) {
  return request({
    END_POINT: '/users/me',
    method: 'GET',
    token
  })
}

export { register, authorize, tokenVerification }