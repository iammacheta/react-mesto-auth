import { token } from "./constants"

import { BASE_URL } from '../utils/constants'

function register(credentials) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
    .then((res) => {
      try {
        if (res.ok) {
          return res.json();
        }
      } catch (err) {
        return (err)
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

function signIn() {

}

export { register, signIn }